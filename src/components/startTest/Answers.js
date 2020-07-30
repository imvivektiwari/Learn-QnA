import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import { decodeHTMLEntities } from '../../utils/utility';

export default function Answers(props) {
    let answers;
    if(props?.incorrect && typeof props?.correct==="string"){
        answers = [...props.incorrect, props.correct]
    }
    else if(props?.incorrect){
        answers = [...props.incorrect, ...props.correct]
    }
    console.log(props.currectQuestion)
   
    return(
        answers? answers.map((option)=>{
            return(
                <p className="answer-options" key={uuidv4()}>
                    <label>
                        <input type='radio'name="quiz-option-radio"/>
                        <span>{decodeHTMLEntities(option)}</span>
                    </label>
                </p>
            )
        }):null
    )
}