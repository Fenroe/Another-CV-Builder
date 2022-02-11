function FormControl(
    {
        index, 
        labelText, 
        inputType,
        inputEffect
    }
) {
    function createInput() {
        if (inputType === "textarea") {
            return(
                <textarea />
            )
        } else {
            return(
                <input type = {inputType} onChange = {(e) => inputEffect(e.target.value)}/>
            )
        }
    }
    return (
        <div key = {index}>
            <label>{labelText}</label>
            {createInput()}
        </div>
    )
};

export default FormControl;
