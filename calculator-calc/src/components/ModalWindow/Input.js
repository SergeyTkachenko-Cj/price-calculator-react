import React from "react";

const Input = props => {
    const {name, email, nameValid, emailValid} = props.prps;

    return (
        <div>
            <input onChange={e => props.txt(e)}
                onAnimationEnd={() => props.anim('nameValid')} 
                defaultValue={name} 
                className={nameValid ? "cli_info cli_full_nme" : "cli_info cli_full_nme anima"} 
                maxLength="45" 
                name="name" 
                placeholder="ФИО" 
                type="text" 
            />

            <input onChange={e => props.txt(e)} 
                onAnimationEnd={() => props.anim('emailValid')}
                defaultValue={email} 
                className={emailValid ? "cli_info cli_email" : "cli_info cli_email anima"} 
                name="email" 
                placeholder="Почт@" 
                type="email" 
            />
        </div>
    )
}

export default Input;