import React, { useEffect, useState } from 'react'

const Hero = (props) => {
    const [typedText, setTypedText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [phraseIndex, setPhraseIndex] = useState(0);

    useEffect(() => {
      if(props.secondheading){
        const interval = setInterval(() => {
            const text = props.secondheading[phraseIndex];
            setTypedText(text.substring(0, currentIndex));
            setCurrentIndex((prevIndex) => {
              if(prevIndex === text.length){
                setPhraseIndex((prevPhraseIndex) => (prevPhraseIndex + 1) % props.secondheading.length);
                return 0;
              }
              return prevIndex + 1;
            });
        }, 200);

        return () => clearInterval(interval);
      }
    }, [currentIndex, phraseIndex, props.secondheading]);
  return (
    <div className='flex flex-col items-center justify-center mx-10 text-white w-7/8'>
        <div className={`p-8 max-w-7xl justify-center justify-between lg:gap-x-14 flex ${props.reverse ? 'flex-col-reverse lg:flex-row-reverse' : 'flex-col-reverse lg:flex-row'}`}>
          <div className='justify-center max-w-[530px] lg:flex lg:flex-col lg:w-1/2'>
            <h2 className='font-semibold text-4xl max-w-[350px] lg:text-6xl lg:leading-[5rem]'>
              {props.heading}
            </h2>
            {props.secondheading &&
            <h4 className='font-semibold text-xl min-w-[100px] max-w-[350px] h-8 lg:h-10 text-gradient lg:text-2xl my-4'>
              I am a, {typedText}
              <span className='absolute w-1 h-[1.8rem] lg:h-[2rem] bg-white animate-typing-bar'></span>
            </h4>
            }
            <p className='mb-8 text-base leading-8 max-w-[400px]'>
              {props.info}
            </p>
          </div>
          <div className='flex mx-auto mb-10 lg:mb-0 justify-center items-center w-[320px] h-[320px] overflow-hidden lg:w-[500px] lg:h-[460px]'>
            <div className='h-full w-full p-1.5 rounded-full  bg-gradient-to-r from-[#FFA500] to-[#FFFF00]'>  
              <img src={props.image} alt='img1' className='object-cover h-full rounded-full'/>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Hero;