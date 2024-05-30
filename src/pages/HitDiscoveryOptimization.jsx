import React from 'react'
import Breadcrumbs from '../components/Breadcrumbs';
import MedicinePic from '../assets/2.png';

export default function HitDiscoveryOptimization() {
  return (
    <main>
      <div className='bg-regal-purple font-heading2 tracking-wide px-4 py-2 text-white flex items-center justify-center text-2xl h-16'>
        Hit Discovery & Optimization
      </div>
      <Breadcrumbs />
      <div className='grid grid-cols-2 gap-4 py-4 px-24'>
        <div className='grid-1 bg-white p-4 my-auto pl-16'>
          <img src={MedicinePic} alt='medicine' className='h-80 flex flex-col justify-center items-center' />
          <p className='text-gray-500 text-left mt-4'>Figure. 115-7c Optimization Compound</p>
        </div>

        <div className='grid-2 bg-white p-4'>
          <h2 className='text-2xl font-heading2 tracking-wide font-bold text-center py-2'>
            115-7c Optimization Compound
          </h2>
          <p className='leading-7'>
          Using high-throughput screening (HTS), one of the most common techniques in the drug discovery process
          <a href='https://www.mdpi.com/1422-0067/13/1/427' target="_blank"><sup>1</sup></a>
          , with screening and identifying potential hits for HSP70 activators in HeLa cells from specific compound libraries (database: PubChem AID 1203) with 196,225 tested, resulting in potential activators for HSP70 (ML346 and 115-7c).
          <a href='https://www.ncbi.nlm.nih.gov/books/NBK148494/' target="_blank"><sup>2</sup></a><br/><br/>
          After comparing the physiochemical/drug-like properties for ML346 and 115-7c, the final choice for optimised hit is 115-7c. (Table 1) (Results were generated from&nbsp;
          <a href='http://www.swissadme.ch/index.php' className='underline text-blue-600 hover:text-blue-800 visited:text-purple-600' target='_blank'>SwisseADME</a>
          )<br/><br/>
            The modification process of 115-7c is replacing dichlorobenzene with methyl, changing the carboxyl group to methyl, and attaching methyl to the top of a nitrogen atom that is not attached to a hydrogen atom. Compared to the parent compound, our new compound shows better drug-like properties with lower molecular weight, better log P value, the ability to cross the brain-blood-barrier (BBB) and obey the Lipinski RO5, leading to a promising oral tablet for treating Alzheimer’s Disease.<br/><br/>
          </p>
        </div>
      </div>

      <div className='overflow-x-auto'>
        <h2 className='font-heading2 tracking-wide text-center py-2'>
          Table 1. The physiochemical/drug-like properties for ML346, 115-7c and 115-7c optimisation(Cognivita<sup>©</sup>).
          </h2>
            <table className='mx-auto bg-white'>
              <thead>
                <tr>
                  <th className='py-2 px-4 border-b border-gray-200 bg-gray-100'>Property</th>
                  <th className='py-2 px-4 border-b border-gray-200 bg-gray-100'>ML346</th>
                  <th className='py-2 px-4 border-b border-gray-200 bg-gray-100'>115-7c</th>
                  <th className='py-2 px-4 border-b border-gray-200 bg-gray-100'>115-7c Optimisation</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='py-2 px-4 border-b border-gray-200'>Molecular Weight</td>
                  <td className='py-2 px-4 border-b border-gray-200'>272.26 g/mol</td>
                  <td className='py-2 px-4 border-b border-gray-200'>477.34 g/mol</td>
                  <td className='py-2 px-4 border-b border-gray-200'>330.42 g/mol</td>
                </tr>
                <tr>
                  <td className='py-2 px-4 border-b border-gray-200'>Log P</td>
                  <td className='py-2 px-4 border-b border-gray-200'>1.62</td>
                  <td className='py-2 px-4 border-b border-gray-200'>3.14</td>
                  <td className='py-2 px-4 border-b border-gray-200'>3.44</td>
                </tr>
                <tr>
                  <td className='py-2 px-4 border-b border-gray-200'>Molar Refractivity</td>
                  <td className='py-2 px-4 border-b border-gray-200'>78.89</td>
                  <td className='py-2 px-4 border-b border-gray-200'>128.57</td>
                  <td className='py-2 px-4 border-b border-gray-200'>101.91</td>
                </tr>
                <tr>
                  <td className='py-2 px-4 border-b border-gray-200'>Total Number of Atoms</td>
                  <td className='py-2 px-4 border-b border-gray-200'>32</td>
                  <td className='py-2 px-4 border-b border-gray-200'>54</td>
                  <td className='py-2 px-4 border-b border-gray-200'>50</td>
                </tr>
                <tr>
                  <td className='py-2 px-4 border-b border-gray-200'>Number of H-bond Donors</td>
                  <td className='py-2 px-4 border-b border-gray-200'>2</td>
                  <td className='py-2 px-4 border-b border-gray-200'>2</td>
                  <td className='py-2 px-4 border-b border-gray-200'>1</td>
                </tr>
                <tr>
                  <td className='py-2 px-4 border-b border-gray-200'>Number of H-bond Acceptors</td>
                  <td className='py-2 px-4 border-b border-gray-200'>4</td>
                  <td className='py-2 px-4 border-b border-gray-200'>5</td>
                  <td className='py-2 px-4 border-b border-gray-200'>3</td>
                </tr>
                <tr>
                  <td className='py-2 px-4 border-b border-gray-200'>Number of Rotatable Bonds</td>
                  <td className='py-2 px-4 border-b border-gray-200'>3</td>
                  <td className='py-2 px-4 border-b border-gray-200'>9</td>
                  <td className='py-2 px-4 border-b border-gray-200'>7</td>
                </tr>
                <tr>
                  <td className='py-2 px-4 border-b border-gray-200'>Number of Rings</td>
                  <td className='py-2 px-4 border-b border-gray-200'>2</td>
                  <td className='py-2 px-4 border-b border-gray-200'>3</td>
                  <td className='py-2 px-4 border-b border-gray-200'>2</td>
                </tr>
                <tr>
                  <td className='py-2 px-4 border-b border-gray-200'>Total PSA</td>
                  <td className='py-2 px-4 border-b border-gray-200'>84.50 Å<sup>2</sup></td>
                  <td className='py-2 px-4 border-b border-gray-200'>95.94 Å<sup>2</sup></td>
                  <td className='py-2 px-4 border-b border-gray-200'>58.64 Å<sup>2</sup></td>
                </tr>
                <tr>
                  <td className='py-2 px-4 border-b border-gray-200'>Bioavailability</td>
                  <td className='py-2 px-4 border-b border-gray-200'>0.55</td>
                  <td className='py-2 px-4 border-b border-gray-200'>0.56</td>
                  <td className='py-2 px-4 border-b border-gray-200'>0.55</td>
                </tr>
                <tr>
                  <td className='py-2 px-4 border-b border-gray-200'>Water Solubility</td>
                  <td className='py-2 px-4 border-b border-gray-200'>Soluble</td>
                  <td className='py-2 px-4 border-b border-gray-200'>Moderately Soluble</td>
                  <td className='py-2 px-4 border-b border-gray-200'>Soluble</td>
                </tr>
                <tr>
                  <td className='py-2 px-4 border-b border-gray-200'>GI Absorption</td>
                  <td className='py-2 px-4 border-b border-gray-200'>High</td>
                  <td className='py-2 px-4 border-b border-gray-200'>High</td>
                  <td className='py-2 px-4 border-b border-gray-200'>High</td>
                </tr>
                <tr>
                  <td className='py-2 px-4 border-b border-gray-200'>Blood Brain Barrier (BBB) Permeable</td>
                  <td className='py-2 px-4 border-b border-gray-200'>No</td>
                  <td className='py-2 px-4 border-b border-gray-200'>No</td>
                  <td className='py-2 px-4 border-b border-gray-200'>Yes</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className='bg-white py-8 flex flex-col justify-center items-center'>
            <h2 className='text-2xl font-heading2 tracking-wide font-bold text-center py-2'>
              References
            </h2>
            <ol className='list-decimal list-inside'>
              <li><a href='https://www.mdpi.com/1422-0067/13/1/427' target="_blank" className='text-gray-500 hover:underline'>https://www.mdpi.com/1422-0067/13/1/427</a></li>
              <li><a href='https://www.ncbi.nlm.nih.gov/books/NBK148494/' target="_blank" className='text-gray-500 hover:underline'>https://www.ncbi.nlm.nih.gov/books/NBK148494/</a></li>
            </ol>
          </div>
    </main>
  )
}
