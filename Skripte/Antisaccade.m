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



function [subjectID, pTrials, xTrials, antiSaccadeProportion] = Antisaccade(subjectID, pTrials, xTrials, antiSaccadeProportion)

debug_mode = 0;
use_mouse = 1;
if debug_mode
    dbstop if error
    PsychDebugWindowConfiguration
end


%% SETTINGS %%
% slCharacterEncoding('UTF-8');
Priority(1);

% Background color: choose a number from 0 (black) to 255 (white)
white = [255 255 255];
green = [0 255 0];
red = [255, 0, 0];
backgroundColor = 0;


% Screen setup
clear screen
whichScreen = max(Screen('Screens'));
% whichScreen = 2;
Screen('Preference', 'TextEncodingLocale', 'UTF-8');
Screen('Preference', 'SkipSyncTests', 1);
screenRect = Screen('Rect', whichScreen);


% screen measurements
screen.dist = 70;
% screen.cm = [40.5; 29.8]; % izba
screen.cm = [37.5; 30]; % dell u uredu i u malom praktikumu
% screen.cm = [53.2; 30]; % asus u uredu
% screen.cm = [34.5; 19.4]; % lenovo

screen.size = 2 * atan(screen.cm * 0.5 / screen.dist) / pi * 180;
screen.res = screenRect(3:4)';


% calculate screen center
[xCenter, yCenter] = RectCenter(screenRect);
screen.centre = [xCenter; yCenter];




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


%     defaults = {'', '12', '90', '50'};
%     answer = inputdlg(prompt, 'Postavke', 1, defaults);
%
%     % now decode answer
%     [subjectID, pTrials, xTrials, antiSaccadeProportion] = deal(answer{:});
%
%     pTrials = str2double(pTrials);
%     if isnan(pTrials)
%         pTrials = 0;
%     end
%
%     xTrials = str2double(xTrials);
%     antiSaccadeProportion = str2double(antiSaccadeProportion);


%% SET UP RESULT FILE

% Define output path - OVDJE STAVITI ADRESU DESKTOPA:
% out_path = 'C:\Users\matpa\Desktop\'; % laptop u uredu
% out_path = 'C:\Users\Matej\Desktop\'; % za moj laptop
out_path = 'C:\Users\student\Desktop\'; % za mali praktikum


% other major variables
date_string = datestr(clock, 'yyyy-mm-dd-HH-MM');
formatString = '\r\n%s\t %s\t %d\t %d\t %d\t'; % this is for data output
% saved: subject code, trial type, fixation duration, correct?, reaction
% time

dataFileName = ([out_path, 'antisaccade_rezultati_',date_string, '_', subjectID, '.xls']);

if exist(dataFileName, 'file') == 0
    dataFile = fopen(dataFileName, 'a');
    fprintf(dataFile, 'Šifra ispitanika\t Situacija\t Trajanje fiksacije\t Tocno?\t Vrijeme reakcije');
    fclose('all');
end


%% FIRST SCREEN FLIP
[window] = Screen('OpenWindow', whichScreen, backgroundColor, [], [], 2);

% Set up alpha-blending for smooth (anti-aliased) lines
Screen('BlendFunction', window, 'GL_SRC_ALPHA', 'GL_ONE_MINUS_SRC_ALPHA');

Screen('TextFont', window , 'Courier New');

fontSize = 20;

Screen('TextSize', window, fontSize);
Screen('FillRect', window, backgroundColor);
Screen('Flip', window);

HideCursor;





%% KEYBOARD SETUP

KbName('UnifyKeyNames');
left_arrow = KbName('leftarrow');
down_arrow = KbName('downarrow');
right_arrow = KbName('rightarrow');
escape = KbName('escape');
KbCheckList = [KbName('return'), left_arrow, down_arrow, right_arrow, escape];
RestrictKeysForKbCheck(KbCheckList);




%% DEFINE POSITION OF STIMULI

ecc = 11.33;
stimEcc_pix  = PosToPixels(ecc, screen, 1);


