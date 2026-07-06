import React, {Fragment} from "react";
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';

const ButtonSelect = props => {
    const {clicked, id} = props.list;

    return (
        // <Fragment>
        //         <Button 
        //             variant="outline-success"
        //             className={clicked ? "btn-clicked cours_btn lg" : "cours_btn lg"}
        //             onClick={clicked ? () => false : () => props.func(id)} 
        //             id={id}
        //         >{id}
        //         </Button>
        //         <Button 
        //             variant="outline-success"
        //             className={clicked ? "btn-clicked cours_btn sm" : "cours_btn sm"}  
        //             onClick={clicked ? () => false : () => props.func(id)} 
        //             id={id}
        //         >{shortId}
        //         </Button>
        // </Fragment>

        <Dropdown.Item>
            <Fragment>
                 <Button 
                    variant="outline-success"
                    className={clicked ? "btn-clicked cours_btn lg" : "cours_btn lg"}
                    onClick={clicked ? () => false : () => props.func(id)} 
                    id={id}
                >{id}
                </Button>
            </Fragment>
        </Dropdown.Item>
    )
}

export default ButtonSelect;