import React from 'react'

function Product() {
  return (
    <div className='bg-slate-100 flex flex-col w-80 md:w-40 p-2 box-shadow gap-2 font-text1'>
        <div className='h-full w-full'>
            <img className='object-cover' src="https://www.transparentpng.com/thumb/laptop/9oRuDc-refreshed-pavilion-gaming-series-launching-next-month.png" alt="laptop" />
        </div>
        <hr />
        <p className='text-orange-600'>$1999</p>
        <p>MSI Modern-14 ryz...</p>
        <button className='rounded-sm bg-orange-600 text-center text-white'>Add To Cart</button>
    </div>
  )
}

export default Product