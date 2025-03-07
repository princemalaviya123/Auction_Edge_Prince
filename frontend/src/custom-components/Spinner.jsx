
import React from 'react'
import {RotateLoader} from "react-spinners";


const Spinner = () => {
  return (
    <div className='w-full min-h-[600px] flex justify-center items-center'>
      <RotateLoader size={130} color='#D6482B'/>
    </div>
  )
}

export default Spinner;