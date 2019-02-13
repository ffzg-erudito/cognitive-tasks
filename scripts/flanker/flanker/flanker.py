"""A flanker task implementation based on Friedman, N. P., & Miyake, A. (2004).
The relations among inhibition and interference control functions: a
latent-variable analysis. Journal of experimental psychology: General, 133(1),
101."""
from expyriment import control, design, io, stimuli

from flanker.helpers import stimChecker, conditionChecker

# DEV MODE
control.set_develop_mode(True)

# experiment variables
trialsPerCondInTest = 10
trialPerCondInPractice = 8
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


for i in range(0, numTestBlocks + numPracticeBlocks):
    if i < numPracticeBlocks:
        trialsToAdd = trialPerCondInPractice
    else:
        trialsToAdd = trialsPerCondInTest

    block = design.Block()

    stimCheckFlag = True
    condCheckFlag = False

    while stimCheckFlag or not condCheckFlag:
        block.clear_trials()
        block.add_trials_full_factorial(factors, copies=trialsToAdd)

        for trial in block.trials:
            factorLevel = trial.get_factor('congruency')
            stimulus = design.randomize.rand_element(factorLevels[factorLevel])
            trial.add_stimulus(stimuli.TextLine(stimulus))

        for j in range(0, 500):
            stimCheckFlag = stimChecker(block.trials, factorLevels)
            condCheckFlag = conditionChecker(block.trials)

            if stimCheckFlag or not condCheckFlag:
                block.shuffle_trials(max_repetitions=1)
            else:
                break

    experiment.add_block(block)

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
