# pogledaj šta treba da radiš
import re

from os.path import join

import pandas as pd

from expyriment import control, design, io, misc, stimuli

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
instructionsIntro = '''Sad ćete rješavati jedan zadatak biranog reagiranja.

Na sredini zaslona će se pojavljivati brojke od 1 do 9, osim broja 5, a Vaš će\
 zadatak biti da donesete jednu od dvije moguće procjene.

Pritisnite ENTER za nastavak upute.'''

instructionsGeneral1 = '''Trebat ćete ili procijeniti PARNOST prikazanog broja\
 ili njegovu VELIČINU.

Ako je broj prikazan u BIJELOM kvadratu, trebate procijeniti je li on\
 paran ili neparan.

Pritisnite ENTER za nastavak upute.'''

instructionsGeneral2 = '''Ako je broj prikazan u SIVOM kvadratu, trebate\
 procijeniti je li on veći ili manji od 5.

Za svaku procjenu imate 1.5 sekundi. Ako u tom vremenu ne odgovorite, računalo\
 će zabilježiti pogrešan odgovor.

Pritisnite ENTER za nastavak upute.'''

instructionsOddEvenPractice = '''Sada ćete uvježbavati procjenu parnosti broja.

Ako je prikazani broj PARAN, pritisnite tipku L na tipkovnici.

Ako je prikazani broj NEPARAN, pritisnite tipku A na tipkovnici.

Proći ćete kroz nekoliko zadataka za uvježbavanje, pri čemu ćete dobivati\
 povratnu informaciju o točnosti.

Pritisnite ENTER kako biste započeli zadatke za uvježbavanje.'''

instructionsOddEvenTest = '''Došli ste do kraja zadataka za uvježbavanje.

Slijede testni zadaci, u kojima nećete dobivati povratnu informaciju o\
 točnosti.

Ako imate pitanja, sad je dobro vrijeme za postaviti ih. U protivnom,\
 pritisnite ENTER kako biste započeli s testnim zadacima.'''

instructionsHighLowPractice = '''Sada ćete uvježbavati procjenu veličine broja.

Ako je prikazani broj VEĆI od 5, pritisnite tipku L na tipkovnici.

Ako je prikazani broj MANJI od 5, pritisnite tipku A na tipkovnici.

Sad ćete proći kroz nekoliko zadataka za uvježbavanje, pri čemu ćete dobivati\
 povratnu informaciju o točnosti.

Pritisnite ENTER kako biste započeli zadatke za uvježbavanje.'''

instructionsHighLowTest = '''Došli ste do kraja zadataka za uvježbavanje.

Slijede testni zadaci, u kojima nećete dobivati povratnu informaciju o\
 točnosti.

Ako imate pitanja, sad je dobro vrijeme za postaviti ih. U protivnom,\
 pritisnite ENTER kako biste započeli s testnim zadacima.'''

instructionsMixed = '''U ostatku zadatka, procjene parnosti i veličine\
 prikazanog broja pravilno će se izmjenjivati.

Napominjemo, ako je Vaš zadatak procijeniti PARNOST broja, broj će biti\
 prikazan u BIJELOM kvadratu.

Ako je Vaš zadatak procijeniti VELIČINU broja, broj će biti prikazan u\
 SIVOM kvadratu.

Pritisnite ENTER za nastavak upute.'''

instructionsMixedPractice = '''Sada slijedi nekoliko zadataka za uvježbavanje,\
 u kojima ćete dobivati povratnu informaciju u svojoj točnosti.

Pritisnite ENTER kako biste započeli zadatke za uvježbavanje.'''

instructionsMixedTest = '''Ovo je kraj zadataka za uvježbavanje.

Slijede testni zadaci, u kojima nećete dobivati povratnu informaciju o svojoj\
 točnosti.

Zadaci su podijeljeni u dva bloka, između kojih možete uzeti pauzu.

Stoga, pokušajte raditi što brže i što točnije možete.

Ako imate pitanja, sad je dobro vrijeme za postaviti ih. U protivnom,\
 pritisnite ENTER kako biste započeli s testnim zadacima.'''

