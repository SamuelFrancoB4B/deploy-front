"use client"

import Link from "next/link"
import Button from "../Button/Button"
import styles from "./RegisterForm.module.css"
import React, { useEffect, useState } from 'react'
import { validateRegister } from "@/helpers/validateRegister"
import { RegisterForm as IRegister } from "@/interfaces/IForms"
import { registerService } from "@/services/authService"
import { useRouter } from "next/navigation"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RegisterForm = () => {
  const notifyRegisterTrue = () => toast.success("Register successful!", {autoClose: 3000 });
  const notifyRegisterFalse = () => toast.error("Register failed! Please check your information", {autoClose: 3000 });
  const router = useRouter();
  const initialData: IRegister = { name: "", address: "", phone: "", email: "", password: "" };
  const initialDirty = { name: false, address: false, phone: false, email: false, password: false };
  const [data, setData] = useState(initialData);
  const [errors, setErrors] = useState<{ email?: string; password?: string, name?: string, phone?: string, address?: string}>({})
  const [dirty, setDirty] = useState(initialDirty);

  const handleSubmit = async () => {
    const apiurl = process.env.NEXT_PUBLIC_API_URL;
    const response = await registerService(apiurl + "/users/register", data);
    if (!response.message) {
      notifyRegisterTrue();
      router.back();
    } else {
      notifyRegisterFalse()
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setDirty({ ...dirty, [e.target.name]: true })
  }


  useEffect(() => {
    const validationErrors = validateRegister(data)
    setErrors(validationErrors)
  }, [data])


  return (
    <form className="flex flex-col gap-4 w-full md:w-1/2 justify-center items-center">
      <p className="text-sm">Enter your username and password to access</p>
      <input className={styles.input}
        type="text"
        name="name"
        placeholder=" Full name"
        value={data.name}
        onChange={handleChange}
        onBlur={handleBlur}
      />
       {dirty.name ? <p className="text-red-500 text-sm">{errors.name}</p> : null}
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
        type="text"
        name="address"
        placeholder="Address"
        value={data.address}
        onChange={handleChange}
        onBlur={handleBlur}
      />
       {dirty.address ? <p className="text-red-500 text-sm">{errors.address}</p> : null}
        <input className={styles.input}
        type="text"
        name="phone"
        placeholder="Phone Number"
        value={data.phone}
        onChange={handleChange}
        onBlur={handleBlur}
      />
       {dirty.phone ? <p className="text-red-500 text-sm">{errors.phone}</p> : null}
        <input className={styles.input}
        type="password"
        name="password"
        placeholder="Password"
        value={data.password}
        onChange={handleChange}
        onBlur={handleBlur}
      />
       {dirty.password ? <p className="text-red-500 text-sm">{errors.password}</p> : null}
      <Button className={styles.submitButton}
      onClick={handleSubmit} 
      variant="tertiary"
      >Submit</Button>
      <Link href="/login"><p className=" pt-12 text-sm font-bold underline text-secondary hover:text-tertiary transition-all">You have an account? Login</p></Link>
    </form>
  )
}

export default RegisterForm