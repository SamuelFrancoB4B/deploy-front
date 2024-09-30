import IProduct from "@/interfaces/Iproduct"
import styles from './Card.module.css'
import Image from "next/image"
import Link from "next/link"


interface ProductProps {
    product: IProduct
}

const Card = ({product}: ProductProps) => {
  return (
    <Link href={`/products/${product.id}`}>
    <div className="p-6 rounded-xl shadow-xl transition-all duration-300 hover:shadow-2xl relative">
      <button className="absolute top-4 right-4 w-10 h-10 bg-[--tertiary-color] rounded-full shadow-lg flex items-center justify-center z-50">
      <Image src="/info.png" alt="cart Icon" width={25} height={25} className="w-auto h-auto"/>
    </button>
        <Image src={product.image} alt={product.name} className="rounded-md" width={300} height={300}/>
        <h3 className={styles.title}>{product.name}</h3>
        <h3>${product.price}</h3>
        <p className={styles.description}>{product.description}</p>
        

    </div>
    </Link>
  )
}
export default Card 