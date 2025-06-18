"use client"
import styles from "./style.module.scss"
import {useEffect, useState} from "react"

export default function Footer() {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
  const handleScroll = () => {
    const scrollTop = window.scrollY
    const windowHeight = window.innerHeight
    const fullHeight = document.documentElement.scrollHeight

    // Check if the user is within 50px of the bottom
    if (scrollTop + windowHeight >= fullHeight - 50) {
      setIsScrolled(true)
    } else {
      setIsScrolled(false)
    }
  }

  window.addEventListener('scroll', handleScroll)

  return () => {
    window.removeEventListener('scroll', handleScroll)
  }
}, [])


  return (
    <footer className={`${styles.footer} ${isScrolled? styles.scrolled : ""}`}>
      <p>Copyright © 2025 Gia Miminoshvili. All rights reserved.</p>
      <p>Terms of Use & Privacy Policy</p>
    </footer>
  )
}
