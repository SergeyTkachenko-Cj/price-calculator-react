import React from "react";
import Button from "react-bootstrap/Button";

const ManagerButton = props => {
    const {name, email, pic} = props.prps;

    return (
        <Button 
            variant="outline-success"
            className="mngr-btn btn btn-outline-success"
            onClick={() => props.func(email)}>
            <img src={pic} className="manager-pic" />
            <div className="manager-nme">{name}</div>
        </Button>
    )
}

export default ManagerButton;