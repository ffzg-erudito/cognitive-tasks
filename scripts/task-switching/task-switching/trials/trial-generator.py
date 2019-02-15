# this script is used to create the experimental trials and save them to a file
# which is loaded at startup
from expyriment import design, misc, control

control.set_develop_mode(True)

experiment = design.Experiment('Task switching',
                               foreground_colour=misc.constants.C_BLACK,
                               background_colour=misc.constants.C_WHITE,
                               text_font='Courier', text_size=22)

# experiment variables
# experiment schema
expSchema = []

# number of blocks
numBlocks = {'blockPracticePureFeed': 2, 'blockPracticePureNoFeed': 2,
             'blockPracticeMixedFeed': 1, 'blockPracticeMixedNoFeed': 1,
             'blockTestPure': 2, 'blockTestMixed': 2}

# number of trials
numTrials = {'trialsPracticePureFeed': 8, 'trialsPracticePureNoFeed': 16,
             'trialsPracticeMixed': 24, 'trialsTestPure': 32,
             'trialsTestMixed': 72}

# factors and factor levels
factors = {'high-low': ['isHigher', 'isLower'],
           'odd-even': ['isOdd', 'isEven']}

factorStimuli = {'isHigher': [6, 7, 8, 9],
                 'isLower': [1, 2, 3, 4],
                 'isOdd': [1, 3, 7, 9],
                 'isEven': [2, 4, 6, 8]}

correctResponses = {'isHigher': misc.constants.K_l,
                    'isEven': misc.constants.K_l,
                    'isLower': misc.constants.K_a,
                    'isOdd': misc.constants.K_a}

# generating trials
control.initialize(experiment)

control.end()
