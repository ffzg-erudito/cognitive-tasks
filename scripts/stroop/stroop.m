%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%
%   This function creates a block of trials for a Stroop task
%
%   Matej Pavlic, 201'
%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%



function [subjectID] = Stroop(subjectID)

debug_mode = 0;
use_mouse = 1;
if debug_mode
    dbstop if error
    PsychDebugWindowConfiguration
end


%% SETTINGS %%
slCharacterEncoding('UTF-8');
Priority(1);

% Background color: choose a number from 0 (black) to 255 (white)
white = [255 255 255];
green = [0 255 0];
red = [255 0 0];
backgroundColor = 0;


% Screen setup
clear screen
whichScreen = max(Screen('Screens'));
% whichScreen = 2;
Screen('Preference', 'TextEncodingLocale', 'UTF-8');
Screen('Preference', 'SkipSyncTests', 1);
screenRect = Screen('Rect', whichScreen);


% calculate screen center
[xCenter, yCenter] = RectCenter(screenRect);


%% PROMPT FOR ID
subjectID = '';
while length(subjectID) ~= 6 || sum(isletter(subjectID(1:4))) < 4 || isnan(str2double(subjectID(5:6)))
    
    prompt = {'SIFRA (prva dva slova imena oca, posljednja dva slova imena majke i posljednje dvije znamenke broja mobilnog telefona)'};
    defaults = {''};
    answer = inputdlg(prompt, 'Postavke', 1, defaults);
    
    % now decode answer
    [subjectID] = deal(answer{:});
    subjectID = upper(subjectID);
    
end



%% SET UP RESULT FILE

% Define output path - OVDJE STAVITI ADRESU DESKTOPA:
% out_path = 'C:\Users\matpa\Desktop\'; % laptop u uredu
out_path = 'C:\Users\Matej\Desktop\'; % za moj laptop
% out_path = 'C:\Users\student\Desktop\'; % za mali praktikum


% other major variables
date_string = datestr(clock, 'yyyy-mm-dd-HH-MM');
formatString = '\r\n%s\t %s\t %d\t %d\t %d\t %d\t'; % this is for data output
% saved: subject code, trial type, correct?, reaction time, duration

dataFileName = ([out_path, 'stroop_rezultati_',date_string, '_', subjectID, '.xls']);

if exist(dataFileName, 'file') == 0
    dataFile = fopen(dataFileName, 'a');
    fprintf(dataFile, 'Šifra ispitanika\t Situacija\t Točno?\t Vrijeme reakcije\t Trajanje mjerenja');
    fclose('all');
end


%% FIRST SCREEN FLIP
[window] = Screen('OpenWindow', whichScreen, backgroundColor, [], [], 2);

% Set up alpha-blending for smooth (anti-aliased) lines
Screen('BlendFunction', window, 'GL_SRC_ALPHA', 'GL_ONE_MINUS_SRC_ALPHA');

Screen('TextFont', window , 'Helvetica');

fontSize = 50;

Screen('TextSize', window, fontSize);
Screen('FillRect', window, backgroundColor);
Screen('Flip', window);

HideCursor;


%% KEYBOARD SETUP

KbName('UnifyKeyNames');
left_arrow = KbName('leftarrow');
right_arrow = KbName('rightarrow');
escape = KbName('escape');
KbCheckList = [KbName('return'), left_arrow, right_arrow, escape];
RestrictKeysForKbCheck(KbCheckList);


my_design = fullfact([4 2]);


%% DEFINE TARGETS
possible_targets = ['C'; 'Z'];

my_targets = my_design(:, 2);
for i = 1 : length(possible_targets)
    my_targets(my_targets == i) = possible_targets(i, 1);
end

my_targets = cellstr(char(my_targets));
my_design = num2cell(my_design);
my_design(:, 2) = my_targets;

my_design(:, 2) = strrep(my_design(:,2),{'C'}, {'CRVENA'});
my_design(:, 2) = strrep(my_design(:,2),{'Z'}, {'ZELENA'});


%% DEFINE ANSWERS
answer_1 = 'CRVENA';
answer_2 = 'ZELENA';
answer_y_pos = yCenter + 110;
answer_x_positions = [xCenter - 260, xCenter + 60];


%% DEFINE TRIALS

% Practice trials
my_practice_trials = repmat(my_design, 3, 1);
my_practice_trials = my_practice_trials(1:end-4, :);


% Experimental trials
my_experimental_trials = repmat(my_design, 13, 1);
my_experimental_trials = my_experimental_trials(1:end-4, :);

% RANDOMIZE ORDER
my_practice_trials = my_practice_trials(randperm(size(my_practice_trials, 1)), :);
my_experimental_trials = my_experimental_trials(randperm(size(my_experimental_trials, 1)), :);

my_trials = [my_practice_trials; my_experimental_trials];
num_trials = size(my_trials, 1);


%% EXPERIMENT STARTS HERE %%
keys = [left_arrow right_arrow escape];
keylist = zeros(1, 256);
keylist(keys) = 1;

KbQueueCreate(0, keylist);


