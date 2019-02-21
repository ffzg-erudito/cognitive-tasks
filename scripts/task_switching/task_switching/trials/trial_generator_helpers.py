from collections import Counter


def checkStim(stimulus, task, rowIndex, factorStimuli, response,
              responseTracker, numTracker):

    if response not in responseTracker and len(responseTracker) == 0:
        increase = True
        recreate = False
    elif response not in responseTracker and len(responseTracker) != 0:
        increase = True
        recreate = True
    elif response in responseTracker and responseTracker[response] <= 2:
        increase = True
        recreate = False
    elif response in responseTracker and responseTracker[response] > 2:
        return True, responseTracker

    if str(stimulus) not in numTracker:
        numTracker[str(stimulus)] = rowIndex
    elif rowIndex < 3 and str(stimulus) in numTracker:
        return True, responseTracker
    elif rowIndex >= 3 and (rowIndex - numTracker[str(stimulus)]) < 3:
        return True, responseTracker
    else:
        numTracker[str(stimulus)] = rowIndex

    if recreate:
        responseTracker = Counter()
    if increase:
        responseTracker[response] += 1

    return False, responseTracker
