import React from 'react';
import Hero from '../Components/Hero/Hero';
import FamilyPortrait from '../Images/FamilyPortrait.png';
import Australia from '../Images/australia.jpg';

const HomePage = () => {
    const hero1 = {
        heading: "Hi, I am Mitchell Else",
        secondheading: "I am a Front-End Developer",
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
      secondheading: "My background",
      info:
        `Originally born in Australia, I now reside in 
        Edmonton AB, Canada. In Australia I was a trade 
        qualified heavy metal fabricator. After almost 
        10 years of experience in metal fabrication I am 
        looking to pursue a new career path and utilise 
        my problem solving skills in web development.`,
      image: Australia,
    }
  return (
    <div>
        <Hero heading={hero1.heading} secondheading={hero1.secondheading}
        info={hero1.info}
        image={hero1.image}
        reverse={false} />
        <Hero heading={hero2.heading} secondheading={hero2.secondheading}
        info={hero2.info}
        image={hero2.image}
        reverse={true} />
    </div>
  )
}

export default HomePage