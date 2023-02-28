import React from "react";
import classNames from "classnames";

import "components/Button.scss";

export default function Button(props) {
   let className = classNames(
      'button', {
      'button--confirm': props.confirm,
      'button--danger': props.danger
   })

   return <button disabled={props.disabled} onClick={props.onClick} className={className}>{props.children}</button>;
}
