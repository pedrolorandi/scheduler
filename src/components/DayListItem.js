import React from 'react';
import classNames from 'classnames';

import "components/DayListItem.scss";

export default function DayListItem(props) {
  const formatSpots = () => {
    return props.spots === 0 ? 'no spots remaining' : props.spots === 1 ? '1 spot remaining' : `${props.spots} spots remaining`; 
  }

  console.log(props.name, props.day)

  let className = classNames(
    'day-list__item', {
    'day-list__item--selected': props.name === props.day,
    'day-list__item--full': props.spots === 0
  })

  return (
    <li onClick={() => props.setDay(props.name)} className={className}>
      <h2 className="text--regular">{props.name}</h2>
      <h3 className="text--light">{formatSpots()}</h3>
    </li>
  )
}