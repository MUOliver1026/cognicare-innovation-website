import React from 'react';
import Breadcrumbs from '../components/Breadcrumbs';
import MedicinePic from '../assets/2.png';

const tableData = {
  headings: ['Property', 'ML346', '115-7c', '115-7c Optimisation'],
  rows: [
    { property: 'Molecular Weight', values: ['272.26 g/mol', '477.34 g/mol', '330.42 g/mol'] },
    { property: 'Log P', values: ['1.62', '3.14', '3.44'] },
    { property: 'Molar Refractivity', values: ['78.89', '128.57', '101.91'] },
    { property: 'Total Number of Atoms', values: ['32', '54', '50'] },
    { property: 'Number of H-bond Donors', values: ['2', '2', '1'] },
    { property: 'Number of H-bond Acceptors', values: ['4', '5', '3'] },
    { property: 'Number of Rotatable Bonds', values: ['3', '9', '7'] },
    { property: 'Number of Rings', values: ['2', '3', '2'] },
    { property: 'Total PSA', values: ['84.50 Å²', '95.94 Å²', '58.64 Å²'] },
    { property: 'Bioavailability', values: ['0.55', '0.56', '0.55'] },
    { property: 'Water Solubility', values: ['Soluble', 'Moderately Soluble', 'Soluble'] },
    { property: 'GI Absorption', values: ['High', 'High', 'High'] },
    { property: 'Blood Brain Barrier (BBB) Permeable', values: ['No', 'No', 'Yes'] }
  ]
};

const references = [
  { id: 1, href: 'https://www.mdpi.com/1422-0067/13/1/427', text: 'https://www.mdpi.com/1422-0067/13/1/427' },
  { id: 2, href: 'https://www.ncbi.nlm.nih.gov/books/NBK148494/', text: 'https://www.ncbi.nlm.nih.gov/books/NBK148494/' }
];

export default function HitDiscoveryOptimisation() {
  return (
    <main>
      <div className='bg-regal-purple font-heading2 tracking-wide px-4 py-2 text-white flex items-center justify-center text-2xl h-16'>
        Hit Discovery & Optimisation
      </div>
      <Breadcrumbs />
      <div className='grid grid-cols-2 gap-4 py-4 px-24'>
        <div className='bg-white p-4 my-auto pl-16'>
          <img src={MedicinePic} alt='medicine' className='h-80 flex flex-col justify-center items-center' />
          <p className='text-gray-500 text-left mt-4'>Figure. 115-7c Optimisation Compound</p>
        </div>
        <div className='bg-white p-4'>
          <h2 className='text-2xl font-heading2 tracking-wide font-bold text-center py-2'>
            115-7c Optimisation Compound
          </h2>
          <p className='leading-7'>
            Using high-throughput screening (HTS), one of the most common techniques in the drug discovery process
            <a href='https://www.mdpi.com/1422-0067/13/1/427' target="_blank"><sup>1</sup></a>, with screening and identifying potential hits for HSP70 activators in HeLa cells from specific compound libraries (database: PubChem AID 1203) with 196,225 tested, resulting in potential activators for HSP70 (ML346 and 115-7c).
            <a href='https://www.ncbi.nlm.nih.gov/books/NBK148494/' target="_blank"><sup>2</sup></a><br/><br/>
            After comparing the physiochemical/drug-like properties for ML346 and 115-7c, the final choice for optimised hit is 115-7c. (Table 1) (Results were generated from&nbsp;
            <a href='http://www.swissadme.ch/index.php' className='underline text-blue-600 hover:text-blue-800 visited:text-purple-600' target='_blank'>SwisseADME</a>
            )<br/><br/>
            The modification process of 115-7c is replacing dichlorobenzene with methyl, changing the carboxyl group to methyl, and attaching methyl to the top of a nitrogen atom that is not attached to a hydrogen atom. Compared to the parent compound, our new compound shows better drug-like properties with lower molecular weight, better log P value, the ability to cross the brain-blood-barrier (BBB) and obey the Lipinski RO5, leading to a promising oral tablet for treating Alzheimer’s Disease.<br/><br/>
          </p>
        </div>
      </div>

      <div className='overflow-x-auto'>
        <p className='tracking-wide text-center py-2'>
          Table 1. The physiochemical/drug-like properties for ML346, 115-7c and 115-7c optimisation (Cognivita<sup>©</sup>).
        </p>
        <table className='mx-auto bg-white'>
          <thead>
            <tr>
              {tableData.headings.map((heading, index) => (
                <th key={index} className='py-2 px-4 border-b border-gray-200 bg-gray-100'>{heading}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableData.rows.map((row, rowIndex) => (
              <tr key={rowIndex}>
                <td className='py-2 px-4 border-b border-gray-200'>{row.property}</td>
                {row.values.map((value, colIndex) => (
                  <td key={colIndex} className='py-2 px-4 border-b border-gray-200'>{value}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className='bg-white py-8 flex flex-col justify-center items-center'>
        <h2 className='text-2xl font-heading2 tracking-wide font-bold text-center py-2'>
          References
        </h2>
        <ol className='list-decimal list-inside'>
          {references.map(ref => (
            <li key={ref.id}><a href={ref.href} target='_blank' className='text-gray-500 hover:underline'>{ref.text}</a></li>
          ))}
        </ol>
      </div>
    </main>
  );
}
