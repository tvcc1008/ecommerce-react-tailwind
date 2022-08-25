import React from 'react'
import { useNavigate } from 'react-router-dom'

const CategoryItem = ({ category }) => {
  const navigate = useNavigate()
  const { imageUrl, title } = category
  const handleClick = () =>{
    navigate(`/shop/${title}`)
  }
  return (
    <div className='card w-auto bg-base-100 shadow-xl image-full hover:scale-105 duration-200'>
      <figure>
        <img className='w-full object-cover' src={imageUrl} alt={title} />
      </figure>
      <div className='card-body'>
        <h2 className='card-title uppercase'>{title}</h2>
        <div className="card-actions justify-center my-auto">
          <button className="btn glass px-16" onClick={handleClick}>
            {/* <Link to=''>
              Buy Now
            </Link> */}
            Buy Now
          </button>
        </div>
      </div>
    </div>
  )
}

export default CategoryItem