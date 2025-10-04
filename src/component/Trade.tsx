import  { useState } from 'react'

const Trade = () => {
      const [activeTrade, setActiveTrade] = useState('Electrician');
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Trade</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-600 to-green-600 mx-auto"></div>
          </div>
          {/* Tabs */}
          <div className="flex justify-center mb-8">
            <button
              className={`px-6 py-2 font-semibold rounded-t-lg focus:outline-none transition-colors duration-200 ${activeTrade === 'Electrician' ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-800'}`}
              onClick={() => setActiveTrade('Electrician')}
            >
              Electrician
            </button>
            <button
              className={`px-6 py-2 font-semibold rounded-t-lg focus:outline-none transition-colors duration-200 ml-2 ${activeTrade === 'Fitter' ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-800'}`}
              onClick={() => setActiveTrade('Fitter')}
            >
              Fitter
            </button>
          </div>
          <div className="space-y-6">
            {activeTrade === 'Electrician' ? (
              <>
                <p className="text-2xl text-gray-700 leading-relaxed">
                  Electrician
                </p>
                <p className="text-m text-gray-700 leading-relaxed">
                  As the name suggests, ITI Electrician trade focuses on various aspects of electricity such as – wiring (residential, commercial and industrial), home appliances, electrical machines, lighting, electrical installations etc.
                  The main aim of this trade is to provide vocational training to candidates and turn them into qualified electricians! The course thus aims at developing a skilled work-force of qualified electricians in India.
                </p>
                <p className="text-m text-gray-700 leading-relaxed"> 
                  Electrician trade trains students in areas such as –
                </p>
                <ul className="list-disc list-inside text-gray-700 text-m space-y-1">
                  <li>Wiring (residential, commercial and industrial)</li>
                  <li>Lighting installation (residential, commercial and outdoors)</li>
                  <li>Power generation, distribution and transmission systems</li>
                  <li>Insulators</li>
                  <li>Earthing</li>
                  <li>Capacitors and electrical circuits</li>
                  <li>Batteries</li>
                  <li>Working, servicing and repair of electrical appliances (motors, fans, pumps, home appliances, AC, fridge etc)</li>
                  <li>Transformers</li>
                  <li>AC/DC systems</li>
                </ul>
                <p className='text-xl'>ELIGIBILITY CRITERIA</p>
               <p className="text-m text-gray-700 leading-relaxed">
                  10th pass (under 10+2 system of schooling) is the minimum qualification required to pursue this course.
                  <br/>
                  Total No. of seats - 40
                  <br/>
                  Course Duration - 2 years
                  <br/>
                  Examination - Yearly
                </p>
              </>
            ) : (
              <>
                <p className="text-2xl text-gray-700 leading-relaxed">
                  Fitter
                </p>
                <p className="text-m text-gray-700 leading-relaxed">
Fitter is a gathering structural framework vocational trade. The span of course is two years with four semesters of six months each. There are numerous things/aspects understudies learn during course, for example, fitting and gathering auxiliary structures and lodgings from materials like edge iron, I-shafts, and plate steel, utilizing hand-devices and welding hardware and taking after plan details: inspects outlines and materials rundown to get parts particulars, and so on. The exchange is great from occupation perspective as it opens numerous alternatives for independent work on one hand and further studies choices on other hand. There are such a large number of ITIs and different establishments offering trade.                </p>
                <p className="text-m text-gray-700 leading-relaxed">
                  Job types –
                </p>
                <ul className="list-disc list-inside text-gray-700 text-m space-y-1">
                  <li>Fitter</li>
                  <li>Welder</li>
                  <li>Pipe Fabricator</li>
                  <li>Mechanical Fitter</li>
                  <li>Technical Assistant/Technician</li>
                  <li>Plant Maintenance Fitter</li>
                  <li>Lathe Machine Operator</li>
                </ul>
                <p className='text-xl'>ELIGIBILITY CRITERIA</p>
                <p className="text-m text-gray-700 leading-relaxed">
                  10th pass (under 10+2 system of schooling) is the minimum qualification required to pursue this course.
                  <br/>
                  Total No. of seats - 40<br/>
                  Course Duration - 2 years<br/>
                  Examination - Yearly
                </p>
              </>
            )}
          </div>
        </div>
  )
}

export default Trade