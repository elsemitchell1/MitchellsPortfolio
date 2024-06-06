import React from 'react';
import Project from '../Components/Project/Project';
import { FaCss3, FaHtml5, FaJs, FaNode, FaReact } from 'react-icons/fa';
import { SiFirebase, SiJquery, SiRedux, SiSanity, SiTailwindcss } from 'react-icons/si';
import JNPImage from '../Images/JNPImage.png';
import MitchsPizzaImage from '../Images/MitchsPizzaImage.png';
import PupShareImage from '../Images/PupShareImage.png';
import ChewbarkerImage from '../Images/ChewbarkerImage.png';
import NASAImage from '../Images/NASAImage.png';
import WebDevCertificate from '../Images/WebDevCertificate.png';

const ProjectPage = () => {
    const projects = [
        {
            name: "Just Natural Paws",
            date: "July 2023 - May 2024",
            info: "The Just Natural Paws website was built from scratch to provide an online presence and a place to purchase products.",
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
                  icon: <FaNode color='#3c873a' />,
                  skill: 'Node JS',
                },
                {
                  icon: <SiFirebase color='#ffa611' />,
                  skill: 'Firebase',
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
              ],
            link: 'https://www.justnaturalpaws.org',
            image: JNPImage,
        },
        {
            name: "Mitch's Pizzeria",
            date: "September 2023",
            info: "Mitch's Pizzeria was built for testing google firebase and redux state management for Just Natural Paws website.",
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
                  icon: <SiFirebase color='#ffa611' />,
                  skill: 'Firebase',
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
              ],
            link: 'https://elsemitchell1.github.io/MitchsPizzeria/',
            image: MitchsPizzaImage,
        },
        {
            name: "Pupshare",
            date: "September 2022",
            info: "PupShare is a website I made that mimics Pinterest and Instagram. It allows people to sign in with their google account to share pictures of their dogs.",
            skills: [
                {
                  icon: <FaReact color='#61dafb' />,
                  skill: 'React JS',
                },
                {
                  icon: <SiSanity color='#f44839' />,
                  skill: 'Sanity.io',
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
              ],
            link: 'https://pupshare.netlify.app/',
            image: PupShareImage,
        },
        {
            name: "Chewbarker.ca",
            date: "Jan 2022 - April 2022",
            info: "Chewbarker.ca utilises a variety of HTML, CSS, JavaScript, and API's to create a fun, interactive, and informative website about German Shepherds.",
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
                  icon: <SiJquery color='#7acef4' />,
                  skill: 'JQuery',
                },
              ],
            link: 'https://elsemitchell1.github.io/Chewbarker.ca/index.html',
            image: ChewbarkerImage,
        },
        {
            name: "NASA API Project",
            date: "Jan 2022",
            info: "This was a project to apply for a Shopify Internship. It uses Nasa API data to display image arrays and functional like buttons for each image.",
            skills: [
                {
                  icon: <FaReact color='#61dafb' />,
                  skill: 'React JS',
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
              ],
            link: 'https://elsemitchell1.github.io/Internship',
            image: NASAImage,
        },
        {
            name: "Coursera Projects",
            date: "Dec 2021",
            info: "5 assignments were required to pass the HTML, CSS, and Javascript for Web Developers course. See the assignments at my github page.",
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
              ],
            link: 'https://github.com/elsemitchell1',
            image: WebDevCertificate,
        },
    ]
  return (
    <div className='flex flex-col items-center justify-center m-8 text-white'>
        <h1 className='mb-6 text-5xl font-bold text-center underline lg:text-7xl'>Projects</h1>
        <div className='flex flex-wrap justify-center max-w-5xl gap-10 m-8'>
            {projects.map((project, key) => (
                <Project project={project} key={key}/>
            ))}
        </div>
    </div>
  )
}

export default ProjectPage;