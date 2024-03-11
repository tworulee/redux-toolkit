import React, { useState } from 'react'

const DetailComp = ({productDetail}) => {

    const[quantity,setQuantity] = useState(0)

    const decrement =()=>{
        if(quantity>0) setQuantity(quantity-1)
    }
    const increment =()=>{
        if(quantity<productDetail?.rating?.count) setQuantity(quantity+1)
    }

  return (
    <div className='flex gap-10 my-10'>
        <img  className="w-[700px] h-[500px] object-cover" src={productDetail?.image} alt="" />
        <div>
            <div className="text-4xl font-bold">{productDetail?.title}</div>
            <div className="text-2xl my-2">{productDetail?.description}</div>
            <div className="text-xl my-2 text-red-500">Rating: {productDetail?.rating?.rate}</div>
            <div className="text-xl my-2 text-red-500">Count: {productDetail?.rating?.count}</div>
            <div className="text-5xl font-bold">{productDetail?.price} <span className='text-sm'>TL</span> </div>
            <div className='flex items-center gap-5 my-4'>
                <div onClick={decrement} className='text-4xl cursor-pointer'>-</div>
                <input className='w-12 text-center text-4xl font-bold' type="text" value={quantity} />
                <div onClick={increment} className='text-4xl cursor-pointer'>+</div>
            </div>
            <div className="my-4 border w-[200px] text-2xl rounded-md bg-gray-200 cursor-pointer h-16 flex items-center justify-center ">Sepete ekle</div>
        </div>
    </div>
  )
}

export default DetailComp
