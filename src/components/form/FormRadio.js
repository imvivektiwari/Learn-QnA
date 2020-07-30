import React from 'react'

const FormRadio = (props)=>(
    <label>
        <input type='radio' name={props.name} 
            onChange={props.onChange} 
            checked={props.checked}
        />
        <span>{props.label}</span>
    </label>
);

export default FormRadio;