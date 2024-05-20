import React from 'react'
import Breadcrumbs from '../components/Breadcrumbs';

export default function DiseaseTarget() {
  return (
    <main>
      <div className='bg-regal-purple px-4 py-2 text-white flex items-center justify-center text-2xl h-16'>
        Disease & Target
      </div>
      <Breadcrumbs />
      <div className='grid grid-cols-2 py-4 px-16'>
        <div className='grid-1 bg-white py-4 px-8'>
          <h2 className='text-2xl font-bold text-center py-2'>
            About Alzheimer’s Disease
          </h2>
          <p>
            Alzheimer's disease is a progressive disorder that causes brain cells to waste away (degenerate) and die. Alzheimer's disease is the most common cause of dementia — a continuous decline in thinking, behavioral and social skills that disrupts a person's ability to function independently.
          </p>
        </div>

        <div className='grid-2 bg-white py-4 px-8'>
          <h2 className='text-2xl font-bold text-center py-2'>
            About the Novel Target – HSP70
          </h2>
          <p>
            The identification of a target is the first step in the drug discovery process. A target is a molecule or structure in the body that the drug is designed to interact with. The target is usually a protein that is involved in a disease process. The drug is designed to interact with the target in a way that stops or slows down the disease process.
          </p>
        </div>
      </div>
    </main>
  )
}
