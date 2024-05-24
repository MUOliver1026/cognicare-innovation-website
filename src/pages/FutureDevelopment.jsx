import React from 'react'
import Breadcrumbs from '../components/Breadcrumbs';

export default function FutureDevelopment() {
  return (
    <main>
      <div className='bg-regal-purple font-heading2 tracking-wide px-4 py-2 text-white flex items-center justify-center text-2xl h-16'>
        Our Next Steps
      </div>
      <Breadcrumbs />
      <div className='grid grid-cols-2 gap-16 py-8 px-36'>
        <div className='bg-white flex justify-center items-center'>
          <img src='https://images.unsplash.com/photo-1584432810601-6c7f27d2362b?q=80&w=3783&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
            alt='medicine' className='h-80 ml-20' />
        </div>

        <div className='bg-white'>
          <h2 className='text-2xl font-heading2 tracking-wide font-bold text-center py-2'>
          Optimisation of Excipients
          </h2>
          <p>
            Excipients, even though they are often considered inactive ingredients, play an important role in a formulation of a medication. They are divided into various functional classifications depending on their specific purpose such as: binders, diluents, disintegrants, lubricants, wetting agents, solvents, fillers, emulsifiers, absorption enhancers, sustained release matrices, preservatives, sweeteners, and stabilisers, colouring or flavouring agents. 
            <a href='https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4270706/' target="_blank"><sup>1</sup></a>&nbsp;
            This allows for the excipients to increase the efficiency, solubility and many other properties of he formulation, hence optimising the capabilities of the API.<br /><br />

            Optimising the formulation is often something that is done via a trial-and-error method. Therefore, this optimization is often conducted through computer simulations before being used in mouse models. 
            <a href='https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10777730/' target="_blank"><sup>2</sup></a>&nbsp;
            This ensures that the most suitable excipients are used and typically many will be multifunctional or have high functionality, without the need for expensive trial and error style experiments using both <i>in vivo</i> and <i>in virto</i> models.
            <a href='https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7284856/' target="_blank"><sup>3</sup></a>&nbsp;
          </p><br />
        </div>

        <div className='bg-white'>
          <h2 className='text-2xl font-heading2 tracking-wide font-bold text-center py-2'>
            Preclinical Trials
          </h2>
          <p>
            Before clinical trials can occur, preclinical trials are required to ensure the drugs safety and efficacy. 
            <a href='https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5124250/' target="_blank"><sup>4</sup></a>&nbsp;
            This will also ensure that the excipients are adequately optimised. In vivo trials are vital to the knowledge and formulation parameters and characterising the physicochemical properties, ensuring the excipients that best optimise the formulation are used. 
            <a href='https://www.ncbi.nlm.nih.gov/books/NBK562239/' target="_blank"><sup>5</sup></a>&nbsp;
            Although there is no precise predictor of the effects drugs will have on humans, the data collected from the in vivo models will constitute a rational basis for determining what drug doses can be administered to individuals participating in the first-in-human clinical trials.
            <a href='https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8033831/' target="_blank"><sup>6</sup></a>&nbsp;       
          </p><br />
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
            Clinical Trials
          </h2>
          <p>
            After the pre-clinical trials and excipient optimisation has been completed, clinical trials can occur. Clinical trials are used to evaluate efficacy, safety and cost-effectiveness of the treatment with acceptable adverse effects and margin of error. 
            <a href='https://www.bjanaesthesia.org.uk/article/S0007-0912(20)30788-1/fulltext' target="_blank"><sup>7</sup></a>&nbsp;
            The data collected from the clinical trials are necessary for market approval as clinical trials are a fundamental component of medical research and serve as the main route to obtain evidence of the drugs safety and efficacy before approval.
            <a href='https://www.sciencedirect.com/science/article/pii/S1556086420303877' target="_blank"><sup>8</sup></a>&nbsp;  
          </p><br />
        </div>
      </div>

      <div className='bg-white py-8 flex flex-col justify-center items-center'>
        <h2 className='text-2xl font-heading2 tracking-wide font-bold text-center py-2'>
          References
        </h2>
        <ol className='list-decimal list-inside'>
          <li><a href='https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4270706/' target="_blank" className='text-gray-500 hover:underline'>https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4270706/</a></li>
          <li><a href='https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10777730/' target="_blank" className='text-gray-500 hover:underline'>https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10777730/</a></li>
          <li><a href='https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7284856/' target="_blank" className='text-gray-500 hover:underline'>https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7284856/</a></li>
          <li><a href='https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5124250/' target="_blank" className='text-gray-500 hover:underline'>https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5124250/</a></li>
          <li><a href='https://www.ncbi.nlm.nih.gov/books/NBK562239/' target="_blank" className='text-gray-500 hover:underline'>https://www.ncbi.nlm.nih.gov/books/NBK562239/</a></li>
          <li><a href='https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8033831/' target="_blank" className='text-gray-500 hover:underline'>https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8033831/</a></li>
          <li><a href='https://www.bjanaesthesia.org.uk/article/S0007-0912(20)30788-1/fulltext' target="_blank" className='text-gray-500 hover:underline'>https://www.bjanaesthesia.org.uk/article/S0007-0912(20)30788-1/fulltext</a></li>
          <li><a href='https://www.sciencedirect.com/science/article/pii/S1556086420303877' target="_blank" className='text-gray-500 hover:underline'>https://www.sciencedirect.com/science/article/pii/S1556086420303877</a></li>
        </ol>
      </div>
    </main>
  )
}
