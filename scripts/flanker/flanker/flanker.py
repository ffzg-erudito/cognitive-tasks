"""A flanker task implementation based on Friedman, N. P., & Miyake, A. (2004).
The relations among inhibition and interference control functions: a
latent-variable analysis. Journal of experimental psychology: General, 133(1),
101."""

from expyriment import control, design, io, stimuli

# DEV MODE
control.set_develop_mode(True)

# experiment variables
trialsPerCondInBlock = 10
numTestBlocks = 4
numPracticeBlocks = 1

fixCrossDuration = 500
blankDuration = 1000

factors = {'congruency': ['congruent', 'incongruent', 'same', 'control']}

factorLevels = {'congruent': ['HHHKHHH', 'KKKHKKK', 'CCCSCCC', 'SSSCSSS'],
                'incongruent': ['CCCKCCC', 'CCCHCCC', 'HHHSHHH', 'HHHCHHH',
                                'SSSKSSS', 'SSSHSSS', 'KKKSKKK', 'KKKCKKK'],
                'same': ['HHHHHHH', 'KKKKKKK', 'SSSSSSS', 'CCCCCCC'],
                'control': ['H', 'C', 'S', 'K']}

# experiment setup
experiment = design.Experiment(name='Flanker', foreground_colour=(0, 0, 0),
                               background_colour=(255, 255, 255),
                               text_font='Courier', text_size=22)

# initialize experiment
control.initialize(experiment)

# set variable names
experiment.add_data_variable_names(['subject', 'condition', 'reactionTime',
                                    'stimulus', 'response'])


def createBlocks(experiment, numPracticeBlocks, numTestBlocks, factors,
                 factorLevels):
    """Creates practice and test blocks."""

    for i in range(0, numTestBlocks + numPracticeBlocks):
        if i < numPracticeBlocks:
            block = design.Block()
            block.add_trials_full_factorial(factors, copies=8)
            for trial in block.trials:
                factorLevel = trial.get_factor('congruency')
                stimulus = design.randomize.rand_element(
                    factorLevels[factorLevel])
                trial.add_stimulus(stimuli.TextLine(stimulus))
                trial.preload_stimuli()
            experiment.add_block(block)
        else:
            block = design.Block()
            block.add_trials_full_factorial(factors,
                                            copies=trialsPerCondInBlock)
            for trial in block.trials:
                factorLevel = trial.get_factor('congruency')
                stimulus = design.randomize.rand_element(
                    factorLevels[factorLevel])
                trial.add_stimulus(stimuli.TextLine(stimulus))
                trial.preload_stimuli()
            experiment.add_block(block)


def stimChecker(trials, factorLevels):
    """Checks whether the distractor from trial N is the target in trial N+1.
    Returns False if there is no such case, and True if there is."""

    for i in range(0, len(trials) - 1):
        stimCurrent = trials[i].stimuli[0]
        stimNext = trials[i + 1].stimuli[0]

        currentText = stimCurrent.text
        nextText = stimNext.text

        # if it's a control condition, skip, since there is no distractor
        if currentText in factorLevels.get('control') and i < len(trials) - 2:
            continue
        elif nextText in factorLevels.get('control') and\
                currentText[0] == nextText and i < len(trials) - 2:
            return True
        elif nextText not in factorLevels.get('control') and\
                currentText[0] == nextText[3] and i < len(trials) - 2:
            return True
        elif i < len(trials) - 2:
            continue
        else:
            return False


def shuffleTrials(experiment, maxIter=1000):
    """Shuffle trials so that two identical stimuli aren't repeated, that
    each condition appears maximally 3 consecutive times and that two identical
    stimuli don't appear consecutively."""

    results = []

    for block in experiment.blocks:
        checkFlag = stimChecker(block.trials, factorLevels)
        if checkFlag is False:
            results.append(True)
            continue
        else:
            nIter = 1

            while checkFlag and nIter <= maxIter:
                block.shuffle_trials(max_repetitions=1)
                checkFlag = stimChecker(block.trials, factorLevels)
                if checkFlag is False:
                    results.append(True)
                    break
                elif nIter < maxIter:
                    nIter += 1
                elif nIter == maxIter:
                    results.append(False)
                    break

    return results


# preparing global stimuli
blank = stimuli.BlankScreen()
blank.preload()
fixCross = stimuli.FixCross()
fixCross.preload()
responseInput = io.TextInput("")

# start experiment
control.start()
blank.present()
experiment.clock.wait(blankDuration)
# main loop
for block in experiment.blocks:
    for trial in block.trials:
        trial.stimuli[0].present()
        experiment.clock.wait(500)
control.end()
