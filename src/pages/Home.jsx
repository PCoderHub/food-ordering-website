import React from 'react'
import { foodCategories } from '../assets/utils/foodCategories'
import Header from '../components/Header'
import Footer from '../components/Footer'

function Home() {
  return (
    <>
        <Header />
        <main className='container mx-auto px-4'>
            <h2 className='font-bold text-4xl text-gray-700 my-5' >Featured</h2>
            <div className='grid grid-cols-4 gap-4 mb-2'>
                {foodCategories.map((category) => <div key={category.id} className="h-80 p-1 border rounded-md border-solid border-black hover:scale-102">
                    <img src={category.img} className="w-full h-2/3 object-cover rounded-sm" />
                    <p className='text-center mt-10 font-bold'>{category.name}</p>
            </div>)}
            </div>
        </main>
        <Footer />
    </>
  )
}

export default Home
