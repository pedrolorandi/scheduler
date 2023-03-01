import React from 'react';

import DayListItem from './DayListItem';

export default function DayList(props) {
  return (
    <ul>
      {props.days.map((day) => {
        return <DayListItem key={day.id} name={day.name} day={props.day} spots={day.spots} setDay={props.setDay} />
      })}
    </ul>
  )
}