import Link from "next/link"
import Button from "../Button/Button"

const NotLoggedButtons = () => {
  return (
    <div className="flex flex-row justify-around items-center">
        <Link href="/login"><button className=" flex text-sm px-10 py-[7px] text-white rounded-[20px]
cursor-pointer transition-all duration-300 hover:scale-90 active:scale-105 bg-transparent">Login</button></Link>
    <Link href="/register"><button className=" flex text-sm px-10 py-[7px] text-white rounded-[20px]
cursor-pointer transition-all duration-300 hover:scale-90 active:scale-105 bg-tertiary">Register</button></Link>
    </div>
  )
}

export default NotLoggedButtons