import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import CategoryPreview from '../Components/CategoryPreview'
import { CategoriesContext } from '../context/categories.context'

const CategoriesPreview = () => {
    const { categoriesMap } = useContext(CategoriesContext)
    console.log(Object.keys(categoriesMap))
    return (
        <div className='max-w-[1640px] mx-auto'>
            {
                Object.keys(categoriesMap).map(title =>
                    <div key={title} className='mt-5 bg-base-100 p-5 space-y-3'>
                        <Link to={title}>
                            <h2 className='text-3xl font-bold text-black block capitalize'>{title}</h2>
                        </Link>

                        <div className='grid grid-cols-[repeat(4,auto)] justify-around gap-y-5 rounded-xl'>
                            {/* {categoriesMap[title].map(product => (
                                <ProductCard key={product.id} product={product} />
                            ))} */}
                            <CategoryPreview products={categoriesMap[title]} />
                        </div>
                    </div>
                )
            }

        </div>
    )
}

export default CategoriesPreview