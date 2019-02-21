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
                               background_colour=misc.constants.C_GREY,
                               text_font='Courier', text_size=22)

control.initialize(experiment)

experiment.add_data_variable_names(['subjectNo',
                                    'subjectCode',
                                    'task',
                                    'reactionTime',
                                    'stimulus',
                                    'response',
                                    'isCorrect',
                                    'blockName',
                                    'isSwitchTrial'])

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
            bgColor = misc.constants.C_DARKGREY

        trial.set_factor('task', task)

        stimulus = stimuli.TextLine(text=str(row[1].stimulus),
                                    text_size=22, text_font='Courier',
                                    text_bold=True)

        backBox = stimuli.Rectangle(size=(200, 200), colour=bgColor)

        stimulus.plot(backBox)

        trial.add_stimulus(backBox)
        trial.preload_stimuli()

        block.add_trial(trial)

    experiment.add_block(block)

# preparing general stimuli

blank = stimuli.BlankScreen()
blank.preload()

control.start()
for i, block in enumerate(experiment.blocks):
    for j, trial in enumerate(block.trials):
        blank.present()
        experiment.clock.wait(blankDuration)

        designRow = expDesign[(expDesign.blockCnt == i) &
                              (expDesign.trialCnt == j)]

        correctResponse = designRow.correctResponse.values[0]
        task = trial.get_factor('task')
        isSwitchTrial = designRow.switch.values[0]
        stimText = designRow.stimulus.values[0]

        trial.stimuli[0].present()

        key, rt = experiment.keyboard.wait([misc.constants.K_a,
                                            misc.constants.K_l],
                                           duration=stimDuration)

        if key is None:
            isCorrect = 0
            rt = 'NA'
        elif key == correctResponse:
            isCorrect = 1
        else:
            isCorrect = 0

        experiment.data.add([experiment.subject,
                             task,
                             rt,
                             stimText,
                             key,
                             isCorrect,
                             blockName,
                             isSwitchTrial])

control.end()
