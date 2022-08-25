import React from 'react'
import ProductCard from './ProductCard'

const CategoryPreview = ({products}) => {
  return (
    <>
        {
            products
                .filter((_,idx)=>idx<4)
                .map((product)=>(
                    <ProductCard key={product.id} product={product}/>
                ))
        }
    </>
  )
}

export default CategoryPreview