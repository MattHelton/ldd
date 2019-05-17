import React from 'react';

const Input = (props) => {
    return (  
        <input 
           type='text' 
           onChange={props.handleInput}
           value={props.userInput}
        />
    );
}
 
export default Input;