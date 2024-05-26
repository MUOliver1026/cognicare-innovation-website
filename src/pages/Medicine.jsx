import React from 'react'
import Breadcrumbs from '../components/Breadcrumbs';

export default function Medicine() {
  return (
    <main>
      <div className='bg-regal-purple font-heading2 tracking-wide px-4 py-2 text-white flex items-center justify-center text-2xl h-16'>
        New Medicine
      </div>
      <Breadcrumbs />
      <div className='grid grid-cols-2 gap-4 p-4 px-24'>
        <div className='grid-1 bg-white p-4'>
          <img src="https://www.lubrizol.com/-/media/Lubrizol/Health/Images/Blog-images/Mucinex-in-hand.jpg" alt='medicine' className='h-80' />
        </div>

        <div className='grid-2 bg-white p-4'>
          <h2 className='text-2xl font-bold font-heading2 tracking-wide text-center py-2'>
            Cognivita<sup>©</sup>
          </h2>
          <p>
            Cognivita<sup>©</sup> is a novel medication for Alzheimer's disease, designed to reduce amyloid-beta plaques and tau tangles abnormal accumulation. It has demonstrated neuroprotective effects and significant improvements in memory and daily functioning in clinical trials.<br /><br />

            Cognivita<sup>©</sup> is administered orally with well-tolerated and mild side effects, making it easy to use and better patient compliance.<br /><br />

            This innovative treatment offers hope for better management and improved quality of life for Alzheimer's patients.<br /><br />
          </p>
        </div>
      </div>
    </main>
  )
}
