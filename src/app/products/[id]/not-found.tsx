import Button from '@/components/Button/Button'
import React from 'react'

const notfound = () => {
  return (
    <div className="container">
    <div className="padding-section">
      <h1 className=" pt-20 text-8xl">404</h1>
        <h3>Product Not Found</h3>
        <Button className="mt-40" variant="tertiary" href="/">Back Home</Button>

    </div>
  </div>
  )
}

export default notfound