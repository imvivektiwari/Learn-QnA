import React from 'react';
import {useDispatch} from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { decodeHTMLEntities } from '../../utils/utility';
import { setAttemptedQuestionAction } from '../../redux/questionsAnswes/questionsAnswersActions';

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
                    <label>
                        <input type='radio'name="quiz-option-radio" 
                        onChange={()=>updateAnswer(option)} 
                        checked={props.attempedOption===option}
                        />
                        <span>{decodeHTMLEntities(option)}</span>
                    </label>
                </p>
            )
        }):null
    )
}