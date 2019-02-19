# this script is used to create the experimental trials and save them to a file
# which is loaded at startup
import re

from task_switching.trials.trial_generator_helpers import checkStim

from collections import Counter
from os.path import join

import pandas as pd

from expyriment import design, misc

experiment = design.Experiment()
expDesign = pd.read_csv(join('task_switching', 'trials', 'design.csv'))
expDesign.head()

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

stims = {'stimulus': [],
         'correctResponse': []}
numTrackerGlob = {}
responseTrackerGlob = Counter()

for row in expDesign.iterrows():
    task = row[1].task
    stimFlag = True

    breakpoint()

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