%% FIXATION CROSS SETUP
% Query the frame duration
ifi = Screen('GetFlipInterval', window);

% Here we set the size of the arms of our fixation cross
fixCrossDimPix = 15;

% Now we set the coordinates (these are all relative to zero we will let
% the drawing routine center the cross in the center of our monitor for us)
xCoords = [-fixCrossDimPix fixCrossDimPix 0 0];
yCoords = [0 0 -fixCrossDimPix fixCrossDimPix];
allCoords = [xCoords; yCoords];

% Set the line width for our fixation cross
lineWidthPix = 2;


% %% IF I WOULD WANT TO SPECIFY THE PROPORTION OF ANTISACCADES AND PROSACCADES;
% % ALSO, MAKE BOTH TYPE APPEAR ON THE LEFT AND RIGHT OF FIXATION AN EQUAL NUMBER OF TIMES
%
%     EXP_TRIALS = zeros(1, xTrials);  % set all to zero
%
%     % Odredi broj antisakada tijekom mjerenja s obzirom na proporciju
%     divisor = 100/antiSaccadeProportion;
%     anti_num = floor(xTrials/divisor);
%
%
%     indices_to_EXP_TRIALS = randperm(numel(EXP_TRIALS));                                    % randomize the linear indices
%
%     if mod(anti_num, 2) ~= 0
%         x = floor(anti_num/2);
%
%         Ix = indices_to_EXP_TRIALS(1:x);                                                 % antisaccade with cue on the left (1)
%         IIx = indices_to_EXP_TRIALS((x+1):anti_num);                                         % antisaccade with cue on the right (2)
%         IIIx = indices_to_EXP_TRIALS(anti_num+1:(anti_num+((length(EXP_TRIALS)-anti_num)/2)));              % prosaccade with cue on the left (3)
%         IVx = indices_to_EXP_TRIALS((anti_num+((length(EXP_TRIALS)-anti_num)/2)+1:length(EXP_TRIALS))); % prosaccade with cue on the right (4)
%     else
%         Ix = indices_to_EXP_TRIALS(1:(anti_num/2));                                                 % antisaccade with cue on the left (1)
%         IIx = indices_to_EXP_TRIALS(((anti_num/2)+1):anti_num);                                         % antisaccade with cue on the right (2)
%         IIIx = indices_to_EXP_TRIALS(anti_num+1:(anti_num+((length(EXP_TRIALS)-anti_num)/2)));              % prosaccade with cue on the left (3)
%         IVx = indices_to_EXP_TRIALS((anti_num+((length(EXP_TRIALS)-anti_num)/2)+1:length(EXP_TRIALS))); % prosaccade with cue on the right (4)
%     end
%
%     EXP_TRIALS(Ix) = 1;     % antisaccade with cue on the left (1)
%     EXP_TRIALS(IIx) = 2;    % antisaccade with cue on the right (2)
%     EXP_TRIALS(IIIx) = 3;   % prosaccade with cue on the left (3)
%     EXP_TRIALS(IVx) = 4;    % prosaccade with cue on the right (4)
%
%
% %% MAKE THE SAME THING FOR A BLOCK OF PRACTICE TRIALS
%
%     PR_TRIALS = zeros(1, pTrials);  % set all to zero
%
%     % Odredi broj antisakada tijekom vježbe s obzirom na proporciju
%     anti_num = floor(pTrials/divisor);
%
%
%     indices_to_PR_TRIALS = randperm(numel(PR_TRIALS));                                   % randomize the linear indices
%
%     if mod(anti_num, 2) ~= 0
%         x = floor(anti_num/2);
%
%         Ix = indices_to_PR_TRIALS(1:x);                                                 % antisaccade with cue on the left (1)
%         IIx = indices_to_PR_TRIALS((x+1):anti_num);                                         % antisaccade with cue on the right (2)
%         IIIx = indices_to_PR_TRIALS(anti_num+1:(anti_num+((length(PR_TRIALS)-anti_num)/2)));              % prosaccade with cue on the left (3)
%         IVx = indices_to_PR_TRIALS((anti_num+((length(PR_TRIALS)-anti_num)/2)+1:length(PR_TRIALS))); % prosaccade with cue on the right (4)
%     else
%         Ix = indices_to_PR_TRIALS(1:(anti_num/2));                                                 % antisaccade with cue on the left (1)
%         IIx = indices_to_PR_TRIALS(((anti_num/2)+1):anti_num);                                         % antisaccade with cue on the right (2)
%         IIIx = indices_to_PR_TRIALS(anti_num+1:(anti_num+((length(PR_TRIALS)-anti_num)/2)));              % prosaccade with cue on the left (3)
%         IVx = indices_to_PR_TRIALS((anti_num+((length(PR_TRIALS)-anti_num)/2)+1:length(PR_TRIALS))); % prosaccade with cue on the right (4)
%     end
%
%
%     PR_TRIALS(Ix) = 1;      % antisaccade with cue on the left (1)
%     PR_TRIALS(IIx) = 2;     % antisaccade with cue on the right (2)
%     PR_TRIALS(IIIx) = 3;    % prosaccade with cue on the left (3)
%     PR_TRIALS(IVx) = 4;     % prosaccade with cue on the right (4)
%
%     TRIALS = [PR_TRIALS, EXP_TRIALS];

