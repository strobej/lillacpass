import React from 'react';
import {generatePassword} from '../api/api';

function Input(props) {
     function handleClick() {
         if (props.passwordType === "simple") {   
            props.changePassword(generatePassword("simple"));
        } else if (props.passwordType === "complex") {
            props.changePassword(generatePassword("complex"));
         } else {
            copyPassword(props.password);
         }
     }

     function copyPassword(password){
        navigator.clipboard.writeText(password);
     }

    return (<div className="new-button">
            <input id={props.id} 
            type={props.type} 
            className={props.class} 
            value={props.value}
            onClick={handleClick} />
            </div>);
}

export default Input;
