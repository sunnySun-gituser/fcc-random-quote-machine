import React from 'react'

const Button = (props) => {
    return ( 
        <button id={props.id}
                size={props.size} 
                onClick={props.onClick}>
            {props.buttonDisplayName}
        </button>
     );
}
 
export default Button;