my_design = fullfact([3 4 3]);


%% DEFINE THE FIXATION DURATIONS

possible_fix_durations = [0.4 0.8 1.2];


my_fixations = my_design(:, 1);
for i = 1 : length(possible_fix_durations)
    my_fixations(my_fixations == i) = possible_fix_durations(i);
end

my_design(:, 1) = my_fixations;


%% DEFINE TARGETS

possible_targets = ['B'; 'P'; 'R'];

my_targets = my_design(:, 3);
for i = 1 : length(possible_targets)
    my_targets(my_targets == i) = possible_targets(i, 1);
end

my_targets = cellstr(char(my_targets));
my_design = num2cell(my_design);
my_design(:, 3) = my_targets;


%% DEFINE TRIALS

% Mapping trials
number_of_map_trials = 36;

my_mapping_trials = my_design;
my_mapping_trials(:, 2) = {[0]};

which_rows = randperm(length(my_mapping_trials), number_of_map_trials);
my_mapping_trials = my_mapping_trials(which_rows, :);



% Practice trials
number_of_practice_trials = 36;
my_practice_trials = my_design;

which_rows = randperm(length(my_practice_trials), number_of_practice_trials);
my_practice_trials = my_design(which_rows, :);



% Experimental trials
my_experimental_trials = [my_design; my_design; my_design; my_design; my_design];


% RANDOMIZE ORDER
my_mapping_trials = my_mapping_trials(randperm(size(my_mapping_trials, 1)), :);
my_practice_trials = my_practice_trials(randperm(size(my_practice_trials, 1)), :);
my_experimental_trials = my_experimental_trials(randperm(size(my_experimental_trials, 1)), :);

my_non_experimental_trials = [my_mapping_trials; my_practice_trials];
my_trials = [my_non_experimental_trials; my_experimental_trials];


num_trials = size(my_trials, 1);




%% EXPERIMENT STARTS HERE %%

keys = [left_arrow down_arrow right_arrow escape];
keylist = zeros(1, 256);
keylist(keys) = 1;

KbQueueCreate(0, keylist);

%% TRIALS START HERE %%


