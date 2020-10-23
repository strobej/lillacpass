import React from 'react';


function Input(props) {
    return (<div class="new-button">
        <input id={props.id} type={props.type} class={props.class} value={props.value} onClick={props.generator} />
    </div>);
        
}

export default Input;
