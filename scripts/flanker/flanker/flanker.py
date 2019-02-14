"""A flanker task implementation based on Friedman, N. P., & Miyake, A. (2004).
The relations among inhibition and interference control functions: a
latent-variable analysis. Journal of experimental psychology: General, 133(1),
101."""
from expyriment import control, design, io, misc, stimuli

from flanker.helpers import conditionChecker, stimChecker

# DEV MODE
control.set_develop_mode(True)

# experiment variables
trialsPerCondInTest = 4
trialPerCondInPractice = 2
numTestBlocks = 2
numPracticeBlocks = 1

fixCrossDuration = 500
blankDuration = 1000

factors = {'congruency': ['congruent', 'incongruent', 'same', 'control']}

factorLevels = {'congruent': ['HHHKHHH', 'KKKHKKK', 'CCCSCCC', 'SSSCSSS'],
                'incongruent': ['CCCKCCC', 'CCCHCCC', 'HHHSHHH', 'HHHCHHH',
                                'SSSKSSS', 'SSSHSSS', 'KKKSKKK', 'KKKCKKK'],
                'same': ['HHHHHHH', 'KKKKKKK', 'SSSSSSS', 'CCCCCCC'],
                'control': ['H', 'C', 'S', 'K']}

keyDict = {'121': 'K', '109': 'M'}

# experiment setup
experiment = design.Experiment(name='Flanker', foreground_colour=(0, 0, 0),
                               background_colour=(255, 255, 255),
                               text_font='Courier', text_size=22)

# initialize experiment
control.initialize(experiment)

# set variable names
experiment.add_data_variable_names(['subjectNo', 'subjectCode', 'condition',
                                    'reactionTime', 'stimulus', 'response',
                                    'blockName'])


for i in range(0, numTestBlocks + numPracticeBlocks):
    if i < numPracticeBlocks:
        trialsToAdd = trialPerCondInPractice
        blockName = 'practice'
    else:
        trialsToAdd = trialsPerCondInTest
        blockName = 'test'

    block = design.Block(blockName)

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

for block in experiment.blocks:
    for trial in block.trials:
        trial.preload_stimuli()

# preparing global stimuli
blank = stimuli.BlankScreen()
blank.preload()
fixCross = stimuli.FixCross()
fixCross.preload()

# preparing instructions and subject code entry screens
instructions = ''

subCodeText = 'Molimo Vas, unesite svoju šifru - prva dva slova imena majke, \
posljednja dva slova imena oca i posljednje dvije znamenke broja mobilnog \
telefona. Pritom nemojte koristiti dijakritičke znakove, a slova poput "nj" \
tretirajte kao dva slova.'

subCodeInstr = stimuli.TextBox(text=subCodeText, size=(600, 200))
subCodeInput = io.TextInput(length=6, background_stimulus=subCodeInstr,
                            position=(0, -100))

# TODO: dodati uputu - pronaći uputu

# start experiment
control.start()
# main loop
subCode = subCodeInput.get()
# TODO: uputa
for block in experiment.blocks:
    for trial in block.trials:
        blank.present()
        experiment.clock.wait(blankDuration)
        fixCross.present()
        experiment.clock.wait(fixCrossDuration)
        trial.stimuli[0].present()
        key, rt = experiment.keyboard.wait([misc.constants.K_y,
                                            misc.constants.K_m])
        experiment.data.add([experiment.subject, subCode,
                             trial.get_factor('congruency'), rt,
                             trial.stimuli[0].text, keyDict[str(key)],
                             block.name])
control.end()
