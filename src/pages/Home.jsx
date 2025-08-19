import React from 'react'
import { foodCategories } from '../assets/utils/foodCategories'

function Home() {
  return (
    <div>
        <h1>Food Cart</h1>
        <div>
            {foodCategories.map((category) => <>
      <h2 key={category.id}>{category.name}</h2>
      {category.items.map((item) => <div>
        <img src={item.img} width="300px" height="300px" />
        <p key={item.id}>{item.name} - ₹{item.price}</p>
      </div>)}
      </>)}
        </div>
    </div>
  )
}

export default Home
