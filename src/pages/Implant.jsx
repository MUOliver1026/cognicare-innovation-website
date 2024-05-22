import React from 'react'
import Breadcrumbs from '../components/Breadcrumbs';
import MedicinePic from '../assets/2.png';

export default function Implant() {
  return (
    <main>
      <div className='bg-regal-purple font-heading2 tracking-wide px-4 py-2 text-white flex items-center justify-center text-2xl h-16'>
        Implant
      </div>
      <Breadcrumbs />
      <div className='grid grid-cols-2 gap-4 py-4 px-24'>
        <div className='grid-1 bg-white p-4 flex justify-center items-center'>
          <img src={MedicinePic} alt='medicine' className='h-80 ml-20' />
        </div>

        <div className='grid-2 bg-white p-4'>
          <h2 className='text-2xl font-heading2 tracking-wide font-bold text-center py-2'>
            Implant
          </h2>
          <p>
          Considering that Alzheimer's disease can impair the patient's cognitive function, including long-period memory loss, we hope that the medication will take effect for a long time. Implants can be implanted subcutaneously in patients to achieve therapeutic effects by continuously releasing drugs or active substances. Therefore, Implants may be another suitable formulation for our lead compound.<br /><br />

          Compared to tablets, Implant has some advantages and limitations.<br /><br />

          Implants can continuously release drugs, provide long-term therapeutic effects, reduce medication frequency, and thus reduce the probability of forgetting to take medication. Meanwhile, because the implementation has no first-pass effect, it has a higher bioavailability than tablets. Due to slow administration, it can maintain a relatively stable blood drug concentration, reduce drug fluctuations in the body, and improve treatment effectiveness.<br /><br />

          However, Implants need to be surgically implanted into the patient's body, which carries certain surgical risks, including infection and bleeding, and may require a more extended recovery period. Moreover, the Implant is irreversible, and once implanted, it is usually not possible to remove it through simple methods. Therefore, if adverse reactions occur or medication needs to be adjusted, additional surgery may be required.<br /><br />

          Overall, in clinical treatment, choosing the appropriate medication method based on the patient's condition is necessary.<br /><br />
          </p>
        </div>
      </div>
    </main>
  )
}