subCodeText = '''Molimo Vas, unesite svoju šifru - prva dva slova imena majke,\
 posljednja dva slova imena oca i posljednje dvije znamenke broja mobilnog\
 telefona.

Pritom nemojte koristiti dijakritičke znakove, a slova poput "nj"\
 tretirajte kao dva slova.

Svoj unos potvrdite pritiskom tipke ENTER.'''

breakText = '''Ovo je kraj prvog bloka miješanih zadataka.

Slobodno uzmite malu pauzu, a kad ste spremni, pritisnite ENTER kako biste\
 započeli posljednji blok zadataka.'''

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

# preparing instructions, feedback, subject code entry
subCodeInstr = stimuli.TextBox(text=subCodeText, size=(800, 400))
subCodeInput = io.TextInput(length=6, background_stimulus=subCodeInstr,
                            position=(0, -100))

feedbackCorrect = stimuli.TextLine(text='Točno!',
                                   text_colour=misc.constants.C_GREEN,
                                   text_bold=True)
feedbackCorrect.preload()

feedbackIncorrect = stimuli.TextLine(text='Pogrešno!',
                                     text_colour=misc.constants.C_RED,
                                     text_bold=True)
feedbackIncorrect.preload()

subCode = ''

# set to 1 after 1st mixed test block to initiate a break
testMixedCnt = 0

instructions1 = stimuli.TextScreen(heading='Uputa', text=instructionsIntro)
instructions2 = stimuli.TextScreen(heading='', text=instructionsGeneral1)
instructions3 = stimuli.TextScreen(heading='', text=instructionsGeneral2)
instructions4 = stimuli.TextScreen(heading='',
                                   text=instructionsOddEvenPractice)
instructions5 = stimuli.TextScreen(heading='', text=instructionsOddEvenTest)
instructions6 = stimuli.TextScreen(heading='',
                                   text=instructionsHighLowPractice)
instructions7 = stimuli.TextScreen(heading='', text=instructionsHighLowTest)
instructions8 = stimuli.TextScreen(heading='', text=instructionsMixed)
instructions9 = stimuli.TextScreen(heading='', text=instructionsMixedPractice)
instructions10 = stimuli.TextScreen(heading='', text=instructionsMixedTest)

breakBlockInstructions = stimuli.TextScreen(heading='Pauza', text=breakText)

instrBlocks = {'practicePureFeedOE': instructions4,
               'practicePureNoFeedOE': instructions5,
               'practicePureFeedHL': instructions6,
               'practicePureNoFeedHL': instructions7,
               'practiceMixedNoFeed': instructions10}

control.start(skip_ready_screen=True)

while not re.fullmatch(r'[A-Z]{4}\d{2}', subCode, re.IGNORECASE):
    subCode = subCodeInput.get()

instructions1.present()
experiment.keyboard.wait(misc.constants.K_RETURN)

instructions2.present()
experiment.keyboard.wait(misc.constants.K_RETURN)

instructions3.present()
experiment.keyboard.wait(misc.constants.K_RETURN)

for i, block in enumerate(experiment.blocks):
    if re.search('^practice.*(?<!No)Feed', block.name):
        feedFlag = True
    else:
        feedFlag = False

    if block.name == 'practiceMixedFeed':
        instructions8.present()
        experiment.keyboard.wait(misc.constants.K_RETURN)

        instructions9.present()
        experiment.keyboard.wait(misc.constants.K_RETURN)

    elif block.name in instrBlocks:
        instrBlocks[block.name].present()
        experiment.keyboard.wait(misc.constants.K_RETURN)

    if block.name == 'testMixed':
        testMixedCnt += 1

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

        if feedFlag:
            if key == correctResponse:
                feedbackCorrect.present()
                experiment.clock.wait(1000)
            else:
                feedbackIncorrect.present()
                experiment.clock.wait(1000)

        if key is None:
            isCorrect = 0
            rt = 'NA'
        elif key == correctResponse:
            isCorrect = 1
        else:
            isCorrect = 0

        experiment.data.add([experiment.subject,
                             subCode,
                             task,
                             rt,
                             stimText,
                             key,
                             isCorrect,
                             blockName,
                             isSwitchTrial])

        if testMixedCnt == 1:
            breakBlockInstructions.present()
            experiment.keyboard.wait(misc.constants.K_RETURN)
            testMixedCnt += 1

control.end()