for trial = 1 : num_trials
    
    switch(my_trials{trial, 2})
        case 0 % mapping -> targets and cues presented to center
            cross_colour = white;
            cue_position = 'center';
            target_position = 'center';
        case 1 % antisaccade with cue on left
            cross_colour = red;
            cue_position = xCenter - stimEcc_pix(1);
            target_position = xCenter + stimEcc_pix(1);
        case 3 % antisaccade with cue on right
            cross_colour = red;
            cue_position = xCenter + stimEcc_pix(1);
            target_position = xCenter - stimEcc_pix(1);
        case 2 % prosaccade with cue on left
            cross_colour = white;
            cue_position = xCenter - stimEcc_pix(1);
            target_position = xCenter - stimEcc_pix(1);
        case 4 % prosaccade with cue on right
            cross_colour = white;
            cue_position = xCenter + stimEcc_pix(1);
            target_position = xCenter + stimEcc_pix(1);
    end
    
    this_fix_to_cue = my_trials{trial, 1};
    
    %% UPUTE
    if trial == 1
        
        % POČETNE UPUTE I UPUTE ZA MAPIRANJE ODGOVORA
        for uputa = 1 : 3
            
            switch(uputa)
                case 1
                    instruction = 'UPUTA ZA RAD\n\nVaša je zadaća identificirati slova\nkoja se vrlo kratko prikazuju na ekranu.\n\nU prvom dijelu ćete proći kroz niz pokušaja za vježbu u\nkojima će se ciljno slovo prikazivati na središtu ekrana.\n\nSvrha prve vježbe je da naučite koje tipke\nna tipkovnici odgovaraju kojim slovima.\n\nPritisnite ENTER za nastavak upute.';
                case 2
                    instruction = 'Tijekom zadatka koristit ćete tipke koje su na\ntipkovnici označene s bijelim naljepnicama\nna kojima pišu slova "B", "P" i "R".\n\nNa tipkovnici, smjestite svoj kažiprst na tipku\nna kojoj je napisano "B", srednji prst na tipku\nna kojoj je napisano "P", i prstenjak na tipku\nna kojoj je napisano "R".\n\nKada na ekranu vidite slovo "B", pritisnite "B".\nKada vidite slovo "P", pritisnite "P".\nKada vidite slovo "R", pritisnite "R".\n\nPritisnite ENTER za nastavak upute.';
                case 3
                    instruction = 'Svaki pokušaj započinje prikazom fiksacijskog križića,\nnakon kojeg će kratko zatreperiti simbol "=".\nOdmah zatim će se vrlo kratko prikazati slovo koje trebate\nidentificirati, i njegovo mjesto će brzo preuzeti znamenka "8".\n\nStoga, obratite pozornost i fokusirajte svoj pogled na\nsredinu ekrana, inače biste mogli propustiti slovo.\n\nOdgovarajte što brže možete BEZ GREŠAKA.\nVažno je da budete brzi, ali VAŽNIJE je da ste točni.\n\nNakon što date svoj odgovor, na ekranu će se\nprikazati ZELENI kvadrat ukoliko ste odgovorili\nTOČNO, a CRVENI ukoliko ste odgovorili NETOČNO.\n\nPritisnite ENTER za početak vježbe.';
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
        
    elseif trial == size(my_mapping_trials, 1) + 1
        
        % PRIKAZ UPUTE ZA VJEŽBU IDENTIFIKACIJE SA SAKADAMA
        for uputa = 1 : 4
            
            switch(uputa)
                case 1
                    instruction = 'Prvi dio vježbe je gotov.\n\nPritisnite ENTER za nastavak upute.';
                    DrawFormattedText(window, instruction, 'center', 'center', white, [], [], [], 1.5);
                    Screen('Flip', window, feedback_onset + 0.8);
                    WaitSecs(1);
                case 2
                    instruction = 'U sljedećem dijelu zadatka, slova se\nNEĆE prikazivati u središtu ekrana!\n\n\nUmjesto toga, prikazat će se ili\nna LIJEVOJ ili na DESNOJ strani ekrana!\n\n\n\n\nPritisnite ENTER za nastavak upute.';
                    DrawFormattedText(window, instruction, 'center', 'center', white, [], [], [], 1.5);
                    Screen('Flip', window);
                    WaitSecs(1);
                case 3
                    instruction = 'Simbol "=" zatreperi prije pojave slova\nkako bi Vam se pomoglo što brže ga locirati.\n\n\nU sljedećem nizu pokušaja za vježbu, BOJA fiksacijskog\nkrižića određuje na kojoj strani ekrana se, u odnosu na\ntrepereći simbol "=", pojavljuje ciljno slovo.\n\n\nUkoliko je križić BIJELI, slovo će se prikazati\nna ISTOJ strani kao i trepereći simbol.\n\nUkoliko je križić CRVENI, slovo će se prikazati\nna strani SUPROTNOJ od treperećeg simbola.\n\n\n\nPritisnite ENTER za nastavak upute.';
                    DrawFormattedText(window, instruction, 'center', 'center', white, [], [], [], 1.5);
                    Screen('Flip', window);
                    WaitSecs(1);
                case 4
                    instruction = 'Na početku svakog pokušaja, fokusirajte svoj\npogled na fiksacijski križić jer će Vas to pripremiti\nna trepereći simbol koji dolazi ubrzo nakon njega.\n\nOdgovarajte što brže možete BEZ GREŠAKA.\nVažno je da budete brzi, ali VAŽNIJE je da ste točni.\n\nNakon što date svoj odgovor, na ekranu će se\nprikazati ZELENI kvadrat ukoliko ste odgovorili\nTOČNO, a CRVENI ukoliko ste odgovorili NETOČNO.\n\nPritisnite ENTER za početak vježbe.';
                    DrawFormattedText(window, instruction, 'center', 'center', white, [], [], [], 1.5);
                    Screen('Flip', window);
                    WaitSecs(1);
            end
            
            
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
        
    elseif trial == (size(my_non_experimental_trials, 1) + 1)
        
        % PRIKAZ UPUTE PRIJE MJERENJA
        for uputa = 1 : 2
            
            switch(uputa)
                case 1
                    instruction = 'Vježba je završena! Sada slijedi mjerenje!\n\nZadatak će biti istog oblika kao ovaj kroz kojeg ste\nupravo prošli. Međutim, u ovom dijelu NEĆETE dobivati\npovratnu informaciju o točnosti Vašeg odgovora!\n\n\nPritisnite ENTER za nastavak upute.';
                    DrawFormattedText(window, instruction, 'center', 'center', white, [], [], [], 1.5);
                    Screen('Flip', window, feedback_onset + 0.8);
                    WaitSecs(1);
                case 2
                    instruction = 'Na početku svakog pokušaja, fokusirajte svoj\npogled na fiksacijski križić jer će Vas to pripremiti\nna trepereći simbol koji dolazi ubrzo nakon njega.\n\nOdgovarajte što brže možete BEZ GREŠAKA.\nVažno je da budete brzi, ali VAŽNIJE je da ste točni.\n\n\n\nKada ste spremni, smjestite prste na tipke za odgovore,\ni pritisnite ENTER kako biste započeli mjerenje!';
                    DrawFormattedText(window, instruction, 'center', 'center', white, [], [], [], 1.5);
                    Screen('Flip', window);
                    WaitSecs(1);
            end
            
            
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
        
    elseif trial == (size(my_non_experimental_trials, 1) + (size(my_experimental_trials, 1)/2)) + 1
        
        % PAUZA
        instruction = 'Uzmite kratki predah.\n\n\nNa početku svakog pokušaja, fokusirajte svoj\npogled na fiksacijski križić jer će Vas to pripremiti\nna trepereći simbol koji dolazi ubrzo nakon njega.\n\nOdgovarajte što brže možete BEZ GREŠAKA.\nVažno je da budete brzi, ali VAŽNIJE je da ste točni.\n\n\n\nKada ste spremni nastaviti, smjestite prste na tipke za\nodgovore, i pritisnite ENTER kako biste pokrenuli zadatak!';
        DrawFormattedText(window, instruction, 'center', 'center', white, [], [], [], 1.5);
        Screen('Flip', window, black_before_rest + 0.8);
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
    if (trial > 1) && (trial < size(my_non_experimental_trials, 1) + 1)
        [start_blank_onset] = Screen('Flip', window, feedback_onset + 0.8);
    elseif trial == 1 || (trial == size(my_mapping_trials, 1) + 1) || (trial == size(my_non_experimental_trials, 1) + 1)
        [start_blank_onset] = Screen('Flip', window);
    else
        [start_blank_onset] = Screen('Flip', window);
    end
    
    
    %% Draw fixation cross, set it to the center of the screen and set good quality anti-aliasing
    Screen('DrawLines', window, allCoords, lineWidthPix, cross_colour, [xCenter yCenter], 2);
    [fixation_onset] = Screen('Flip', window, start_blank_onset + 0.7);
    
    Screen('FillRect', window, backgroundColor);
    [fixation_offset] = Screen('Flip', window, fixation_onset + this_fix_to_cue);
    
    %% CUE
    DrawFormattedText(window, '=', cue_position, (yCenter + fontSize - 4), white);
    [cue1_onset] = Screen('Flip', window, fixation_offset + 0.05);
    
    Screen('FillRect', window, backgroundColor);
    [black_between_cues_onset] = Screen('Flip', window, cue1_onset + 0.1);
    
    DrawFormattedText(window, '=', cue_position, (yCenter + fontSize - 4), white);
    [cue2_onset] = Screen('Flip', window, black_between_cues_onset + 0.05);
    
    Screen('FillRect', window, backgroundColor);
    [black_onset] = Screen('Flip', window, cue2_onset + 0.1);
    
    %% TARGET
    stimulus = my_trials{trial, 3};
    DrawFormattedText(window, stimulus, target_position, 'center', white);
    KbQueueFlush();
    [target_onset] = Screen('Flip', window, black_onset + 0.05);
    KbQueueStart(); % start collecting key presses
    
    
    %% MASK
    
    DrawFormattedText(window, '8', target_position, 'center', white);
    Screen('Flip', window, target_onset + 0.1);
    
    
    %% WAIT FOR USER INPUT %%
    
    while pressed == 0
        [pressed, pressTime] = KbQueueCheck;
    end
    
    if (stimulus == 'B' && pressTime(left_arrow) > 1) || (stimulus == 'P' && pressTime(down_arrow) > 1) || (stimulus == 'R' && pressTime(right_arrow) > 1)
        R = 1;
        if trial <= (size(my_mapping_trials, 1) + size(my_practice_trials, 1))
            Screen('DrawDots', window, [xCenter (yCenter + 100)], 25, green);
            [feedback_onset] = Screen('Flip', window);
        end
    elseif pressTime(escape) > 1  % is 'escape' pressed?
        clear all
        close all
        sca
        return
    else
        R = 0;
        if trial <= (size(my_mapping_trials, 1) + size(my_practice_trials, 1))
            Screen('DrawDots', window, [xCenter (yCenter + 100)], 25, red);
            [feedback_onset] = Screen('Flip', window);
        end
    end
    
    if trial == (size(my_non_experimental_trials, 1) + (size(my_experimental_trials, 1)/2))
        Screen('FillRect', window, backgroundColor);
        [black_before_rest] = Screen('Flip', window);
    end
    
    
    %% SAVE TRIAL DATA
    if my_trials{trial, 2} == 1 || my_trials{trial, 2} == 3
        trial_type = 'anti';
    elseif my_trials{trial, 2} == 0
        trial_type = 'mapping';
    else
        trial_type = 'pro';
    end
    
    RT = pressTime(pressTime > 0) - target_onset;
    
    dataFile = fopen(dataFileName, 'a');
    fprintf(dataFile, formatString, subjectID, trial_type, this_fix_to_cue, R, RT);
    fclose(dataFile);
    Screen('Close');
end




%% SAVE TRIAL DATA %%
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


%%
function px = PosToPixels(pos, screen, uncentered)
if nargin<3
    uncentered = 0;
end
px = round((pos./repmat(screen.size,1,size(pos,2)) + 0.5*(uncentered==0)).*repmat(screen.res,1,size(pos,2)));
end
