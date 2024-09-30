import Button from '@/components/Button/Button';
import BuyButton from '@/components/BuyButton/BuyButton';
import { getProductById } from '@/services/productsService';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import React from 'react'

  const ProductDetail = async ({params} : {params: {id: string}}) =>{
    const url = `${process.env.API_URL}/products`;
    const product = await getProductById(url, params.id)
    if (product === undefined) { notFound()} 
    
  return (
    <div className="container">
      <div className='flex my-28'>
        <div className='w-1/2'>
          <Image src={product.image} alt={product.name} width={400} height={400} className='rounded-xl' /></div>
        <div className='w-1/2'>
          <h1>{product.name}</h1>
          <h3>{product.price}</h3>
          <h4> In stock: {product.stock}</h4>
          <p className='my-8'>{product.description}</p>
          <BuyButton product={product}/>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail;