import React, {Component} from "react"

class ErrorMessage extends Component{
    showError = (props) => {
        return (
            <div className="alert alert-warning" role="alert">
                <strong>Error! </strong>
                {props.message}
            </div>
        )
    }
    showNeutral = (props) => {
        return (
            <div className="alert alert-info" role="alert">
                <strong>Error! </strong>
                {props.message}
            </div>
        )
    }
    showSuccess = (props) => {
        return (
            <div className="alert alert-success" role="alert">
                <strong>Error! </strong>
                {props.message}
            </div>
        )
    }
}
export default ErrorMessage;