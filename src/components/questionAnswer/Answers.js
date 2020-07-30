import React from 'react';
import {useDispatch} from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { decodeHTMLEntities } from '../../utils/utility';
import { setAttemptedQuestionAction } from '../../redux/questionsAnswes/questionsAnswersActions';
import FormRadio from '../form/FormRadio';

export default function Answers(props) {
    let answers;
    if(props?.incorrect && typeof props?.correct==="string"){
        answers = [...props.incorrect, props.correct]
    }
    else if(props?.incorrect){
        answers = [...props.incorrect, ...props.correct]
    }
    
    const dispatch = useDispatch()

    const updateAnswer = (option) => {
        dispatch(setAttemptedQuestionAction(option, props.currectQuestion))
    };
    
    return(
        answers? answers.map((option)=>{
            return(
                <p className="answer-options" key={uuidv4()}>
                    <FormRadio 
                        name={`quiz-option-radio-${props.currectQuestion}`}
                        onChange={()=> props.stopChange || updateAnswer(option)}
                        checked={props.attempedOption===option}
                        label={decodeHTMLEntities(option)}
                    />
                </p>
            )
        }):null
    )
}