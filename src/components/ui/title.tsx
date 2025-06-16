import React from 'react'
import styles from './ui.module.scss'

type TitleProps = {
  size: "text-[40px]" | "text-7xl"
}

export default function Title(props: TitleProps) {
  return (
    <h1 className={`${styles.h1} ${props.size}`}>
      <span className={styles.typing}><span className={styles.rotate}>AI</span> Marketing.</span>
      <span className={styles.typing} 
      style={{animationDelay: "1.3s"}}>Optimized Reach.</span>
    </h1>
  )
}
