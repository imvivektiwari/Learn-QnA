import React from 'react'

const FormInput = (props)=>(
    <label>
        <p>{props.label}</p>
        <input value={props.value} onChange={props.setValue} type={props.type}/>
    </label>
);

export default FormInput;