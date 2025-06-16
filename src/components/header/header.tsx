"use client"
import Image from 'next/image'
import React, {useState, useEffect} from 'react'
import styles from './style.module.scss'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 50) {
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
    <header className={`${styles.header} ${isScrolled? styles.reach : ""}`}>
      <ul>
        <li><Image src="https://raw.githubusercontent.com/giamimino/images/refs/heads/main/marketing-landing-page/logo.webp" alt='logo'
          width={25} height={25}  />
          <span>DOML</span>
          </li>
        <li>Product</li>
        <li>Team</li>
        <li>Enterprise</li>
        <li>Explore</li>
        <li>Marketplace</li>
        <li>Pricing</li>
      </ul>
      <ul>
        <li>
          <input type="text" placeholder='Search DOML' />
        </li>
        <button>Sign in</button>
        <button>Sign up</button>
      </ul>
    </header>
  )
}
