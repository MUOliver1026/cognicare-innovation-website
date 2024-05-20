import React from 'react'
import Breadcrumbs from '../components/Breadcrumbs';
import MedicinePic from '../assets/2.png';

export default function HitDiscoveryOptimization() {
  return (
    <main>
      <div className='bg-regal-purple px-4 py-2 text-white flex items-center justify-center text-2xl h-16'>
      Hit Discovery & Optimization
      </div>
      <Breadcrumbs />
      <div className='grid grid-cols-2 gap-4 py-4 px-24'>
        <div className='grid-1 bg-white p-4 my-auto pl-16'>
          <img src={MedicinePic} alt='medicine' className='h-80 flex flex-col justify-center items-center' />
          <p className='text-gray-500 text-left mt-4'>Figure. 115-7c Optimization Compound</p>
        </div>

        <div className='grid-2 bg-white p-4'>
          <h2 className='text-2xl font-bold text-center py-2'>
            115-7c Optimization Compound
          </h2>
          <p className='leading-7'>
          Using high-throughput screening (HTS), one of the most common techniques in the drug discovery process, with screening and identifying potential hits for HSP70 activators in HeLa cells from specific compound libraries (database: PubChem AID 1203) with 196,225 tested, resulting in potential activators for HSP70 (ML346 and 115-7c).<br/><br/>
          After comparing the physiochemical/drug-like properties for ML346 and 115-7c, the final choice for optimised hit is 115-7c.<br/><br/>
          The modification process of 115-7c is replacing dichlorobenzene with methyl, changing the carboxyl group to methyl, and attaching methyl to the top of a nitrogen atom that is not attached to a hydrogen atom. Compared to the parent compound, our new compound shows better drug-like properties with lower molecular weight, better log P value, the ability to cross the brain-blood-barrier (BBB) and obey the Lipinski RO5, leading to a promising oral tablet for treating Alzheimer’s Disease.<br/><br/>
          </p>
        </div>
      </div>
    </main>
  )
}
