from collections import Counter


def checkStim(stimulus, task, rowIndex, factorStimuli, response,
              responseTracker, numTracker):

    if response not in responseTracker and len(responseTracker) == 0:
        responseTracker[response] += 1
    elif response not in responseTracker and len(responseTracker) != 0:
        responseTracker = Counter()
        responseTracker[response] += 1
    elif response in responseTracker and responseTracker[response] <= 2:
        responseTracker[response] += 1
    elif response in responseTracker and responseTracker[response] > 2:
        return True, responseTracker

    if str(stimulus) not in numTracker:
        numTracker[str(stimulus)] = rowIndex
    elif rowIndex >= 3 and (rowIndex - numTracker[str(stimulus)]) < 3:
        return True, responseTracker
    else:
        numTracker[str(stimulus)] = rowIndex

    return False, responseTracker
