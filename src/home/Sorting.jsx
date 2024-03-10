import React from 'react'

const Sorting = () => {
  return (
    <div className='bg-gray-100 my-5 p-5 flex items-center justify-end'>
     <select className='bg-white py-3 px-5'>
        <option disabled value="">Seçiniz</option>
        <option value="inc">Artan</option>
        <option value="dec">Azalan</option>
     </select>
    </div>
  )
}

export default Sorting
