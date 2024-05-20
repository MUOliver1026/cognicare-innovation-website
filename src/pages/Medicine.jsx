import React from 'react'
import Breadcrumbs from '../components/Breadcrumbs';
import MedicinePic from '../assets/2.png';

export default function Medicine() {
  return (
    <main>
      <div className='bg-regal-purple font-heading2 tracking-wide px-4 py-2 text-white flex items-center justify-center text-2xl h-16'>
        New Medicine
      </div>
      <Breadcrumbs />
      <div className='grid grid-cols-2 gap-4 p-4 px-24'>
        <div className='grid-1 bg-white p-4'>
          <img src={MedicinePic} alt='medicine' className='h-80 ml-20' />
        </div>

        <div className='grid-2 bg-white p-4'>
          <h2 className='text-2xl font-bold font-heading2 tracking-wide text-center py-2'>
            115-7c Optimization Compound
          </h2>
          <p>
            The identification of a target is the first step in the drug discovery process. A target is a molecule or structure in the body that the drug is designed to interact with. The target is usually a protein that is involved in a disease process. The drug is designed to interact with the target in a way that stops or slows down the disease process.
          </p>
        </div>
      </div>
    </main>
  )
}
