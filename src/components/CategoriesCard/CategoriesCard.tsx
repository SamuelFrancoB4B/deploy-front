import ICategory from "@/interfaces/Icategories"
import styles from "./CategoriesCard.module.css"
import categoriesMock from "@/mocks/categories"
import Image from "next/image"

interface CategorieProps {
  categorie: ICategory
}

const CategoriesCard = ({categorie}:CategorieProps) => {
  return (
    <div className={styles.categoryCard}>
      <div><h3>{categorie.name}</h3></div>
      <div><Image src="/HeroPhoto.png" alt="imagen" width={100} height={100}/></div>

    </div>

  )
}

export default CategoriesCard