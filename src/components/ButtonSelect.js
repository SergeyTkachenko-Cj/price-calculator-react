import React from "react";

const ButtonSelect = props => {
    const {clicked, id} = props.list;
    return (
        <button 
            className={clicked ? "btn-clicked cours_btn" : "cours_btn"}  
            onClick={clicked ? () => false : () => props.func(id)} 
            id={id}
            >{id}
        </button>
    )
}

export default ButtonSelect;