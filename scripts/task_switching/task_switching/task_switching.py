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

# experiment variables
blankDuration = 100
stimDuration = 1500

# instructions
instructionsIntro = '''Sada ćete rješavati jedan zadatak biranog reagiranja.

Na sredini zaslona će se pojavljivati brojke od 1 do 9, osim broja 5, a Vaš je\
 zadatak da donesete jednu od dvije moguće procjene.

Pritisnite ENTER za nastavak upute.'''

instructionsGeneral1 = '''Prva procjena koju ćete trebati donijeti jest je li\
 prikazani broj paran ili neparan.

Druga procjena jest je li prikazani broj veći li manji od 5.

Pritisnite ENTER za nastavak upute.'''

instructionsGeneral2 = '''Ako je broj prikazan u BIJELOM kvadratu, trebate\
 procijeniti je li on paran ili neparan.

Ako je broj prikazan u SIVOM kvadratu, trebate procijeniti je li on veći ili\
 manji od 5.

Pritisnite ENTER za nastavak upute.'''

instructionsOddEvenPractice = '''Sada ćete uvježbavati procjenu parnosti broja.

Ako je prikazani broj PARAN, pritisnite tipku L na tipkovnici.

Ako je prikazani broj NEPARAN, pritisnite tipku A na tipkovnici.

Sad ćete proći kroz nekoliko pokušaja za uvježbavanje, pri čemu ćete dobivati\
 povratnu informaciju o točnosti.

Pritisnite ENTER kako biste započeli pokušaje za uvježbavanje.'''

instructionsOddEvenTest = '''Došli ste do kraja pokušaja za uvježbavanje.

Slijede testni pokušaji, u kojima nećete dobivati povratnu informaciju o\
 točnosti.

Ako imate pitanja, sad je dobro vrijeme za postaviti ih. U protivnom,\
 pritisnite ENTER kako biste započeli s testnim pokušajima.'''

instructionsHighLowPractice = '''Sada ćete uvježbavati procjenu veličine broja.

Ako je prikazani broj VEĆI od 5, pritisnite tipku L na tipkovnici.

Ako je prikazani broj MANJI od 5, pritisnite tipku A na tipkovnici.

Sad ćete proći kroz nekoliko pokušaja za uvježbavanje, pri čemu ćete dobivati\
 povratnu informaciju o točnosti.

Pritisnite ENTER kako biste započeli pokušaje za uvježbavanje.'''

instructionsHighLowTest = '''Došli ste do kraja pokušaja za uvježbavanje.

Slijede testni pokušaji, u kojima nećete dobivati povratnu informaciju o\
 točnosti.

Ako imate pitanja, sad je dobro vrijeme za postaviti ih. U protivnom,\
 pritisnite ENTER kako biste započeli s testnim pokušajima.'''

instructionsMixed = '''U ostatku zadatka, procjene parnosti i veličine\
 prikazanog broja pravilno će se izmijenjivati.

Napominjemo, ako je Vaš zadatak procijeniti PARNOST broja, broj će biti\
 prikazan u BIJELOM kvadratu.

Ako je Vaš zadatak procijeniti VELIČINU broja, broj će biti prikazan u\
 BIJELOM kvadratu.

Pritisnite ENTER za nastavak upute.'''

instructionsMixedPractice = ''''''

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
