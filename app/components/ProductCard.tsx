// There will be a runtime error because this is a server component.
// Server components cannot maintain state or listen to browser events, 
// so having a button will lead to an error.
// One way to fix is to make this entire component a client component.
// To do this, do this: 'use client'; Tell
//'use client';
import React from 'react'
import AddToCart from './AddToCart'

const ProductCard = () => {
  return (
    <div>
        {/*A better way is to only move this button into the client.
            Here, there is going to be a hole or slot where react will inject our
            client component.
        */}
        
        <AddToCart/>
    </div>
  )
}

export default ProductCard