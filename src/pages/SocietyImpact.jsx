import React from 'react'
import Breadcrumbs from '../components/Breadcrumbs';
import MedicinePic from '../assets/2.png';

export default function SocietyImpact() {
  return (
    <main>
      <div className='bg-regal-purple font-heading2 tracking-wide px-4 py-2 text-white flex items-center justify-center text-2xl h-16'>
        Sustainability & Social responsibility
      </div>
      <Breadcrumbs />

      <div className='grid grid-cols-2 py-4 px-16'>
        <div className='grid-1 bg-white flex justify-center items-center'>
          <img src='https://images.unsplash.com/photo-1583088580009-2d947c3e90a6?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
            alt='medicine' className='h-72 ml-20' />
        </div>

        <div className='grid-2 bg-white py-4 px-8'>
          <h2 className='text-2xl font-heading2 tracking-wide font-bold text-center py-2'>
            #3 Good Health and Well-being
          </h2>
          <p>
              Ensure healthy lives and promote well-being for all at all ages          
          </p><br />
          <ol class="list-decimal list-inside">
            <li>Improve quality of life : Alzheimer's disease can be cured through the use of hsp70 activators to slow down the disease process and improve the quality of life of the patients.</li><br />
            <li>Decrease death rate: The median duration of survival in Alzheimer's disease is 3.8 years, which can be prolonged with the use of this drug.</li><br />
            <li>Support for caregivers: Slowing the symptoms of Alzheimer's disease can improve the quality of life and well-being for the patient's family, caregivers.</li><br />
          </ol>
        </div>
      </div>

      <div className='grid grid-cols-2 py-4 px-16'>
        <div className='grid-1 bg-white py-4 px-8'>
          <h2 className='text-2xl font-heading2 tracking-wide font-bold text-center py-2'>
            #8 Decent Work and Economic Growth
          </h2>
          <p>
            Promote sustained, inclusive and sustainable economic growth, full and productive employment and decent work for all.          
          </p><br />
          <ol class="list-decimal list-inside">
            <li>Enhancing the capacity of family caregivers: Slowing the progression of Alzheimer's disease for patients who are not retired or who are still financially responsible for their families can make them better able to take care of their family responsibilities.</li><br />
            <li>Impact on and support for the economy: Alzheimer's disease has a huge financial impact on socioeconomics, the healthcare system, families, and individuals, and alleviating the symptoms can ensure that patients have support for the financial resources listed above.</li><br />
          </ol>
        </div>

        <div className='grid-2 bg-white p-4'>
          <img src={MedicinePic} alt='medicine' className='h-80 ml-20' />
        </div>
      </div>

      <div className='grid grid-cols-2 py-4 px-16'>
        <div className='grid-1 bg-white p-4'>
          <img src={MedicinePic} alt='medicine' className='h-80 ml-20' />
        </div>

        <div className='grid-2 bg-white py-4 px-8'>
          <h2 className='text-2xl font-heading2 tracking-wide font-bold text-center py-2'>
            #16 Peace, Justice and Strong Institutions
          </h2>
          <p>
            Provide access to justice for all and build effective, accountable and inclusive institutions at all levels.         
          </p><br />
          <ol class="list-decimal list-inside">
            <li>Slowing down the process of patient morbidity to ensure the protection of patients' rights: Reducing a patient's disease process and symptoms and improving their cognitive abilities can ensure that they are protected from abuse, neglect, and exploitation.</li><br />
            <li>Community Inclusion: for patients, only HSP70 activator this type of drug to help slow down the disease can reduce the chances of patients in life, society, unfair treatment.</li><br />
          </ol>
        </div>
      </div>
    </main>
  )
}
