import LoginForm from '@/components/LoginForm/LoginForm'
import React from 'react'

const login = () => {
  return (
    <div className="container">
    <div className="padding-section">
      <h1 className="pb-12">Login</h1>
      <LoginForm/>
    </div>
  </div>
  )
}

export default login