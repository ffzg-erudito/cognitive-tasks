%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%
%   This function creates a block of trials for an anti-saccade task. A single
%   trial consists of a display of an Ebbinghaus stimulus, alongside a
%   probe cirlce whose size is varied with the aim to match its size with
%   the size of the central circle in the Ebbinghaus stimulus.
%
%   Images for the items to be displayed should be stored on the hard drive.
%   ADDITIONAL DECISIONS HAVE TO BE MADE ABOUT CONTRAST LEVELS AND INITIAL
%   INSTRUCTIONS! For now, image path defined at the top of the function
%   under subtitle 'SETTINGS'.for setting parameters.
%
%   The function then returns all of these parameters, storing them in
%   variables, which can then be passed into future calls of the same function.
%   In these subsequent calls, change the values of those parameters that you
%   wish to vary between blocks, but make sure that the function call has
%   a complete set of arguments, otherwise the initial dialogue box will
%   pop up again.
%
%   For example, consider these two function calls:
%
%   [subject, age, memory, popout, instruct, pTrials, xTrials, init_set_size, change_rate, num_types, expo_duration, blank_duration] = block();
%   [subject, age, memory, popout, instruct, pTrials, xTrials, init_set_size, change_rate, num_types, expo_duration, blank_duration] = block(subject, age, 'i', 'y', instruct, pTrials, xTrials, init_set_size, change_rate, num_types, expo_duration, blank_duration);
%
%   Here, the first call will prompt a dialogue box. The user then inputs
%   values for the parameters, and these are stored in the variables to the
%   left of the assignment operator. The second call to the function then
%   takes in certain parameters determined through the first call. Their
%   order matters. Notice, however, that values for the "memory" and "popout"
%   variables are changed ad hoc. The second block of trials will differ
%   with respect to these changes.
%
%   Variables:
%   1. subject - subject code, name, or whatever
%   2. subject's age
%   6. pTrials - number of practice trials
%   7. xTrials - number of experimental trials
%
%
%   Matej Pavlic, 2018
%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

function [subjectID, num_pBlocks, num_xBlocks] = SART(subjectID, num_pBlocks, num_xBlocks)


%% SETTINGS %%
% slCharacterEncoding('UTF-8');
Priority(1);

% Background color: choose a number from 0 (black) to 255 (white)
white = [255 255 255];
backgroundColor = 0;


% Screen setup
clear screen
whichScreen = max(Screen('Screens'));
% whichScreen = 1;
Screen('Preference', 'TextEncodingLocale', 'UTF-8');
Screen('Preference', 'SkipSyncTests', 1);
screenRect = Screen('Rect', whichScreen);

% calculate screen center
W = screenRect(RectRight); % screen width
H = screenRect(RectBottom); % screen height
[xCenter, yCenter] = RectCenter(screenRect);
screen.center = [xCenter; yCenter];



%% PROMPT FOR ID
subjectID = '';
while length(subjectID) ~= 6 || sum(isletter(subjectID(1:4))) < 4 || isnan(str2double(subjectID(5:6)))
    
    prompt = {'�IFRA (prva dva slova imena oca, posljednja dva slova imena majke i posljednje dvije znamenke broja mobilnog telefona)'};
    defaults = {''};
    answer = inputdlg(prompt, 'Postavke', 1, defaults);
    
    % now decode answer
    [subjectID] = deal(answer{:});
    subjectID = upper(subjectID);
    
end


%% EXPERIMENT SETTINGS
num_pBlocks = 2;
num_xBlocks = 70;


%% SET UP RESULT FILE

% Define output path - OVDJE STAVITI ADRESU DESKTOPA:
% out_path = 'C:\Users\matpa\Desktop\'; % laptop u uredu
% out_path = 'C:\Users\Matej\Desktop\'; % za moj laptop
out_path = 'C:\Users\student\Desktop\'; % za mali praktikum

% other major variables
date_string = datestr(clock, 'yyyy-mm-dd-HH-MM');
formatString = '\r\n%s\t %s\t %d\t %d\t'; % this is for data output
% saved variables: subject code, trial type, reaction time, correct?

dataFileName = ([out_path, 'SART_rezultati_',date_string, '_', subjectID, '.xls']);

