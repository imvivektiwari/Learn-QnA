import React from 'react'

const FormSelect = (props) =>(
    <label>
        <p>{props.label}</p>
        <select value={props.selectedValue} onChange={props.setOption}>
            {
                props.allOptions.map((option)=>{
                    return <option value={option.value} key={option.value}>{option.text}</option>
                })
            }
        </select>
    </label>
);

export default FormSelect;