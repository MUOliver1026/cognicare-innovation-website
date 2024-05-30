import React from 'react'
import Breadcrumbs from '../components/Breadcrumbs';

export default function DiseaseTarget() {
  return (
    <main>
      <div className='bg-regal-purple font-heading2 tracking-wide px-4 py-2 text-white flex items-center justify-center text-2xl h-16'>
        Disease & Target
      </div>
      <Breadcrumbs />
      <div className='grid grid-cols-2 py-4 px-16'>
        <div className='grid-1 bg-white py-4 px-8'>
          <h2 className='text-2xl font-heading2 tracking-wide font-bold text-center pt-2 pb-4'>
            About Alzheimer’s Disease
          </h2>
          <p className='leading-7'>
          Alzheimer's disease (AD) is a chronic brain damage disease associated with inflammation in the brain, leading to symptoms such as memory loss, difficulty concentrating and changes in behaviour.
          <a href='https://pubmed.ncbi.nlm.nih.gov/31410002/' target="_blank"><sup>1</sup></a>
          <br/><br/>
          In Australia, AD affects up to 1 in 10 Australians over 65 years of age, going up to 3 in 10 Australians over 85 years old. Almost two-thirds of those affected are female patients.
          <a href='https://www.aihw.gov.au/reports/dementia/dementia-in-aus/contents/about' target="_blank"><sup>2</sup></a>
          <br/><br/>
          The exact causes of AD are still not fully understood, but age is the most significant risk factor, along with a combination of genetic, lifestyle and environmental factors. The pathogenesis of AD is due to amyloid beta (Aβ) and neurofibrillary tangles (NFTs) abnormal phosphorylated (unstable) of tau protein in the hippocampus, causing toxic effects on neurons and breaking the communication between brain cells, resulting in brain damage with memory loss and other symptoms.
          <a href='https://pubmed.ncbi.nlm.nih.gov/31410002/' target="_blank"><sup>1</sup></a>
          <br/><br/>
          Recent common treatments of AD are based on cholinesterase inhibitors which can reconnect cell-to-cell communication levels.&nbsp;
          <a href='https://www.nejm.org/doi/full/10.1056/NEJM199911253412207' target="_blank"><sup>3</sup></a>
          However, it cannot completely cure the destruction of neuron connection, so this treatment only can be a pathway for delaying the AD process. Hence, a promising is in finding a novel target for treating AD entirely.
          <a href='https://www.mayoclinic.org/diseases-conditions/alzheimers-disease/diagnosis-treatment/drc-20350453' target="_blank"><sup>4</sup></a>
          <br/><br/>
          </p>
        </div>

        <div className='grid-2 bg-white py-4 px-8'>
          <h2 className='text-2xl font-bold font-heading2 tracking-wide text-center pt-2 pb-4'>
            About the Novel Target – HSP70
          </h2>
          <p className='leading-7'>
          The novel target is called Heat Shock Proteins 70 (HSP70), a molecular chaperone, which can maintain protein homeostasis by controlling brain protein expression by activating HSP70, recovering the neurons and tau protein structure. 
          <a href='https://link.springer.com/article/10.1007/s11010-013-1844-y' target="_blank"><sup>5</sup></a>
          <br/><br/>
          Activating the HSP70 protein would promote tau binding to microtubules, and inhibit the self-assembly of Aβ, which increases the stability of the structure.
          <a href='https://pubs.acs.org/doi/10.1021/jm100054f' target="_blank"><sup>6</sup></a>
          <br/><br/>
          An expected outcome in the lab, activating HSP70 can regain homeostasis and possibly reversal by enhancing the tau stabilisation and regulation to treat the disease.
          <a href='https://www.ncbi.nlm.nih.gov/books/NBK148494/' target="_blank"><sup>7</sup></a>
          </p>
        </div>
      </div>

      <div className='bg-white py-8 flex flex-col justify-center items-center'>
            <h2 className='text-2xl font-heading2 tracking-wide font-bold text-center py-2'>
              References
            </h2>
            <ol className='list-decimal list-inside'>
              <li><a href='https://pubmed.ncbi.nlm.nih.gov/31410002/' target="_blank" className='text-gray-500 hover:underline'>https://pubmed.ncbi.nlm.nih.gov/31410002/</a></li>
              <li><a href='https://www.aihw.gov.au/reports/dementia/dementia-in-aus/contents/about' target="_blank" className='text-gray-500 hover:underline'>https://www.aihw.gov.au/reports/dementia/dementia-in-aus/contents/about</a></li>
              <li><a href='https://www.nejm.org/doi/full/10.1056/NEJM199911253412207' target="_blank" className='text-gray-500 hover:underline'>https://www.nejm.org/doi/full/10.1056/NEJM199911253412207</a></li>
              <li><a href='https://www.mayoclinic.org/diseases-conditions/alzheimers-disease/diagnosis-treatment/drc-20350453' target="_blank" className='text-gray-500 hover:underline'>https://www.mayoclinic.org/diseases-conditions/alzheimers-disease/diagnosis-treatment/drc-20350453</a></li>
              <li><a href='https://link.springer.com/article/10.1007/s11010-013-1844-y' target="_blank" className='text-gray-500 hover:underline'>https://link.springer.com/article/10.1007/s11010-013-1844-y</a></li>
              <li><a href='https://pubs.acs.org/doi/10.1021/jm100054f' target="_blank" className='text-gray-500 hover:underline'>https://pubs.acs.org/doi/10.1021/jm100054f</a></li>
              <li><a href='https://www.ncbi.nlm.nih.gov/books/NBK148494/' target="_blank" className='text-gray-500 hover:underline'>https://www.ncbi.nlm.nih.gov/books/NBK148494/</a></li>
            </ol>
          </div>
    </main>
  )
}
