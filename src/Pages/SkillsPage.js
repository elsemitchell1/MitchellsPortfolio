import React from 'react';
import Skills from '../Components/Skills/Skills';
import { FaBusinessTime, FaChalkboardTeacher, FaCss3, FaGitAlt, FaHtml5, FaJava, FaJs, FaNode, FaPython, FaReact } from 'react-icons/fa';
import { SiCplusplus, SiCsharp, SiDotnet, SiExpress, SiFirebase, SiJquery, SiMysql, SiRedux, SiSanity, SiTailwindcss } from 'react-icons/si';
import { GiTalk, GiTeamIdea, GiThink } from 'react-icons/gi';
import { TfiThought } from 'react-icons/tfi';

const SkillsPage = () => {
  const skills = [
    {
      heading: 'Frontend',
      skills: [
        {
          icon: <FaReact color='#61dafb' />,
          skill: 'React JS',
        },
        {
          icon: <SiRedux color='#764ABC' />,
          skill: 'Redux',
        },
        {
          icon: <SiTailwindcss color='#06b6d4' />,
          skill: 'Tailwindcss',
        },
        {
          icon: <FaHtml5 color='#e34c26' />,
          skill: 'HTML',
        },
        {
          icon: <FaCss3 color='#264de4' />,
          skill: 'CSS',
        },
        {
          icon: <FaJs color='yellow' />,
          skill: 'JavaScript',
        },
        {
          icon: <SiJquery color='#7acef4' />,
          skill: 'JQuery',
        },
      ]
    }, 
    {
      heading: 'Backend',
      skills: [
        {
          icon: <FaNode color='#3c873a' />,
          skill: 'Node JS',
        },
        {
          icon: <SiExpress color='#303030' />,
          skill: 'Express JS',
        },
        {
          icon: <SiMysql color='#00758f' />,
          skill: 'MySQL',
        },
        {
          icon: <SiFirebase color='#ffa611' />,
          skill: 'Firebase',
        },
        {
          icon: <SiSanity color='#f44839' />,
          skill: 'Sanity.io',
        },
      ]
    },  
    {
      heading: 'Languages',
      skills: [
        {
          icon: <FaHtml5 color='#e34c26' />,
          skill: 'HTML',
        },
        {
          icon: <FaCss3 color='#264de4' />,
          skill: 'CSS',
        },
        {
          icon: <FaJs color='yellow' />,
          skill: 'JavaScript',
        },
        {
          icon: <FaPython color='#4584b6' />,
          skill: 'Python',
        },
        {
          icon: <SiCplusplus color='#00599C' />,
          skill: 'C++',
        },
        {
          icon: <SiCsharp color='#239120' />,
          skill: 'C#',
        },
        {
          icon: <FaJava color='#ff0000' />,
          skill: 'Java',
        },
        {
          icon: <SiDotnet color='#512bd4' />,
          skill: 'Dot.Net',
        },
        {
          icon: <FaGitAlt color='#f1502f' />,
          skill: 'git',
        },
      ]
    },  
    {
      heading: 'Soft Skills',
      skills: [
        {
          icon: <GiThink />,
          skill: 'Problem Solving',
        },
        {
          icon: <FaChalkboardTeacher />,
          skill: 'Fast Learner',
        },
        {
          icon: <TfiThought />,
          skill: 'Critical Thinking',
        },
        {
          icon: <GiTalk />,
          skill: 'Communication',
        },
        {
          icon: <GiTeamIdea />,
          skill: 'Teamwork',
        },
        {
          icon: <FaBusinessTime />,
          skill: 'Time Management',
        },
      ]
    }, 
  ]
  return (
    <div className='m-10'>
      <div className='flex flex-col items-center justify-center max-w-5xl text-white md:mx-auto w-7/8'>
          <h1 className='mb-6 text-5xl font-bold underline lg:text-7xl'>Skills</h1>
          <p className='font-semibold text-center text-md lg:text-lg'>Here are some of the skills that I have been working on.</p>
          <div className='flex flex-wrap justify-center justify-between w-full my-10 gap-y-10'>
            {skills.map((skill, index) => (
              <Skills heading={skill.heading} key={index} skills={skill.skills} />
            ))}
          </div>
      </div>
    </div>
  )
}

export default SkillsPage;