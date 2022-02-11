import PersonalInfoEntry from "../PersonalInfoEntry/PersonalInfoEntry";
import StatementEntry from "../StatementEntry/StatementEntry";
import KeySkillsEntry from "../KeySkillsEntry/KeySkillsEntry";
import EmploymentHistoryEntry from "../EmploymentHistoryEntry/EmploymentHistoryEntry";
import EducationEntry from "../EducationEntry/EducationEntry";

function DataEntry() {
    return (
        <div>
            <PersonalInfoEntry />
            <StatementEntry />
            <KeySkillsEntry />
            <EmploymentHistoryEntry />
            <EducationEntry />
            <button>Preview</button>
        </div>
    )
}

export default DataEntry;