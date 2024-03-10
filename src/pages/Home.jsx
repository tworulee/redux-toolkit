import React, { useState } from 'react'
import SlickComp from './../home/SlickComp';
import Sorting from '../home/Sorting';
import Category from '../home/Category';
import Products from '../home/Products';

const Home = () => {
  const [sort,setSort] = useState("")
  const [category,setCategory] = useState("")

  return (
    <div>
      <SlickComp/>
      <Sorting/>
      <div className='flex'>
        <Category/>
        <Products/>
      </div>
    </div>
  )
}

export default Home
