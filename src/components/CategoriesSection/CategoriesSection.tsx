import categoriesMock from '@/mocks/categories'
import CategoriesCard from '../CategoriesCard/CategoriesCard'
import styles from './CategoriesSection.module.css'

const CategoriesSection = () => {

    const FavCategories = categoriesMock.slice(0, 4)

    return (
        <div className='container'>
            <div className='padding-section'>
                <h2 className='mb-14'>Categories</h2>
                <div className='grid grid-cols-1 gap-4 w-full md:grid-cols-2 '>
                    {
                        FavCategories.map((C, i) => (
                            <CategoriesCard key={i} categorie={C} />
                        ))
                    }

                </div>
            </div>
        </div>
    )
}

export default CategoriesSection