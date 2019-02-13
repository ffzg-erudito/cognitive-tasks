from collections import Counter

def stimChecker(trials, factorLevels):
    """Checks whether the distractor from trial N is the target in trial N+1.
    Returns False if there is no such case, and True if there is."""

    for i in range(0, len(trials) - 1):
        stimCurrent = trials[i].stimuli[0]
        stimNext = trials[i + 1].stimuli[0]

        currentText = stimCurrent.text
        nextText = stimNext.text

        # if it's a control condition, skip, since there is no distractor
        if currentText in factorLevels.get('control') and i < len(trials) - 2:
            continue
        elif nextText in factorLevels.get('control') and\
                currentText[0] == nextText and i < len(trials) - 2:
            return True
        elif nextText not in factorLevels.get('control') and\
                currentText[0] == nextText[3] and i < len(trials) - 2:
            return True
        elif i < len(trials) - 2:
            continue
        else:
            return False


def conditionChecker(trials):
    """Checks whether a condition repeats more than 3 times in a row."""
    conditions = [trial.get_factor('congruency') for trial in trials]
    repetitions = Counter()

    for condition in conditions:
        if condition not in repetitions and len(repetitions) == 0:
            repetitions[condition] += 1
        elif condition not in repetitions and len(repetitions) != 0:
            repetitions = Counter()
            repetitions[condition] += 1
        elif condition in repetitions and len(repetitions) == 1 and\
                repetitions[condition] <= 3:
            repetitions[condition] += 1
        elif condition in repetitions and len(repetitions) == 1 and\
                repetitions[condition] > 3:
            return False

    return True

