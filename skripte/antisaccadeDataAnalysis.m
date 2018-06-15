%%%
% This script loads the antisaccade and SART xlsx files, and computes
% relevant scores

function [R_SART, R_antisaccade] = antisaccadeDataAnalysis()

%% SET UP RESULT FILE

% Define output path - OVDJE STAVITI ADRESU DESKTOPA:
out_path = 'C:\Users\matpa\Desktop\E-rudito\Studija_psiholozi\Rezultati\Antisaccade_xlsx\'; % laptop u uredu
% out_path = 'C:\Users\Matej\Desktop\'; % za moj laptop
% out_path = 'C:\Users\student\Desktop\'; % za mali praktikum

filenames = dir([out_path, 'antisaccade*.xlsx']);

group_prosaccade_errors = zeros(1, length(filenames));
group_antisaccade_errors = zeros(1, length(filenames));

group_correct_prosaccade_RTs = zeros(1, length(filenames));
group_incorrect_prosaccade_RTs = zeros(1, length(filenames));
group_correct_antisaccade_RTs = zeros(1, length(filenames));
group_incorrect_antisaccade_RTs = zeros(1, length(filenames));


for this_subject = 1 : length(filenames)
    dataFileName = ([out_path, filenames(this_subject).name]);
    imported = importdata(dataFileName);
    
    saccade = zeros(180,1);
    index_to_saccade = 1;
    
    for j = 74 : length(imported.textdata)
        if strcmp(char(imported.textdata(j, 2)), ' anti')
            saccade(index_to_saccade) = 1;
        else
            saccade(index_to_saccade) = 0;
        end
        index_to_saccade = index_to_saccade + 1;
    end
    
    % there is a mismatch between the index to imported.data and the one to
    % imported.textdata because when the file is read, the textdata part
    % includes the header, while the data part disregards it, so the
    % textdata part has an addidtional row at the top - that's why it has
    % one additional index above the one required for imported.data (74 and
    % 73, respectively)
    
    data = [saccade imported.data(73:end, :)]; % THIS IS THE DATA THAT WE ANALYZE!
    % First column contains the saccade_type (1 = antisaccade, 0 =
    % prosaccade). Second column contains fixation duration in msec. Third
    % column contains 0 if reponse is incorrect, and 1 if it is correct.
    % Fourth column contains reaction times
    
    
    % error numbers
    subject_prosaccade_error_number = 0;
    subject_antisaccade_error_number = 0;
    
    subject_correct_prosaccade_RTs = [];
    subject_incorrect_prosaccade_RTs = [];
    subject_correct_antisaccade_RTs = [];
    subject_incorrect_antisaccade_RTs = [];

   
    for t = 1 : length(data)
        
        switch(data(t, 1))
            case 0
                if data(t, 3) == 0
                    subject_prosaccade_error_number = subject_prosaccade_error_number + 1;
                    subject_incorrect_prosaccade_RTs = [subject_incorrect_prosaccade_RTs data(t, 4)];
                else
                    subject_correct_prosaccade_RTs = [subject_correct_prosaccade_RTs data(t, 4)];
                end
            case 1
                if data(t, 3) == 0
                    subject_antisaccade_error_number = subject_antisaccade_error_number + 1;
                    subject_incorrect_antisaccade_RTs = [subject_incorrect_antisaccade_RTs data(t, 4)];
                else
                    subject_correct_antisaccade_RTs = [subject_correct_antisaccade_RTs data(t, 4)];
                end
        end
        
                
    end
    
    % load subject's error number into group vector
    prosaccade_errors(this_subject) = subject_prosaccade_error_number;
    antisaccade_errors(this_subject) = subject_antisaccade_error_number;


    % load mean reaction times for various conditions into vectors for group
    correct_prosaccade_RTs(this_subject) = mean(subject_correct_prosaccade_RTs);
    group_incorrect_prosaccade_RTs(this_subject) =  mean(subject_incorrect_prosaccade_RTs);
    group_correct_antisaccade_RTs(this_subject) = mean(subject_correct_antisaccade_RTs);
    group_incorrect_antisaccade_RTs(this_subject) = mean(subject_incorrect_antisaccade_RTs);
    
    if isnan(mean(subject_incorrect_antisaccade_RTs))
        dataFileName
    end
   
end

prosaccade_errors
antisaccade_errors

correct_prosaccade_RTs
group_incorrect_prosaccade_RTs
group_correct_antisaccade_RTs
group_incorrect_antisaccade_RTs
end