%% TRIALS START HERE %%
for trial = 1 : num_trials
    
    % trial_string will be displayed to the participant
    if trial < (size(my_practice_trials, 1) + 1)
        trial_string = num2str(21 - trial);
    else
        trial_string = num2str(121- trial);
    end
    target = my_trials{trial, 2};


    % RANDOMIZE POSITION OF ANSWERS
    index_to_ans_positions = randsample(2, 2);
    pos_x_answ_1 = answer_x_positions(index_to_ans_positions(1));
    pos_x_answ_2 = answer_x_positions(index_to_ans_positions(2));
    
    % DETERMINE THE COLORS OF STIMULI
    switch(my_trials{trial, 1})
        case 1 % congruent target, congruent answers
            trial_type = 'congruent target, congruent answers';
            
            if strcmp(target, 'ZELENA')
                target_color = green;
            else
                target_color = red;
            end
            
            % boje odgovora učinimo kongruentima njihovom značenju
            % (npr. answer_1 == 'CRVENA')
            answer_1_color = red;
            answer_2_color = green;
              
                
        case 2 % congruent target, incogruent answers
            trial_type = 'congruent target, incongruent answers';
            
            if strcmp(target, 'ZELENA')
                target_color = green;
            else
                target_color = red;
            end
            
            % boje odgovora učinimo nekongruentima njihovom značenju
            answer_1_color = green;
            answer_2_color = red;
            
        case 3 % incongruent target, congruent answers
            trial_type = 'incongruent target, congruent answers';
            
            if strcmp(target, 'ZELENA')
                target_color = red;
            else
                target_color = green;
            end
            
            % boje odgovora učinimo kongruentnima njihovom značenju
            answer_1_color = red;
            answer_2_color = green;
            
        case 4 % incongruent target, incongruent answers
            trial_type = 'congruent target, incongruent answers';
           
            if strcmp(target, 'ZELENA')
                target_color = red;
            else
                target_color = green;
            end
            
            % boje odgovora učinimo nekongruentima njihovom značenju
            answer_1_color = green;
            answer_2_color = red;
    end
    
    % DETERMINE WHAT THE CORRECT RESPONSE IS
    if (all(target_color == red) && (pos_x_answ_1 == xCenter - 260))
        correct_response = left_arrow;
    elseif (all(target_color == red) && (pos_x_answ_1 == xCenter + 60))
        correct_response = right_arrow;
    elseif (all(target_color == green) && (pos_x_answ_2 == xCenter - 260))
        correct_response = left_arrow;
    elseif (all(target_color == green) && (pos_x_answ_2 == xCenter + 60))
        correct_response = right_arrow;
    end
    
        
    %% UPUTE
    if trial == 1
        
        % POÄŒETNE UPUTE
        for uputa = 1 : 4
            
            switch(uputa)
                case 1
                    instruction = ['STROOP ZADATAK: UPUTA ZA RAD\n\nVaša je zadaća prepoznati BOJU kojom je otisnuta GORNJA riječ.\n' ...
                                '\nZa odgovor su Vam ponuđene dvije opcije. Točan odgovor je\nona opcija koja IMENUJE BOJU ' ...
                                'kojom je otisnuta gornja riječ.\nDakle, trebate ZANEMARITI BOJU KOJOM SU OTISNUTE OPCIJE,\n'...
                                'te odabrati odgovor na temelju značenja riječi!\n\n' ...
                                'Pritisnite ENTER za nastavak upute.'];
                case 2
                    instruction = ['Na primjer, ako je gornja riječ "ZELENA" otisnuta CRVENOM BOJOM,\n' ...
                                'točan odgovor je riječ "CRVENA", neovisno o tome kojom bojom je otisnuta!\n\n' ...
                                'Svoj odgovor odaberite pritiskom na strelicu lijevo, ako je Vaš odgovor lijeva riječ,\n' ...
                                'ili strelicu desno, ako je Vaš odgovor desna riječ.\n\n' ...
                                'Na sljedećem prikazu vidjet ćete nekoliko primjera.\nObratite pozornost na ' ...
                                'odnos BOJE gornje riječi i\ntočnog odgovora, koji je zaokružen zelenom bojom.\n\n' ...
                                'Pritisnite ENTER za nastavak upute.'];
                case 3
                    instruction = [];
                
                case 4
                    instruction = ['U prvom dijelu ćete proći kroz 20 pokušaja za vježbu.\n\n' ...
                                'ODGOVARAJTE ŠTO BRŽE MOŽETE, BEZ GREŠAKA.\n\nNakon što date svoj odgovor, ' ...
                                'na ekranu će se\nprikazati ZELENI kvadrat ukoliko ste odgovorili TOČNO,\na CRVENI ' ...
                                'ukoliko ste odgovorili NETOČNO.\n\n\nPritisnite ENTER za početak vježbe.'];
            end
            
            if isempty(instruction)
                examples = 'examples.tif';
                image = imread(examples, 'tif');
                Screen('PutImage', window, image);
                DrawFormattedText(window, 'Pritisnite ENTER za nastavak upute.', 'center', 950, white, [], [], [], 1.5);
                Screen('Flip', window);
                WaitSecs(1);
            else
                DrawFormattedText(window, instruction, 'center', 'center', white, [], [], [], 1.5);
                Screen('Flip', window);
                WaitSecs(1);
            end
            
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
        
    elseif trial == (size(my_practice_trials, 1) + 1)
        
        % PRIKAZ UPUTE PRIJE MJERENJA
        instruction = ['Vježba je završena!\n\nSada slijedi glavni zadatak u kojemu ćete proći kroz 100 pokušaja!\n\n' ...
                    'Zadatak će biti istog oblika kao ovaj kroz kojeg ste\nupravo prošli.\n\n\n' ...
                    'ODGOVARAJTE ŠTO BRŽE MOŽETE, BEZ GREŠAKA.\n\n\n'...
                    'Kada ste spremni, smjestite prste na tipke za odgovore,\n' ...
                    'i pritisnite ENTER kako biste započeli mjerenje!'];
        DrawFormattedText(window, instruction, 'center', 'center', white, [], [], [], 1.5);
        [before_main_onset] = Screen('Flip', window, feedback_onset + 0.8);
        WaitSecs(1);


        % Wait for return press
        while 1
            [~, keyCode] = KbWait;

            % return press continues the experiment
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
    
    
    pressed = 0;
    Screen('FillRect', window, backgroundColor);
    DrawFormattedText(window, trial_string, 'center', 150, white);
    if trial == (size(my_practice_trials, 1) + 1)
        [start_blank_onset] = Screen('Flip', window, before_main_onset + 0.8);
        WaitSecs(1);
    elseif trial > 1
        [start_blank_onset] = Screen('Flip', window, feedback_onset + 0.8);
    else
        [start_blank_onset] = Screen('Flip', window);
        WaitSecs(1);
    end
    
    if trial == (size(my_practice_trials, 1) + 1)
        start_time = GetSecs;
    end
    
    %% DRAW ARRAY
    
    % DRAW TRIAL NUMBER
    DrawFormattedText(window, trial_string, 'center', 150, white);

    
    % DRAW TARGET
    DrawFormattedText(window, target, 'center', 'center', target_color);
    
    % DRAW answer_1
    DrawFormattedText(window, answer_1, pos_x_answ_1, answer_y_pos, answer_1_color);
    
    % DRAW answer_2
    DrawFormattedText(window, answer_2, pos_x_answ_2, answer_y_pos, answer_2_color);

    KbQueueFlush();
    [array_onset] = Screen('Flip', window, start_blank_onset);
    
    % used these two lines of code to take printscreens so I can use them
    % for examples:
