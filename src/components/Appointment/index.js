import React from 'react';

import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";
import Form from "./Form";
import Status from "./Status";
import Confirm from "./Confirm";
import Error from "./Error";

import useVisualMode from '../../hooks/useVisualMode';

import "./styles.scss"

const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE";
const SAVING = "SAVING";
const DELETING = "DELETING";
const CONFIRM = "CONFIRM";
const EDIT = "EDIT";
const ERROR_SAVE = "ERROR_SAVE";
const ERROR_DELETE = "ERROR_DELETE";

export default function Appointment(props){
  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

  const save = (name, interviewer) => {
    const interview = {
      student: name,
      interviewer
    }

    transition(SAVING);
    
    props.bookInterview(props.id, interview)
    .then(() => {transition(SHOW)})
    .catch(error => {transition(ERROR_SAVE, true)})
  }

  const edit = () => {
    transition(EDIT);
  }

  const confirmDelete = () => {
    transition(CONFIRM)
  }

  const destroy = () => {
    transition(DELETING, true);

    props.cancelInterview(props.id)
    .then(() => {transition(EMPTY)})
    .catch(error => {transition(ERROR_DELETE, true)})
  }

  return (
    <article className="appointment" data-testid="appointment">
      <Header time={props.time} />
      {mode === EMPTY && (
        <Empty 
          onAdd={() => transition(CREATE)} 
        />
      )}
      {mode === SHOW && (
        <Show 
          student={props.interview.student}
          interviewer={props.interview.interviewer}
          onEdit={edit}
          onDelete={confirmDelete}
        />
      )}
      {mode === CREATE && (
        <Form 
          interviewers={props.interviewers} 
          onCancel={back} onSave={save} 
        />
      )}
      {mode === SAVING && (
        <Status 
          message={"Saving"} 
        />
      )}
      {mode === DELETING && (
        <Status 
          message={"Deleting"} 
        />
      )}
      {mode === CONFIRM && (
        <Confirm 
          message={"Are you sure you would like to delete?"} 
          onCancel={back} 
          onConfirm={destroy} 
        />
      )}
      {mode === EDIT && (
        <Form 
          interviewers={props.interviewers} 
          onCancel={back} onSave={save} 
          student={props.interview.student} 
          interviewer={props.interview.interviewer.id} 
        />
      )}
      {mode === ERROR_SAVE && (
        <Error 
          message={"Could not save the appointment"}
          onClose={back}
        />
      )}
      {mode === ERROR_DELETE && (
        <Error 
          message={"Could not delete the appointment"}
          onClose={back}
        />
      )}
    </article>
  )
}