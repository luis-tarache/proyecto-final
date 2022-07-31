import React, {useEffect, useState} from 'react'
import {FaStar} from 'react-icons/fa'

const StarRating = ({item}) => {


  const [rating, setRating] = useState('')
  const [hover, setHover] = useState('')

  

useEffect(()=> {
  const data = localStorage.getItem(item.char_id)
  if (data) {
    setRating(data)
  }
},[item.char_id])

useEffect(()=> {
  localStorage.setItem(item.char_id, rating)
})

  return (
    <div className='rating'>
      
      {[...Array(5)].map((star, i) => {

        const ratingValue = i+1

        return (
          <label key={ratingValue}>
            <input 
            type='radio' 
            name='rating' 
            value={ratingValue}
            onClick={()=>setRating(ratingValue)} 
            />
            <FaStar 
            className='star' 
            size={30}
            color={ratingValue <= (hover || rating) ? '#ffc107' : '#e4e5e9'}
            onMouseEnter={()=> setHover(ratingValue)} 
            onMouseLeave={()=> setHover(null)}
            />
          </label>
          )
      })}
    </div>
  )
}

export default StarRating