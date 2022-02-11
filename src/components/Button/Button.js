function Button(
    {
        btnText,
        btnEffect,
    }
) {
    return(
        <button onClick = {btnEffect}>{btnText}</button>
    )
};

export default Button;
