"""A flanker task implementation based on Friedman, N. P., & Miyake, A. (2004).
The relations among inhibition and interference control functions: a
latent-variable analysis. Journal of experimental psychology: General, 133(1),
101."""

from expyriment import control, design, io, misc, stimuli

# DEV MODE
control.set_develop_mode(True)

# experiment variables
numBlocks = 4
numTrials = 160

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

# prepare practice block
practiceBlock = design.Block()
practiceBlock.add_trials_full_factorial(factors, copies=8)

for trial in practiceBlock.trials:
    factorLevel = trial.get_factor('congruency')
    stimulus = design.randomize.rand_element(factorLevels[factorLevel])
    trial.add_stimulus(stimuli.TextLine(stimulus))
    trial.preload_stimuli()

# add practice block to experiment
experiment.add_block(practiceBlock)

# function used to check constratints on stimulus order
def stimChecker(trials):
    """Checks whether the distractor from trial N is the target in trial N+1.
    Returns False if there is no such case, and True if there is."""
    for i in range(0, len(trials) - 1):
        stimCurrent = trials[i].stimuli[0]
        stimNext = trials[i + 1].stimuli[0]

        currentText = stimCurrent.text
        nextText = stimNext.text

        # if it's a control condition, skip, since there is no distractor
        if stimCurrent in factorLevels.get('control'):
            continue
        elif currentText[0] == nextText[3]:
            return True
        else:
            return False

# initialize external block with trials
trialGenerator = design.Block()
trialGenerator.add_trials_full_factorial(factors, copies=40)

for trial in trialGenerator.trials:
    factorLevel = trial.get_factor('congruency')
    stimulus = design.randomize.rand_element(factorLevels[factorLevel])
    trial.add_stimulus(stimuli.TextLine(stimulus))
    trial.preload_stimuli()

# shuffle trials
loopFlag = True
while loopFlag:
    trialGenerator.shuffle_trials(max_repetitions=3)
    loopFlag = stimChecker(trialGenerator.trials)

# chunk into four blocks
trialsBlocked = [trialGenerator.trials[i:i + 40]
                 for i in range(0, len(trialGenerator.trials), 40)]

for trialBlock in trialsBlocked:
    block = design.Block()
    for trial in trialBlock:
        block.add_trial(trial)
    experiment.add_block(block)
