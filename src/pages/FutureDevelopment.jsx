import React from 'react'
import Breadcrumbs from '../components/Breadcrumbs';

export default function FutureDevelopment() {
  return (
    <main>
      <div className='bg-regal-purple font-heading2 tracking-wide px-4 py-2 text-white flex items-center justify-center text-2xl h-16'>
        Our Next Steps
      </div>
      <Breadcrumbs />
      <p className='text-lg py-4 px-72'>
        The formulated tablet would be to conduct a clinical trial in order to optimise the excipients and their effect of the API.<br /><br />

        Before the clinical trials for the new medication can occur, the formulation must first successfully pass a series of in vivo trials, to ensure safety and efficacy. The knowledge of the formulation parameters are vital as once the physicochemical properties of the API are characterised, the developing formulation of excipients can begin.<br /><br />

        Excipients play an important role even though they are generally considered to be inactive within a formulation. Excipients are divided into various functional classifications depending on their specific purpose such as: binders, diluents, disintegrants, lubricants, wetting agents, solvents, fillers, emulsifiers, absorption enhancers, sustained release matrices, preservatives, sweeteners, and stabilising, colouring or flavouring agents. These excipients play an important role in increasing the efficiency, solubility and many other properties including patient compliance, hence, optimising the capabilities of the API. <br /><br />

        This optimisation is often conducted via computer simulations prior to being utilised in mouse models. <br /><br />

        This ensures that the most suitable excipients are used and typically many will be multifunctional or high functionality excipients without the need for expensive trial and error style experiments using both in vivo and in vitro models. <br /><br />

        After the pre-clinical trials and excipient optimisation has been completed, clinical trials can occur.<br /><br />
        While preclinical research answers basic questions about a drug’s safety, it is not a substitute for studies of ways the drug will interact with the human body.<br /><br />

        No animal model is a perfect predictor of the precise effects of a drug in humans, but these data nonetheless constitute the rational basis for determining what drug doses we administer to the individuals participating in first‐in‐human clinical trials.<br /><br /> 

        Once the drug has been determined as safe and all clinical trials are successful, the drug can be approved to enter the market.<br /><br />
        Once the drug is on the market post-market surveillance will occur in order to ensure that further optimisation can occur and and further safety concerns can be addressed.<br /><br />
      </p>
    </main>
  )
}
