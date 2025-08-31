import React from 'react'
import { useParams } from 'react-router-dom'
import ItemCard from '../components/ItemCard';
import { useSelector } from 'react-redux';

function Category() {

  const foodCategories = useSelector((state) => state.inventory.inventory);

    const { categoryId } = useParams();
    const categorySelected = foodCategories.filter((category) => category.id === parseInt(categoryId))
    console.log(categorySelected)

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
