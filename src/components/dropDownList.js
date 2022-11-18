import React from "react";

const DropDownList = (params) => {
    const {typology} = params;

    return(
        <>
            <option value = {typology}> {typology} </option>
        </>
    )   
    
}

export default DropDownList;