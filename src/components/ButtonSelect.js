import React, {Fragment} from "react";
import Button from 'react-bootstrap/Button';

const ButtonSelect = props => {
    const {clicked, id} = props.list;
    let shortId = '';

    switch (id) {
        case '1 кВ':
            shortId = '1кВ';
        break;
        case '10/20/35 кВ':
            shortId = '10-35кВ';
        break;
        default: shortId = '110-750кВ';
    }
    
    return (
        <Fragment>
                <Button 
                    variant="outline-success"
                    className={clicked ? "btn-clicked cours_btn lg" : "cours_btn lg"}
                    onClick={clicked ? () => false : () => props.func(id)} 
                    id={id}
                >{id}
                </Button>
                <Button 
                    variant="outline-success"
                    className={clicked ? "btn-clicked cours_btn sm" : "cours_btn sm"}  
                    onClick={clicked ? () => false : () => props.func(id)} 
                    id={id}
                >{shortId}
                </Button>
        </Fragment>
    )
}

export default ButtonSelect;