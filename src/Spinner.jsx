import React from 'react'
import { images } from './constants';
const Spinner = () => {
  return (
   <>
      <div className="text-center">
          <img className='my-3' style={{width:'5rem', borderRadius:'1rem'}} src={images.Loading} alt="loading"/>
      </div>
   </>
  )
}

export default Spinner