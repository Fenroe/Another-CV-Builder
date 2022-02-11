import FormControl from "../FormControl/FormControl";
import Button from "../Button/Button";

function KeySkillsEntry(
    {
        data,
        update,
    }
) {
    const localData = [];

    
    return (
        <fieldset>
            <legend>Key Skills</legend>
            {data.map((skill) => {
                return (
                    <FormControl key = {skill.index} labelText = {`Skill ${skill.index}`} inputType = {"text"} />
                )
            })}
        </fieldset>
    )
}

export default KeySkillsEntry;
