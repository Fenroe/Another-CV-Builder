function Input() {
    return (
        <div>
            <fieldset>
                <legend>Personal Details</legend>
                <label>First Name</label>
                <input />
                <label>Last Name</label>
                <input />
                <label>Email Adress</label>
                <input />
                <label>Phone Number</label>
                <input />
                <label>Website</label>
                <input />
            </fieldset>
            <fieldset>
                <legend>Statement</legend>
                <textarea />
            </fieldset>
            <fieldset>
                <legend>Key Skills</legend>
                <button>Add Skill</button>
            </fieldset>
            <fieldset>
                <legend>Employment History</legend>
                <button>Add Employer</button>
            </fieldset>
            <fieldset>
                <legend>Education</legend>
                <button>Add Institute</button>
            </fieldset>
        </div>
    )
}

export default Input;