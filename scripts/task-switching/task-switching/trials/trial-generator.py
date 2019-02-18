# this script is used to create the experimental trials and save them to a file
# which is loaded at startup
import re

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

experiment.save_design(join('task-switching', 'trials', 'design.csv'))

# generating csv with stimuli
expDesign = pd.read_csv(join('task-switching', 'trials', 'design.csv'))

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

# adding blockname
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
stimlist = []
stimCounter = Counter()
buttonCounter = Counter()
