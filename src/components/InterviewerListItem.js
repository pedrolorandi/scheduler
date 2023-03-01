import React from 'react';
import classNames from 'classnames';

import "components/InterviewerListItem.scss";

export default function InterviewerListItem(props){
  console.log(props)

  let className = classNames(
    'interviewers__item', {
    'interviewers__item--selected': props.id === props.interviewer
  })
  
  return (
    <li onClick={() => props.setInterviewer(props.id)} className={className}>
      <img
        className="interviewers__item-image" 
        src={props.avatar}
        alt={props.name}
      />
      {props.id === props.interviewer && props.name}
    </li>
  )
}