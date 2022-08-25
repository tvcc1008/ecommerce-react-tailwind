import React from 'react'
import CategoryItem from './CategoryItem'

const Directory = ({categories}) => {
  return (
    <div className='grid grid-cols-[auto,auto,auto] gap-x-5 gap-y-8 justify-between mx-auto p-5'>
      {categories.map((categorie) => (
        <CategoryItem key={categorie.id} category={categorie} />
      ))}
    </div>
  )
}

export default Directory