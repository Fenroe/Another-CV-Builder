import PersonalInfoEntry from "../PersonalInfoEntry/PersonalInfoEntry";
import StatementEntry from "../StatementEntry/StatementEntry";
import KeySkillsEntry from "../KeySkillsEntry/KeySkillsEntry";
import EmploymentHistoryEntry from "../EmploymentHistoryEntry/EmploymentHistoryEntry";
import EducationEntry from "../EducationEntry/EducationEntry";

function DataEntry(
    {
        personalInfo, 
        setPersonalInfo, 
        statement, 
        setStatement,
        keySkills,
        setKeySkills,
        employmentHistory,
        setEmploymentHistory,
        education,
        setEducation,
    }
    ) {
    return (
        <div>
            <PersonalInfoEntry 
            data = {personalInfo}
            update = {setPersonalInfo}/>
            <StatementEntry 
            data = {statement}
            update = {setStatement}/>
            <KeySkillsEntry
            data = {keySkills}
            update = {setKeySkills}/>
            <EmploymentHistoryEntry 
            data = {employmentHistory}
            update = {setEmploymentHistory}/>
            <EducationEntry 
            data = {education}
            update = {setEducation}/>
            <button>Preview</button>
        </div>
    )
}

export default DataEntry;