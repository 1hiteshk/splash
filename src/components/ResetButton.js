import React from "react";

const ResetButton = ({resetBoard}) => {
    return(
        <button className="reset" onClick={resetBoard}>Reset</button>
    )
}

export default ResetButton;