import React from 'react'
import Link from 'next/link'
import styles from './navbar.module.css'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className={styles.container}>
        <h2 className={styles.logo}>KELANA CREW</h2>
        <Link href="/" className={styles.link}>Home</Link>
        <Link href="/about" className={styles.link}>About</Link>
        <Link href="/contact" className={styles.link}>Contact</Link>
        <Link href="/trip_type" className={styles.link}>Activity</Link>
        <Link href="/event" className={styles.link}>Event</Link>
        <Link href="/destination" className={styles.link}>Destination</Link>
    </div>
  )
}

export default Navbar
