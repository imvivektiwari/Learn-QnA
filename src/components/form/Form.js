import React from 'react'

const Form = (props)=>(
    <form id={props.id} onSubmit={props.onSubmit}>
         <p className="formLabel">{props.label}</p>
         {props.children}
         <input type="submit" value={props.submitValue}/>
    </form>
);

export default Form;