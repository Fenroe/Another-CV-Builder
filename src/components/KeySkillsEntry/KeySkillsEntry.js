function KeySkillsEntry(
    {
        data,
        update,
    }
) {
    return (
        <div>
            <fieldset>
                {data.map((skill) => {
                    return(
                        <div key = {skill.index}>
                            <label>Skill {skill.index}</label>
                            <input />
                        </div>
                    )
                })}
                <legend>Key Skills</legend>
                <button>Update</button>
            </fieldset>
        </div>
    )
}

export default KeySkillsEntry;
