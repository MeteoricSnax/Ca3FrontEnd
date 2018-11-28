import React from "react"

export const ShowSuccess = (props) => {
    return <div className="alert alert-success" role="alert">
        <strong>Success! </strong>
        {props.message}
    </div>
}

export const ErrorMessage = (props) => {
    return <div className="alert alert-success" role="alert">
        <strong>Error! </strong>
        {props.message}
    </div>
}