import Link from "next/link"
import styles from "./Footer.module.css"
import Image from "next/image"

const Footer = () => {
  return (
    <footer className={styles.footer}>
    <div className={`container ${styles.footerSpace}`}>
    <Link href="/"><Image src="/logo.png" alt="logo" width={60} height={60} className="transition-transform duration-300 hover:scale-95 w-auto h-auto"/></Link>
      <p className={styles.text}>Creado por Samuel Franco Zapata 🍃</p>
    </div>
  </footer>
  )
}

export default Footer