import React from 'react'
import 'remixicon/fonts/remixicon.css'
import styles from './ui.module.scss'

type ButtonProps = {
  title: string,
  type?: "button" | "submit" | "reset",
  icon?: string,
}

export default function Button(props: ButtonProps) {
  return (
    <button type={props.type} className={styles.button}>
      <span>{props.title}</span>
      <i className={props.icon || "ri-arrow-right-line"}></i>
    </button>
  )
}
