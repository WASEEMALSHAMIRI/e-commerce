import React from 'react'

import Main from '../components/Main'
import Products from '../components/Products'


export default function Home() {
  return (
    <div>
      <Main />
      <div className='px-4'>
        <p style={{ fontSize: "55px" }} className='text-center mt-5'>Latest Products</p>
        <h1 className='border border-dark me-2 '> </h1></div>
        <Products/>
    </div>

  )
}
