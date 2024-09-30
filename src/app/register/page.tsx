import RegisterForm from '@/components/RegisterForm/RegisterForm'
import React from 'react'

const register = () => {
  return (
    <div className="container">
    <div className="padding-section">
      <h1 className="pb-12">Register</h1>
      <RegisterForm/>
    </div>
  </div>
  )
}

export default register