import React from 'react'
import { useParams } from 'react-router-dom'
import { foodCategories } from '../assets/utils/foodCategories';
import ItemCard from '../components/ItemCard';

function Category() {

    const { categoryId } = useParams();
    const categorySelected = foodCategories.filter((category) => category.id === parseInt(categoryId))

  return (
    <div className="container mx-auto px-4">
        <h2 className="font-bold text-4xl text-gray-700 my-5 text-center">{categorySelected[0].name}</h2>
        <div className='grid grid-cols-4 gap-4 my-4 mt-10'>
            {categorySelected[0].items.map((item) => <ItemCard key={item.id} item={item} />)}
        </div>
    </div>
  )
}

export default Category
