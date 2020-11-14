import React from 'react';
import {generatePassword} from '../api/api';

function Input(props) {
     function handleClick() {
         if (props.passwordType === "simple") {   
            props.changePassword(generatePassword("simple"));
        } else {
             props.changePassword(generatePassword("strong"));
         }
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
