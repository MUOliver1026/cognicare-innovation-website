import React from 'react'
import Breadcrumbs from '../components/Breadcrumbs';

export default function Tablet() {
  const data = [
    { name: "API (lead compound)", weight: "4 mg" },
    { name: "Microcrystalline cellulose (MCC)", weight: "90 mg" },
    { name: "Croscarmellose sodium (CCNa)", weight: "2 mg" },
    { name: "Hypromellose (HPMC)", weight: "2 mg" },
    { name: "Silicon dioxide", weight: "4 mg" },
    { name: "Magnesium stearate", weight: "1 mg" },
  ];

  const p_data = [
    { property: "Friability", value: "0.12%" },
    { property: "Hardness", value: "9.75kg" },
    { property: "Disintegration time", value: "10min" },
    { property: "Dissolution time", value: "99.5% in 30 min" },
  ];

  return (
    <main>
      <div className='bg-regal-purple font-heading2 tracking-wide px-4 py-2 text-white flex items-center justify-center text-2xl h-16'>
        Oral Tablet
      </div>
      <Breadcrumbs />

      <div className='grid grid-cols-2 gap-4 py-4 px-24'>
        <div className='grid-1 bg-white p-4'>
          <div>
              <h2 className='text-2xl font-heading2 tracking-wide font-bold text-center py-2'>
                Tablet Formulation (One tablet)
              </h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-200">
                <thead>
                  <tr>
                    <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Name
                    </th>
                    <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Weight (mg)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, index) => (
                    <tr key={index} className="border-b">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {item.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {item.weight}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className='py-4'>
            <h2 className='text-2xl font-heading2 tracking-wide font-bold text-center py-2'>
              Tablet property
            </h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-200">
                <thead>
                  <tr>
                    <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Tablet Property
                    </th>
                    <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Value
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {p_data.map((item, index) => (
                    <tr key={index} className="border-b">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {item.property}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {item.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
        </div>

        <div className='grid-2 bg-white p-4'>
          <h2 className='text-2xl font-heading2 tracking-wide font-bold text-center py-2'>
            Role of each excipient
          </h2>
          <ul className='list-disc px-4'>
            <li><b>Microcrystalline cellulose (MCC): </b>
              MCC is a fundamental filler in tablet manufacturing, which is able to increase the weight and bulk of tablets. Also, the usage of MCC facilitates tablet moulding and dosage uniformity.</li><br />
            <li><b>Croscarmellose sodium (CCNa): </b>
              CCNa is an important disintegrant in tablets. The function of CCNa is to accelerate breakdown of tablets in the gastrointestinal tract and promote release and absorption of active ingredients in our body.</li><br />
            <li><b>Hypromellose (HPMC): </b>
              HPMC is a primary binder in tablet formulation. The aim of HPMC is to glue each ingredient in the tablet together and keep the tablets intact during and after the compression process.</li><br />
            <li><b>Silicon dioxide: </b>
              Silicon dioxide is a common glidant used in tablets to reduce friction between the particles, improve fluidity of powder/granule and make tablets smooth and beautiful.</li><br />
            <li><b>Magnesium stearate: </b>
              Magnesium stearate is one of the most typical lubricants in tablet manufacturing. The function of lubricant is almost similar to glidant such as reducing the friction of particles and between tablets and punches. Moreover, lubricant can distribute pressure of punches evenly to prevent powder sticking on punches and keep tablet density uniform.</li><br />
          </ul>
        </div>
      </div>

      <div className='text-lg py-4 px-72'>
        <h2 className='text-2xl font-heading2 tracking-wide font-bold text-center py-2'>
        Potential Challenges
        </h2>
        <ol className='list-decimal list-inside px-4'>
          <li><b>Patients compliance</b>
            <ul className='list-disc px-12'>
              <li>Although tablets are convenient to carry on and take, some elderly patients are still difficult to swallow and more likely to choke and get stuck on tablets.</li>
              <li>The cognitive impairment and memory loss will reduce patients compliance and medication management. Even if tablets can be marked and identified by symbols, patients with severe symptoms are still at high risk of medication errors.</li>
            </ul>
          </li><br />
          <li><b>Safety</b>
            <ul className='list-disc px-12'>
              <li>The bioavailability of this drug is insufficient for oral administration because of the absorption part. Commonly, our novel tablets may cause some GI tract side effects such as hepatotoxic and renal dysfunction.</li>
            </ul>
          </li><br />
          <li><b>Tolerability</b>
            <ul className='list-disc px-12'>
              <li>Physiological changes in elderly patients will have an impact on pharmacokinetics and pharmacodynamics. Close monitoring is necessary after administration to prevent toxicity caused by drug accumulation.</li>
              <li>Usually, elderly patients always have some other kinds of diseases and may take multiple medications at the same time. In addition, our lead compound can suppress the function of some cytochromes, which may lead to drug-drug interaction.</li>
            </ul>
          </li><br />
        </ol>
      </div>
    </main>
  )
}
