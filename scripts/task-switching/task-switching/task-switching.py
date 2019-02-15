# pogledaj šta treba da radiš
from expyriment import design, control

# DEV MODE
control.set_develop_mode(True)

# localization
control.defaults.goodbye_text = '''Zadatak je gotov. Molim Vas, pozovite\
 eksperimentatora.'''

# package variables
control.defaults.goodbye_delay = 5000
control.defaults.fast_quit = False

# TODO: instructions

# experiment variables
trialsPracticePureFeed = 8
trialsPracticePureNoFeed = 16

trialsPracticeMixed = 24

trialsTestPure = 32
trialsTestMixed = 72
