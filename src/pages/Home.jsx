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
      <Sorting setSort={setSort}/>
      <div className='flex'>
        <Category setCategory={setCategory}/>
        <Products category={category} sort={sort} />
      </div>
    </div>
  )
}

export default Home