if exist(dataFileName, 'file') == 0
    dataFile = fopen(dataFileName, 'a');
    fprintf(dataFile, 'Šifra ispitanika\t Situacija\t RT\t Tocno?');
    fclose('all');
end


% First screen flip
[window] = Screen('OpenWindow', whichScreen, backgroundColor, [], [], 2);
slack = Screen('GetFlipInterval', window)/2;

Screen('TextFont', window , 'Courier New');

fontSize = 20;
Screen('TextSize', window, fontSize);

Screen('FillRect', window, backgroundColor);
Screen('Flip', window);
HideCursor;


%% KEYBOARD SETUP

KbName('UnifyKeyNames');
escape = KbName('escape');
space = KbName('space');
KbCheckList = [KbName('return'), space, escape];
RestrictKeysForKbCheck(KbCheckList);


%% MASK SETUP
% Set up alpha-blending for smooth (anti-aliased) lines
Screen('BlendFunction', window, 'GL_SRC_ALPHA', 'GL_ONE_MINUS_SRC_ALPHA');

% Here we set the size of the arms of our fixation cross
mask_size = 60;

% Now we set the coordinates (these are all relative to zero we will let
% the drawing routine center the cross in the center of our monitor for us)
xCoords = [-mask_size mask_size -mask_size mask_size];
yCoords = [-mask_size mask_size mask_size -mask_size];
allCoords = [xCoords; yCoords];


% Find points for rect into which we will inscribe the mask circle
rect_side = pdist([-mask_size, -mask_size; mask_size, mask_size], 'euclidean');
rect_for_stimuli = CenterRectOnPointd([0 0 rect_side rect_side], xCenter, yCenter);

% Set the line width for our fixation cross
lineWidthPix = 2;



%% DEFINE STIMULI

stimulus_set = ['1' '2' '3' '4' '5' '6' '7' '8' '9'];
stimulus_sizes = [120, 100, 94, 72, 48];


%% EXPERIMENT STARTS HERE %%

%% TRIALS START HERE %%

keys = [27 32]; % 27 == 'escape' , 32 == 'space'
keylist = zeros(1,256);
keylist(keys) = 1;

KbQueueCreate(0, keylist);


