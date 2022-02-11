import FormControl from "../FormControl/FormControl";
import Button from "../Button/Button";

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

    function updateFirstName(value) {
        localData.firstName = value;
    };

    function updateLastName(value) {
        localData.lastName = value;
    };

    function updateEmail(value) {
        localData.email = value;
    };

    function updatePhoneNumber(value) {
        localData.phoneNumber = value;
    };

    function updateWebsite(value) {
        localData.website = value;
    };

    function syncData() {
        update(localData)
        console.log(data);
    };

    /* return (
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
    ) */

    return (
        <div>
            <fieldset>
                <legend>Personal Details</legend>
                <FormControl labelText = {"First Name"} inputType = {"text"} inputEffect = {updateFirstName}/>
                <FormControl labelText = {"Last Name"} inputType = {"text"} inputEffect = {updateLastName}/>
                <FormControl labelText = {"Email Address"} inputType = {"email"} inputEffect = {updateEmail}/>
                <FormControl labelText = {"Phone Number"} inputType = {"number"} inputEffect = {updatePhoneNumber}/>
                <FormControl labelText = {"Website"} inputType = {"url"} inputEffect = {updateWebsite}/>
                <Button btnText = {"Update"} btnEffect = {syncData}/>
            </fieldset>
        </div>
    )
};

export default PersonalInfoEntry;
