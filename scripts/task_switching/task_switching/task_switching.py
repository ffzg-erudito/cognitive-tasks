# pogledaj šta treba da radiš
from os.path import join

import pandas as pd

from expyriment import control, design, misc, stimuli

# DEV MODE
control.set_develop_mode(True)

# localization
control.defaults.goodbye_text = '''Zadatak je gotov. Molim Vas, pozovite\
 eksperimentatora.'''

# app variables
control.defaults.goodbye_delay = 5000
control.defaults.fast_quit = False

blankDuration = 100
stimDuration = 1500

# experiment variables
correctResponses = {'isHigher': misc.constants.K_l,
                    'isEven': misc.constants.K_l,
                    'isLower': misc.constants.K_a,
                    'isOdd': misc.constants.K_a}

# TODO: instructions

# improting design
expDesign = pd.read_csv(join('task_switching', 'trials', 'design.csv'))

# generating experiment
experiment = design.Experiment(name='Task switching',
                               foreground_colour=(0, 0, 0),
                               background_colour=(255, 255, 255),
                               text_font='Courier', text_size=22)

control.initialize(experiment)

experiment.add_data_variable_names(['subjectNo', 'subjectCode', 'task',
                                    'taskCondition', 'reactionTime',
                                    'stimulus', 'response', 'isCorrect',
                                    'blockName', 'isSwitchTrial'])

# creating blocks
experiment.clear_blocks()
for blockNo in expDesign.blockCnt.unique():
    rows = expDesign[expDesign.blockCnt == blockNo]

    blockName = rows.blockName.unique()[0]

    block = design.Block(blockName)

    for row in rows.iterrows():
        trial = design.Trial()

        task = row[1].task
        if task == 'odd-even':
            bgColor = misc.constants.C_WHITE
        else:
            bgColor = misc.constants.C_GREY

        stimulus = stimuli.TextBox(text=str(row[1].stimulus), size=(200, 200),
                                   background_colour=bgColor)

        trial.add_stimulus(stimulus)
        trial.preload_stimuli()

        block.add_trial(trial)

    experiment.add_block(block)

# preparing general stimuli

blank = stimuli.BlankScreen()
blank.preload()

control.end()
