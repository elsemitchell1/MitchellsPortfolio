import React from 'react';
import Hero from '../Components/Hero/Hero';
import FamilyPortrait from '../Images/FamilyPortrait.png';
import Australia from '../Images/australia.jpg';

const HomePage = () => {
    const hero1 = {
        heading: "Hi, I am Mitchell Else",
        secondheading: ["Web Developer.", "Problem Solver.", "Tech Enthusiast."],
        info:
          `I am a dedicated front-end web developer currently 
          halfway through my computer science degree. Known 
          for being hardworking and reliable, I take pride in 
          my ability to tackle complex problems with innovative 
          solutions. My passion for coding and continuous learning 
          drives me to excel in creating dynamic and user-friendly 
          web applications.`,
        image: FamilyPortrait,
    };
    const hero2 = {
      heading: "Backstory",
      info:
        `Originally from Australia, I now reside in 
        Edmonton AB, Canada. In Australia I was a trade 
        qualified heavy metal fabricator. After almost 
        10 years of experience in metal fabrication I am 
        pursuing a new career path, utilising 
        my problem solving skills in web development.`,
      image: Australia,
    }
  return (
    <div className='my-10'>
        <Hero heading={hero1.heading} secondheading={hero1.secondheading}
        info={hero1.info}
        image={hero1.image}
        reverse={false} />
        <Hero heading={hero2.heading}
        info={hero2.info}
        image={hero2.image}
        reverse={true} />
    </div>
  )
}

export default HomePage;