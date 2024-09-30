"use client"

import Link from "next/link"
import Button from "../Button/Button"
import styles from "./LoginForm.module.css"
import { useContext, useEffect, useState } from "react"
import { validateLogin } from "@/helpers/validateLogin"
import { LoginForm as ILogin } from "@/interfaces/IForms"
import { loginService } from "@/services/authService"
import { useRouter } from "next/navigation"
import { AuthContext } from "@/contexts/authContext"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const LoginForm = () => {
  const {setUser} = useContext(AuthContext);
  const notifyLoginTrue = () => toast.success("Login successful!", {autoClose: 3000 });
  const notifyLoginFalse = () => toast.error("Login failed! Please check your credentials.", {autoClose: 3000 });
  const router = useRouter();
  const initialData: ILogin = { email: "", password: "" };
  const initialDirty = { email: false, password: false };
  const [data, setData] = useState(initialData);
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({})
  const [dirty, setDirty] = useState(initialDirty);

  const handleSubmit = async () => {
    const apiurl = process.env.NEXT_PUBLIC_API_URL;
    const response = await loginService(apiurl + "/users/login", data)
    if (response.login) {
      setUser(response)
      router.back();
      notifyLoginTrue()
    } else {
      notifyLoginFalse()
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setDirty({ ...dirty, [e.target.name]: true })
  }


  useEffect(() => {
    const validationErrors = validateLogin(data)
    setErrors(validationErrors)
  }, [data])

  return (
    <form className="flex flex-col gap-4 w-full md:w-1/2 justify-center items-center" onSubmit={handleSubmit}>
      <p className="text-sm">Enter your username and password to access</p>
      <input className={styles.input}
        type="text"
        name="email"
        placeholder="Email"
        value={data.email}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {dirty.email ? <p className="text-red-500 text-sm">{errors.email}</p> : null}
      <input className={styles.input}
        type="password"
        name="password"
        value={data.password}
        placeholder="Password"
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {dirty.password ? <p className="text-red-500 text-sm">{errors.password}</p> : null}

      <Button className={styles.submitButton}
        onClick={handleSubmit}
      >Submit</Button>
      <Link href="/register"><p className=" pt-12 text-sm font-bold underline text-secondary hover:text-tertiary transition-all">Dont have an account? Register</p></Link>
    </form>

  )
}

export default LoginForm