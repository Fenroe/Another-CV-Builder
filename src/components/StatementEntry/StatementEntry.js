function StatementEntry(
    {
        data,
        update,
    }
) {

    let localData = "";

    function syncData() {
        update(localData);    
    };

    return (
        <div>
            <fieldset>
                <legend>Statement</legend>
                <textarea placeholder = {data} onChange = {(e) => localData = e}/>
                <button onClick = {syncData}>Update</button>
            </fieldset>
        </div>
    )
}

export default StatementEntry;