%     screen_image = Screen('GetImage', window);
%     imwrite(screen_image, [num2str(trial), 'test.tif']);

    KbQueueStart(); % start collecting key presses

    
    %% WAIT FOR USER INPUT %%
    while pressed == 0
        [pressed, pressTime, keyCode] = KbQueueCheck;
    end
    
    if find(pressTime) == correct_response
        R = 1;
        if trial == num_trials
            duration = GetSecs - start_time
        else
            duration = [];
        end
        Screen('DrawDots', window, [xCenter (yCenter + 100)], 25, green);
        DrawFormattedText(window, trial_string, 'center', 150, white);
        [feedback_onset] = Screen('Flip', window);
    elseif pressTime(escape) > 1  % is 'escape' pressed?
        clear all
        close all
        sca
        return
    else
        R = 0;
        if trial == num_trials
            duration = GetSecs - start_time;
        else
            duration = [];
        end
        Screen('DrawDots', window, [xCenter (yCenter + 100)], 25, red);
        DrawFormattedText(window, trial_string, 'center', 150, white);
        [feedback_onset] = Screen('Flip', window);
    end
    
    
    %% SAVE TRIAL DATA
    
    RT = pressTime(pressTime > 0) - array_onset;
    
    dataFile = fopen(dataFileName, 'a');
    fprintf(dataFile, formatString, subjectID, trial_type, R, RT, duration);
    fclose(dataFile);
    Screen('Close');
end




%% SAVE TRIAL DATA %%
% note that you should open and close the file every time you write to it, otherwise you may lose data in crashes
% pTrials are saved as non positive integers. The first practice trial is the lowest of these!
% U XLSX FILE SE U SVAKI REDAK UPISUJU IME I PREZIME, SITUACIJA, TE PO STUPCIMA ODABRANE VELI?INE TESTNIH KRUGOVA


Screen('FillRect', window, backgroundColor);
[final_blank_time] = Screen('Flip', window);
DrawFormattedText(window, 'KRAJ ZADATKA\n\n\n\n\nPOZOVITE EKSPERIMENTATORA' , 'center', 'center', white);
Screen('Flip', window, final_blank_time + 1);

WaitSecs(3);

clear all
sca


end


%%
function px = PosToPixels(pos, screen, uncentered)
if nargin<3
    uncentered = 0;
end
px = round((pos./repmat(screen.size,1,size(pos,2)) + 0.5*(uncentered==0)).*repmat(screen.res,1,size(pos,2)));
end
