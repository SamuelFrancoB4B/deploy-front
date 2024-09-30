import Link from "next/link"
import styles from "./NavBar.module.css"
import Image from "next/image"
import LoggedButtons from "../LoggedButtons/LoggedButtons"

const NavBar = () => {
  return (
    <div className={ `${styles.navBg} py-4 z-20`}>
      <div className={`container flex justify-between`}>
        <div>
          <Link href="/"><Image src="/logo.png" alt="logo" width={60} height={60} className=" transition-transform duration-300 hover:scale-95 w-auto h-auto"/></Link>
        </div>
        <div className="flex flex-row justify-around items-center">
          <ul className="text-sm inline-flex" style={{ color:'var(--primary-color)'}}>
            <Link href="/products"><li className={styles.itemsnav}> Products</li></Link>
            <Link href="/dashboard"><li className={styles.itemsnav}>My account</li></Link>
            <Link href="/about-us"><li className={styles.itemsnav}>About us</li></Link>
          </ul>
        </div>
        <LoggedButtons/>
      </div>
    </div>
  )
}

export default NavBar