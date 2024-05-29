import React from 'react';

const Timeline = () => {
    const timelineData = [
      { id: 1, date: '2024-03-15', title: 'Third Year of University', description: 'Return to fulltime studies.' },
      { id: 2, date: '2023-09-15', title: 'First job as Website Maintenance Technician', description: 'Fulfilled website maintenance with International Beauty Services & Supplies Shopify Store.' },
      { id: 3, date: '2023-06-01', title: 'First Web Development Internship', description: 'Began my first internship as a web developer with Just Natural Paws.' },
      { id: 4, date: '2022-08-01', title: 'Moved to Edmonton', description: 'Moved to Edmonton for wife\'s career. Continued university studies.' },
      { id: 5, date: '2021-06-01', title: 'Began University', description: 'Began Computer Science Degree through Athabasca University.' },
      { id: 6, date: '2020-02-01', title: 'Delivery Driver at Rona', description: 'Achieved Permanent Residency and started delivery driving for Rona.' },
      { id: 7, date: '2019-05-09', title: 'Moved back to Canada', description: 'Moved to Sydney, Nova Scotia and applied for Permanent Residency.' },
      { id: 8, date: '2017-05-10', title: 'Lead Maintenance Fabricator', description: 'Promoted to lead maintenance Fabricator at Neuman Steel.' },
      { id: 9, date: '2016-11-01', title: 'Moved back to Australia', description: 'Started mesh welding job with Neuman Steel.' },
      { id: 10, date: '2015-09-15', title: 'Moved to Canada', description: 'Began landscaping and snow-removal job in Edmonton, AB while on working holiday.' },
      { id: 11, date: '2014-10-01', title: 'Trade Qualified', description: 'Became Trade Qualified Heavy Metal Fabricator' },
      { id: 12, date: '2010-10-01', title: 'Heavy Metal Fabrication', description: 'Began Heavy Metal Fabrication Apprenticeship' },
    ];
  return (
    <div className="relative flex flex-col items-center w-full m-10 mx-auto md:w-2/3 lg:w-1/2">
      <div className="absolute h-full transform -translate-x-1/2 border-l-2 border-gray-300 left-1/2"></div>
      {timelineData.map((event, index) => (
        <div key={event.id} className="flex w-full mb-8">
          {index % 2 === 0 ? (
            <>
              <div className="flex justify-end w-1/2 pr-8">
                <div className="w-full max-w-sm p-4 bg-gradient-to-r from-[#FFA500] to-[#FFFF00] rounded-md shadow-lg">
                  <h3 className="text-xs font-semibold lg:text-lg">{event.title}</h3>
                  <time className="block text-[10px] text-gray-500 lg:text-sm">{event.date}</time>
                  <p className="mt-2 text-[8px] lg:text-sm text-gray-700">{event.description}</p>
                </div>
              </div>
              <div className="relative flex items-center justify-center w-12">
                <div className="z-10 w-10 h-10 bg-gradient-to-l from-[#FFA500] to-[#FFFF00] rounded-full"></div>
              </div>
              <div className="w-1/2 ml-[5px] lg:ml-[1.5px]"></div>
            </>
          ) : (
            <>
              <div className="w-1/2 mr-[5px] lg:mr-[1.5px]"></div>
              <div className="relative flex items-center justify-center w-12">
                <div className="z-10 w-10 h-10 bg-gradient-to-r from-[#FFA500] to-[#FFFF00] rounded-full"></div>
              </div>
              <div className="flex justify-start w-1/2 pl-8">
                <div className="max-w-sm p-4 bg-gradient-to-l from-[#FFA500] to-[#FFFF00] rounded-md shadow-lg">
                  <h3 className="text-xs font-semibold lg:text-lg">{event.title}</h3>
                  <time className="block text-[10px] text-gray-500 lg:text-sm">{event.date}</time>
                  <p className="mt-2 text-[8px] lg:text-sm text-gray-700">{event.description}</p>
                </div>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  )
}

export default Timeline;