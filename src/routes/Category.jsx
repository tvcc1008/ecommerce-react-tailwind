import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductCard from '../Components/ProductCard'
import { CategoriesContext } from '../context/categories.context'

const Category = () => {
    const { category } = useParams()
    const { categoriesMap } = useContext(CategoriesContext)
    // const products = categoriesMap[category]
    const [products, setProducts] = useState(categoriesMap[category])

    useEffect(() => {
        setProducts(categoriesMap[category])
    }, [category, categoriesMap])


    return (
        <div className='max-w-[1640px] mx-auto'>
            <div className='mt-5 bg-base-100 p-5 space-y-3'>
                <h2 className='text-3xl font-bold text-black block capitalize'>{category}</h2>
                <div className='grid grid-cols-[repeat(4,auto)] justify-around gap-y-5 rounded-xl'>
                    {products && products.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>



        </div>
    )
}

export default Category