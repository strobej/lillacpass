import React from 'react';

function generateSimplePasswsword(){
    console.log("sdfsdfasdfsd");
}


function Input(props) {
    function generator(e) {
        e.preventDefault();

        const id = props.id;
        if (id === "simple-button"){
            generateSimplePasswsword();
        }
    }


    return (<div className="new-button">
            <input id={props.id} type={props.type} className={props.class} value={props.value} onClick={generator} />
            </div>);
}



export default Input;
