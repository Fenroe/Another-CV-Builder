function PersonalInfoEntry(
    {
        data,
        update,
    }
) {

    const localData = {
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        website: "",
    };

    function syncData() {
        update(localData)
    };

    return (
        <div>
            <fieldset>
                <legend>Personal Details</legend>
                <label>First Name</label>
                <input placeholder = {data.firstName} onChange ={(e) => localData.firstName = e}/>
                <label>Last Name</label>
                <input placeholder = {data.lastName} onChange = {(e) => localData.lastName = e}/>
                <label>Email Adress</label>
                <input placeholder = {data.email} onChange = {(e) => localData.email = e}/>
                <label>Phone Number</label>
                <input placeholder = {data.phoneNumber} onChange = {(e) => localData.email = e}/>
                <label>Website</label>
                <input placeholder = {data.website} onChange = {(e) => localData.website = e}/>
                <button onClick = {syncData}>Update</button>
            </fieldset>
        </div>
    )
};

export default PersonalInfoEntry;
