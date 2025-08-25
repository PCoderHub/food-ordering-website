import React from 'react'
import CartItem from './CartItem'

function CartItems({items}) {
  return (
    <div className='w-full overflow-y-auto'>
      {items.map((item) => <CartItem key={item.id} item={item} />)}
      <p className='text-center'>Total: </p>
    </div>
  )
}

export default CartItems
