// There will be a runtime error because this is a server component.
// Server components cannot maintain state or listen to browser events, 
// so having a button will lead to an error.
// One way to fix is to make this entire component a client component.
// To do this, do this: 'use client'; Tell
//'use client';
import React from 'react'
import AddToCart from './AddToCart'

// This is one way to do it. I can also use tailwindCSS.
// import styles from './ProductCard.module.css'

const ProductCard = () => {
  return (
    // <div className = "p-5 my-5 bg-sky-400 text-white text-xl hover:bg-sky-500">
    //     {/* A better way is to only move this button into the client.
    //         Here, there is going to be a hole or slot where react will inject our
    //         client component. */}
    //     <AddToCart/>
    // </div>
    <div>
      <AddToCart/>
    </div>
  )
}

export default ProductCard
