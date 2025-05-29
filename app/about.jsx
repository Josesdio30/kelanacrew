import React from 'react'
import styles from './about.module.css'
import Image from 'next/image'
const about = () => {
  return (
    <div>
      <div className={styles.text}>
        <h1>KELANA CREW</h1>
        <div className={styles.meaning}>
          <h2>"KELANA"</h2>
        <p>memberi sentuhan indonesia yang berarti perjalanan</p>
        <h2>CREW</h2>
        <p>memberi kesan komunitas petualang kecil yang solid</p>
        </div>
      </div>
    </div>
  )
}

export default about
