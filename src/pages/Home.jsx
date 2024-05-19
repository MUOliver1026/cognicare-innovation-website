import React from 'react'
import homePic from '../assets/1.png'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className='grid grid-cols-2'>
      <div className='grid-1 flex flex-col justify-center items-center'>
        <h2 className='flex justify-center items-center py-4 text-2xl'>
          Our researchers are focused on
        </h2>
        <h1 className='flex justify-center items-center text-center py-4 text-4xl'>
          Developing Novel Medicines on Alzheimer's Disease
        </h1>
        <h3 className='flex justify-center items-center text-center py-4 mx-32 text-sm'>
          Our mission is to build a healthier tomorrow for patientswith Alzheimer's Disease
        </h3>
        <button className='flex justify-center items-center py-4 px-8 bg-blue-500 text-white rounded-lg'>
          <Link to='/medicine'>Discover Now</Link>
        </button>
      </div>
      <div className='grid-2'>
        <img src={homePic} alt='home' />
      </div>
    </div>
    
  )
}
