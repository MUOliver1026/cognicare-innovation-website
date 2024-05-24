import React from 'react';
import Breadcrumbs from '../components/Breadcrumbs';

export default function SocietyImpact() {
  return (
    <main>
      <div className='bg-regal-purple font-heading2 tracking-wide px-4 py-2 text-white flex items-center justify-center text-2xl h-16'>
        Sustainability & Social responsibility
      </div>
      <Breadcrumbs />

      <div className='grid grid-cols-2 gap-16 py-8 px-36'>
        <div className='bg-white flex justify-center items-center'>
          <img src='https://images.unsplash.com/photo-1584432810601-6c7f27d2362b?q=80&w=3783&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
            alt='medicine' className='h-80 ml-20' />
        </div>

        <div className='bg-white'>
          <h2 className='text-2xl font-heading2 tracking-wide font-bold text-center py-2'>
            #3 Good Health and Well-being
          </h2>
          <p>
            Ensure healthy lives and promote well-being for all at all ages
          </p><br />
          <ol className="list-decimal list-inside">
            <li>Improve quality of life : Alzheimer's disease can be cured through the use of hsp70 activators to slow down the disease process and improve the quality of life of the patients 
              <a href='https://www.dementia.org.au/about-dementia/alzheimers-disease' target="_blank"><sup>1</sup></a>.
            </li><br />
            <li>Decrease death rate: The median duration of survival in Alzheimer's disease is 3.8 years, which can be prolonged with the use of this drug 
              <a href='https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3962992/' target="_blank"><sup>2</sup></a>.
            </li><br />
            <li>Support for caregivers: Slowing the symptoms of Alzheimer's disease can improve the quality of life and well-being for the patient's family, caregivers
              <a href='https://www.hindawi.com/journals/ijad/2016/9213968/' target="_blank"><sup>3</sup></a>.
            </li><br />
          </ol>
        </div>

        <div className='bg-white'>
          <h2 className='text-2xl font-heading2 tracking-wide font-bold text-center py-2'>
            #8 Decent Work and Economic Growth
          </h2>
          <p>
            Promote sustained, inclusive and sustainable economic growth, full and productive employment and decent work for all.          
          </p><br />
          <ol className="list-decimal list-inside">
            <li>Enhancing the capacity of family caregivers: Slowing the progression of Alzheimer's disease for patients who are not retired or who are still financially responsible for their families can make them better able to take care of their family responsibilities
              <a href='https://www.helpguide.org/articles/alzheimers-dementia-aging/tips-for-alzheimers-caregivers.htm' target="_blank"><sup>4</sup></a>.
            </li><br />
            <li>Impact on and support for the economy: Alzheimer's disease has a huge financial impact on socioeconomics, the healthcare system, families, and individuals, and alleviating the symptoms can ensure that patients have support for the financial resources listed above
            <a href='https://pubmed.ncbi.nlm.nih.gov/37972428/' target="_blank"><sup>5</sup></a>.
            </li><br />
          </ol>
        </div>

        <div className='bg-white flex justify-center items-center'>
          <img src='https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?q=80&w=3876&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            alt='medicine' className='h-80 ml-20' />
        </div>

        <div className='bg-white flex justify-center items-center'>
          <img src='https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            alt='medicine' className='h-80 ml-20' />
        </div>

        <div className='bg-white'>
          <h2 className='text-2xl font-heading2 tracking-wide font-bold text-center py-2'>
            #16 Peace, Justice and Strong Institutions
          </h2>
          <p>
            Provide access to justice for all and build effective, accountable and inclusive institutions at all levels.         
          </p><br />
          <ol className="list-decimal list-inside">
            <li>Slowing down the process of patient morbidity to ensure the protection of patients' rights: Reducing a patient's disease process and symptoms and improving their cognitive abilities can ensure that they are protected from abuse, neglect, and exploitation.</li><br />
            <li>Community Inclusion: for patients, only HSP70 activator this type of drug to help slow down the disease can reduce the chances of patients in life, society, unfair treatment
              <a href='https://doi.org/10.1080/23297018.2024.2335506' target="_blank"><sup>6</sup></a>.
            </li><br />
          </ol>
        </div>
      </div>

      <div className='bg-white py-8 px-72'>
        <h2 className='text-2xl font-heading2 tracking-wide font-bold text-center py-2'>
          References
        </h2>
        <ol className='list-decimal list-inside'>
          <li><a href='https://www.dementia.org.au/about-dementia/alzheimers-disease' target="_blank" className='text-gray-500 hover:underline'>https://www.dementia.org.au/about-dementia/alzheimers-disease</a></li>
          <li><a href='https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3962992/' target="_blank" className='text-gray-500 hover:underline'>https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3962992/</a></li>
          <li><a href='https://www.hindawi.com/journals/ijad/2016/9213968/' target="_blank" className='text-gray-500 hover:underline'>https://www.hindawi.com/journals/ijad/2016/9213968/</a></li>
          <li><a href='https://www.helpguide.org/articles/alzheimers-dementia-aging/tips-for-alzheimers-caregivers.htm' target="_blank" className='text-gray-500 hover:underline'>https://www.helpguide.org/articles/alzheimers-dementia-aging/tips-for-alzheimers-caregivers.htm</a></li>
          <li><a href='https://pubmed.ncbi.nlm.nih.gov/37972428/' target="_blank" className='text-gray-500 hover:underline'>https://pubmed.ncbi.nlm.nih.gov/37972428/</a></li>
          <li><a href='https://doi.org/10.1080/23297018.2024.2335506' target="_blank" className='text-gray-500 hover:underline'>https://doi.org/10.1080/23297018.2024.2335506</a></li>
        </ol>
      </div>
    </main>
  );
}