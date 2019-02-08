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

factors = {'distractor': ['HHH', 'KKK', 'CCC', 'SSS', ''],
           'target': ['H', 'K', 'C', 'S']}

# experiment setup
experiment = design.Experiment(name='Flanker', foreground_colour=(0, 0, 0),
                               background_colour=(255, 255, 255),
                               text_font='Courier', text_size=22)


# initialize external block with trials
trialGenerator = design.Block()
trialGenerator.add_trials_full_factorial(factors, copies=8)

# shuffle trials
loopFlag = True
while loopFlag:
    trialGenerator.shuffle_trials(max_repetitions=3)
    loopFlag = stimChecker(trialGenerator.trials)

# chunk into four blocks
trialsBlocked = [trialGenerator.trials[i:i + 40]
                 for i in range(0, len(trialGenerator.trials), 40)]


# functions
def stimChecker(trials):
    """Checks whether the distractor from trial N is the target in trial N+1.
    Returns False if there is no such case, and True if there is."""
    for i in range(0, len(trials) - 1):
        distractorCurrent = trials[i].factor_dict.get('distractor')
        targetNext = trials[i + 1].factor_dict.get('target')

        # if the current distractor is blank, skip, since blank can't be a
        # target
        if distractorCurrent == '':
            continue
        elif distractorCurrent[0] == targetNext:
            return True
        else:
            return False
