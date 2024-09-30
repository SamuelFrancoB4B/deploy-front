import Image from "next/image"
import styles from "./aboutUs.module.css"

const page = () => {
  return (
    <div className="container">
      <div className="padding-section">
        <h1>About Us</h1>
        <div className="grid grid-cols-2 my-24 justify-between items-center">
        <Image src="/imagen1.png" alt="Foto Samuel" width={400} height={400} className={styles.img}/>
<p>This is a project created by Samuel Franco Zapata for Henry App, in order to successfully pass 
  Module 4 of the Fullstack web development course, this site has the ability to store the users session,
   the products they add to the cart, and the orders they generate. It is the initial basis for any E-commerce.</p> 

        </div>
      </div>
    </div>
  )
}

export default page