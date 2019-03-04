# A flanker task implementation based on Friedman, N. P., & Miyake, A. (2004).
# The relations among inhibition and interference control functions: a
# latent-variable analysis. Journal of experimental psychology: General,
# 133(1), 101.
import re

from expyriment import control, design, io, misc, stimuli

from helpers import conditionChecker, stimChecker

# DEV MODE
control.set_develop_mode(False)

# localization
control.defaults.goodbye_text = '''Zadatak je gotov. Molim Vas, pozovite\
 eksperimentatora.'''

# package variables
control.defaults.goodbye_delay = 5000
control.defaults.fast_quit = False

# instructions
instructionsText1 = '''Sada ćete rješavati računalni zadatak pažnje.
Na sredini zaslona će se pojavljivati nizovi slova. Nekad će Vam biti prikazano\
 sedam slova, a nekad samo jedno.

Ako Vam računalo prikaže sedam slova, Vaš će zadatak biti identificirati slovo\
 u sredini. Ako se u sredini nalazi H ili K, pritisnite DESNU CTRL tipku. Ako\
 se u sredini nalazi slovo C ili S, pritisnite LIJEVU CTRL tipku.
Pritom trebate zanemarivati slova koja se nalaze oko slova u sredini.

Pritisnite ENTER za nastavak upute.'''

instructionsText2 = '''Ako Vam račualo prikaže samo jedno slovo, odgovorite\
 koje je slovo prikazano koristeći ranije navedene tipke (DESNI CTRL ako je\
 slovo H ili K, LIJEVI CTRL ako je slovo C ili S.)

Sada ćete proći kroz nekoliko zadatka za vježbu, u kojima ćete dobivati\
 povratnu informaciju o svom uratku.

Pritisnite ENTER za prelazak na zadatke za vježbu.'''

instructionsText3 = '''Ovo je kraj dijela za vježbu. Slijedi glavni dio\
 zadatka.

Više nećete dobivati povratnu informaciju o svom uratku.

Molimo Vas da zadatak pokušate rješavati što brže i što točnije možete.

Ako imate pitanja, postavite ih sada. U protivnom, pritisnite ENTER za\
 nastavak.'''

subCodeText = '''Molimo Vas, unesite svoju šifru - prva dva slova imena majke,\
 posljednja dva slova imena oca i posljednje dvije znamenke broja mobilnog\
 telefona.

Pritom nemojte koristiti dijakritičke znakove, a slova poput "nj"\
 tretirajte kao dva slova.

Svoj unos potvrdite pritiskom tipke ENTER.'''

# experiment variables
trialsPerCondInTest = 10
trialPerCondInPractice = 8
numTestBlocks = 4
numPracticeBlocks = 1

fixCrossDuration = 500
blankDuration = 1000

factors = {'congruency': ['congruent', 'incongruent', 'same', 'control']}

factorStimuli = {'congruent': ['HHHKHHH', 'KKKHKKK', 'CCCSCCC', 'SSSCSSS'],
                 'incongruent': ['CCCKCCC', 'CCCHCCC', 'HHHSHHH', 'HHHCHHH',
                                 'SSSKSSS', 'SSSHSSS', 'KKKSKKK', 'KKKCKKK'],
                 'same': ['HHHHHHH', 'KKKKKKK', 'SSSSSSS', 'CCCCCCC'],
                 'control': ['H', 'C', 'S', 'K']}

keyDict = {'306': 'LCTRL', '305': 'RCTRL'}

correctResponses = {'K': misc.constants.K_RCTRL, 'H': misc.constants.K_RCTRL,
                    'C': misc.constants.K_LCTRL, 'S': misc.constants.K_LCTRL}

# experiment setup
experiment = design.Experiment(name='Flanker', foreground_colour=(0, 0, 0),
                               background_colour=(255, 255, 255),
                               text_font='Courier New', text_size=24)

# initialize experiment
control.initialize(experiment)

# set variable names
experiment.add_data_variable_names(['subjectNo', 'subjectCode', 'condition',
                                    'reactionTime', 'stimulus', 'response',
                                    'isCorrect', 'blockName'])

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
            stimulus = design.randomize.rand_element(
                factorStimuli[factorLevel])
            trial.add_stimulus(stimuli.TextLine(stimulus))

        for j in range(0, 500):
            stimCheckFlag = stimChecker(block.trials, factorStimuli)
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
subCodeInstr = stimuli.TextBox(text=subCodeText, size=(800, 400))
subCodeInput = io.TextInput(length=6, background_stimulus=subCodeInstr,
                            position=(0, -100))

instructions1 = stimuli.TextScreen(heading='Uputa', text=instructionsText1)
instructions2 = stimuli.TextScreen(heading='', text=instructionsText2)
instructions3 = stimuli.TextScreen(heading='', text=instructionsText3)

feedbackCorrect = stimuli.TextLine(text='Točno!',
                                   text_colour=misc.constants.C_GREEN,
                                   text_bold=True)
feedbackCorrect.preload()

feedbackIncorrect = stimuli.TextLine(text='Pogrešno!',
                                     text_colour=misc.constants.C_RED,
                                     text_bold=True)
feedbackIncorrect.preload()

subCode = ''

# start experiment
control.start(skip_ready_screen=True)

while not re.fullmatch(r'[A-Z]{4}\d{2}', subCode, re.IGNORECASE):
    subCode = subCodeInput.get()

instructions1.present()
experiment.keyboard.wait(misc.constants.K_RETURN)

instructions2.present()
experiment.keyboard.wait(misc.constants.K_RETURN)

for blockNo, block in enumerate(experiment.blocks):
    if block.name == 'practice':
        for trial in block.trials:
            if trial.get_factor('congruency') == 'control':
                target = trial.stimuli[0].text
            else:
                target = trial.stimuli[0].text[3]

            blank.present()
            experiment.clock.wait(blankDuration)
            fixCross.present()
            experiment.clock.wait(fixCrossDuration)
            trial.stimuli[0].present()
            key, rt = experiment.keyboard.wait([misc.constants.K_LCTRL,
                                                misc.constants.K_RCTRL])
            if key == correctResponses[target]:
                feedbackCorrect.present()
                experiment.clock.wait(1000)
                isCorrect = 1
            else:
                feedbackIncorrect.present()
                experiment.clock.wait(1000)
                isCorrect = 0

            experiment.data.add([experiment.subject, subCode.upper(),
                                 trial.get_factor('congruency'), rt,
                                 trial.stimuli[0].text, keyDict[str(key)],
                                 isCorrect, block.name])

        if experiment.blocks[blockNo + 1].name == 'test':
            instructions3.present()
            experiment.keyboard.wait(misc.constants.K_RETURN)

    else:
        for trial in block.trials:
            if trial.get_factor('congruency') == 'control':
                target = trial.stimuli[0].text
            else:
                target = trial.stimuli[0].text[3]

            blank.present()
            experiment.clock.wait(blankDuration)
            fixCross.present()
            experiment.clock.wait(fixCrossDuration)
            trial.stimuli[0].present()
            key, rt = experiment.keyboard.wait([misc.constants.K_LCTRL,
                                                misc.constants.K_RCTRL])
            if key == correctResponses[target]:
                isCorrect = 1
            else:
                isCorrect = 0

            experiment.data.add([experiment.subject, subCode.upper(),
                                 trial.get_factor('congruency'), rt,
                                 trial.stimuli[0].text, keyDict[str(key)],
                                 isCorrect, block.name])
control.end()
