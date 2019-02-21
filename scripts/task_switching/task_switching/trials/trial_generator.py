# this script is used to create the experimental trials and save them to a file
# which is loaded at startup
import re

from task_switching.trials.trial_generator_helpers import checkStim

from collections import Counter
from os.path import join

import pandas as pd

from expyriment import design, misc

experiment = design.Experiment()

# experiment variables
# experiment schema
expSchema = [['practicePureFeed', 'practicePureNoFeed',
              'testPure'] * 2, ['practiceMixedFeed', 'practiceMixedNoFeed',
                                'testMixed', 'testMixed']]
expSchema = [block for lsBlocks in expSchema for block in lsBlocks]

# number of blocks
numBlocks = {'practicePureFeed': 2, 'practicePureNoFeed': 2,
             'practiceMixedFeed': 1, 'practiceMixedNoFeed': 1,
             'testPure': 2, 'testMixed': 2}

# number of trials
numTrials = {'practicePureFeed': 8, 'practicePureNoFeed': 16,
             'practiceMixedFeed': 24, 'practiceMixedNoFeed': 24,
             'testPure': 32, 'testMixed': 72}

# factors and factor levels
factors = {'task': ['high-low', 'odd-even']}

factorStimuli = {'high-low': {'isHigher': [6, 7, 8, 9],
                              'isLower': [1, 2, 3, 4]},
                 'odd-even': {'isOdd': [1, 3, 7, 9],
                              'isEven': [2, 4, 6, 8]}}

correctResponses = {'isHigher': misc.constants.K_l,
                    'isEven': misc.constants.K_l,
                    'isLower': misc.constants.K_a,
                    'isOdd': misc.constants.K_a}

# generating pure blocks
numPureBlocks = numBlocks.get('practicePureFeed') +\
    numBlocks.get('practicePureNoFeed') + numBlocks.get('testPure')

for i, segment in enumerate(expSchema[:numPureBlocks]):
    if i < numPureBlocks / 2:
        task = 'odd-even'
    else:
        task = 'high-low'

    if segment[:4] == 'prac':
        blockName = 'practice'
    else:
        blockName == 'test'

    block = design.Block(blockName)

    for _ in range(0, numTrials[segment]):
        trial = design.Trial()
        trial.set_factor('task', task)

        block.add_trial(trial)

    experiment.add_block(block)

# generating mixed blocks
taskCounter = Counter()
task = 'odd-even'
for segment in expSchema[numPureBlocks:]:
    if segment[:4] == 'prac':
        blockName = 'practice'
    else:
        blockName = 'test'

    block = design.Block(blockName)

    for _ in range(0, numTrials[segment]):
        trial = design.Trial()
        trial.set_factor('task', task)

        # counting in threes
        if task not in taskCounter:
            taskCounter[task] += 1
        elif task in taskCounter and taskCounter[task] < 2:
            taskCounter[task] += 1
        elif task in taskCounter and taskCounter[task] == 2:
            if task == 'odd-even':
                task = 'high-low'
            else:
                task = 'odd-even'
            taskCounter = Counter()

        block.add_trial(trial)

    experiment.add_block(block)

experiment.save_design(join('task_switching', 'trials', 'design.csv'))

# generating csv with stimuli
expDesign = pd.read_csv(join('task_switching', 'trials', 'design.csv'))

# adding feedback info
feedback = []
for segment in expSchema:
    if re.search('NoFeed$|^test', segment):
        feedMsg = 'no'
    else:
        feedMsg = 'yes'

    for _ in range(0, numTrials[segment]):
        feedback.append(feedMsg)

expDesign['feedback'] = pd.Series(feedback)

# adding blockinfo
blockInfo = {'blockName': [],
             'blockType': [],
             'blockCondition': []}
for segment in expSchema:
    for _ in range(0, numTrials[segment]):
        blockName = segment
        blockType = re.search('test|practice', segment).group(0)
        blockCondition = re.search('Mixed|Pure', segment).group(0).lower()

        blockInfo['blockName'].append(blockName)
        blockInfo['blockType'].append(blockType)
        blockInfo['blockCondition'].append(blockCondition)

expDesign = pd.concat([expDesign, pd.DataFrame(blockInfo)], axis=1)

expDesign = expDesign.drop(['blockId', 'trialId'], axis=1)

# adding stimuli
# tracking last appearance of a number and last use of response key
stims = {'stimulus': [],
         'correctResponse': []}
numTrackerGlob = {}
responseTrackerGlob = Counter()

for row in expDesign.iterrows():
    task = row[1].task
    stimFlag = True

    while stimFlag:
        taskCondition = design.randomize.rand_element(factorStimuli[task])
        response = correctResponses[taskCondition]

        stimulus = design.randomize.rand_element(
            factorStimuli[task][taskCondition])

        stimFlag, responseTrackerGlob = checkStim(stimulus, task, row[0],
                                                  factorStimuli, response,
                                                  responseTrackerGlob,
                                                  numTrackerGlob)

    stims['stimulus'].append(stimulus)
    stims['correctResponse'].append(response)

expDesign = pd.concat([expDesign, pd.DataFrame(stims)], axis=1)

# add task-switch info
switchInfo = []

for i in range(0, expDesign.shape[0] - 1):
    currentRow = expDesign.iloc[i]
    nextRow = expDesign.iloc[i + 1]

    currentTask = currentRow.task
    nextTask = nextRow.task

    currentBlock = currentRow.blockName
    nextBlock = nextRow.blockName

    if currentTask != nextTask and currentBlock == nextBlock:
        switchInfo.append(i + 1)

switch = ['nonSwitch' if i not in switchInfo else 'switch'
          for i in range(0, expDesign.shape[0])]

expDesign = pd.concat([expDesign, pd.Series(name='switch', data=switch)],
                      axis=1)

expDesign.to_csv(join('task_switching', 'trials', 'design.csv'),
                 index=False)
