import React from 'react';
import Image from 'next/image';
import styles from './footer.module.css'
const Footer = () => {
  return (
    <div className={styles.container}>
        <div>©2025 Kelana Crew. All right reserved.</div>
    <div className={styles.social}>
        <Image src="/1.png" width={15} height={15} alt="facebook" className={styles.icon}/>
        <Image src="/2.png" width={15} height={15} alt="instagram" className={styles.icon}/>
        <Image src="/3.png" width={15} height={15} alt="whatsapp" className={styles.icon}/>
    </div>
    </div>

  )
}

export default Footer