for block = 1 : (num_pBlocks + num_xBlocks)
    
    
    this_block = datasample(stimulus_set, 9, 'Replace', false);
    this_block_stimulus_sizes = [datasample(stimulus_sizes, 5, 'Replace', false) datasample(stimulus_sizes, 4, 'Replace', false)];
    
    
    %% PRIKAZ UPUTE PRIJE BLOKA ZA VJEŽBU
     if block == 1
        
        % PRVA UPUTA
        for uputa = 1 : 2
            
            switch(uputa)
                case 1
                    instruction = 'UPUTA ZA RAD\n\nU ovom zadatku će Vam se u središtu ekrana prikazivati\nznamenke jedna po jedna. Vaša je zadaća pritisnuti RAZMAKNICU (space)\nsvaki put kad vidite znamenku koja NIJE broj 3 (tri).\n\nKada vidite broj 3, trebate OBUSTAVITI pritisak razmaknice.\n\n\nPrimjerice, ako vidite broj 7, trebate pritisnuti razmaknicu,\na ako vidite broj 3, samo trebate pričekati prikaz sljedeće znamenke.\n\n\n\nPritisnite ENTER za nastavak upute.';
                case 2
                    instruction = 'Kada vidite znamenku na koju trebate dati odgovor, pokušajte\npritisnuti razmaknicu što brže možete.\n\nZnamenke će se prikazivati brzo, a između svake će se\nprikazati simbol "⭙". Razmaknicu možete prisitnuti\ni tijekom prikaza tog simbola!\n\n\n\nNajprije ćete proći kroz kratki niz pokušaja za vježbu.\nPritisnite razmaknicu svaki put kada vidite broj koji NIJE broj 3!\n\n\n\nPritisnite ENTER za početak vježbe';      
            end
            
            DrawFormattedText(window, instruction, 'center', 'center', white, [], [], [], 1.5);
            Screen('Flip', window);
            WaitSecs(1);
            
            % Wait for return press
            while 1
                [~, keyCode] = KbWait;
                
                % ENTER press continues the experiment
                if keyCode(KbName('return')) == 1
                    break;
                    % ESC key quits the experiment
                elseif keyCode(escape) == 1
                    clear all
                    sca
                    return
                end
            end
        end

        % UPUTA PRIJE MJERENJA
        
     elseif block == num_pBlocks + 1

            Screen('TextFont', window , 'Courier New');
            instruction = 'Ukoliko imate bilo kakvo pitanje o zadatku,\nsada ga postavite eksperimentatoru.\n\n\nAko nemate, pritisnite ENTER kako biste pokrenuli zadatak.';
            fontSize = 20;
            Screen('TextSize', window, fontSize);
            DrawFormattedText(window, instruction, 'center', 'center', white, [], [], [], 1.5);
            Screen('Flip', window);
            WaitSecs(1);
            
            % Wait for return press
            while 1
                [~, keyCode] = KbWait;
                
                % ENTER press continues the experiment
                if keyCode(KbName('return')) == 1
                    break;
                    % ESC key quits the experiment
                elseif keyCode(escape) == 1
                    clear all
                    sca
                    return
                end
            end
     end

        
    Screen('TextFont', window , 'Times New Roman');
    for trial = 1 : 9
        
        target = this_block(trial);
        Screen('TextSize', window, this_block_stimulus_sizes(trial));
        
        if block == 1 && trial == 1 || block == num_pBlocks + 1 && trial == 1
            Screen('FillRect', window, backgroundColor);
            Screen('Flip', window);
            WaitSecs(2);
        end
        
        
        
        %% TARGET
        % DrawFormattedText2(target, 'win', window, 'sx', 'center', 'sy', 'center', 'xalign', 'center', 'yalign', 'center'); % , 'winRect', rect_for_stimuli      -> optional argument       ;   [~, ~, bbox] -> optional output
        [~, ~, bbox] = DrawFormattedText(window, target, 'center', 'center', white, [], [], [], [], [], rect_for_stimuli);
        % Screen('FrameRect', window, white, bbox, 2);
        [targetOnset] = Screen('Flip', window);
        KbQueueStart(); % start collecting key presses
        
        
        %% MASK
        

        %% Draw fixation cross, set it to the center of our screen and set good quality anti-aliasing
        Screen('DrawLines', window, allCoords, lineWidthPix, white, [xCenter yCenter], 2);
        Screen('FrameOval', window, white, rect_for_stimuli, lineWidthPix);
        Screen('Flip', window, targetOnset + 0.25);
        
        WaitSecs(0.9); % mask presented for 900 ms
        
        KbQueueStop();
        
        
        
        %% CHECK USER INPUT %%
        
        [pressed, pressTime] = KbQueueCheck(); % check response
        
        if pressed == 1 && pressTime(32) > 0 % is 'spacebar' pressed?
            RT = pressTime(32) - targetOnset;
            if target == '3'
                correct = 0;
            else
                correct = 1;
            end
        elseif pressed == 1 && pressTime(27) > 0  % is 'escape' pressed?
            clear all
            close all
            sca
            return
        elseif pressed == 0 && target == '3'
            correct = 1;
            RT = 0;
        else
            correct = 0;
            RT = 0;
        end
        
        %% SAVE TRIAL DATA
        if target == '3'
            trial_type = 'NO-GO';
        else
            trial_type = 'GO';
        end
        
        dataFile = fopen(dataFileName, 'a');
        fprintf(dataFile, formatString, subjectID, trial_type, RT, correct);
        fclose(dataFile);
        Screen('Close');
    end
end




%%
% note that you should open and close the file every time you write to it, otherwise you may lose data in crashes
% pTrials are saved as non positive integers. The first practice trial is the lowest of these!
% U XLSX FILE SE U SVAKI REDAK UPISUJU IME I PREZIME, SITUACIJA, TE PO STUPCIMA ODABRANE VELI?INE TESTNIH KRUGOVA


Screen('FillRect', window, backgroundColor);
[final_blank_time] = Screen('Flip', window);
DrawFormattedText(window, 'KRAJ ZADATKA.\n\n\n\n\nPOZOVITE EKSPERIMENTATORA.' , 'center', 'center', white);
Screen('Flip', window, final_blank_time + 1);

WaitSecs(5);

clear all
sca
end
