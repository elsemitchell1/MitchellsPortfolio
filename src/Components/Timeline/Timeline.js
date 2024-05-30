import React from 'react';

const Timeline = (props) => {
    
  return (
    <div className="relative flex flex-col items-center w-full m-10 mx-auto md:w-2/3 lg:w-1/2">
      <div className="absolute h-full transform -translate-x-1/2 border-l-2 border-gray-300 left-1/2"></div>
      {props.timelineData.map((event, index) => (
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