import React from "react";

const DropDownList = (params) => {
    const {tipology} = params;
    return(
        <>
            <option value={tipology}> {tipology} </option>
        </>
    )   
}

export default DropDownList;