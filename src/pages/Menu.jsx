import React from 'react'
import { foodCategories } from '../assets/utils/foodCategories'
import ItemCard from '../components/ItemCard'

function Menu() {
  return (
    <div className="container mx-auto px-4 grid grid-cols-4 gap-4 my-4 mt-10">
      {foodCategories.map((category) => category.items.map((item) => <ItemCard key={item.id} item={item} />))}
    </div>
  )
}

export default Menu
