import { useNavigate } from 'react-router-dom';
import { RxExternalLink } from 'react-icons/rx';

import stocksIoImg from '../assets/thumbnails/stocks-io.png';
import studentDatabaseAPIImg from '../assets/thumbnails/studentdatabase-api.png';
import amigoChatImg from '../assets/thumbnails/amigo-chat.png';
import simpleHabitsImg from '../assets/thumbnails/simple-habits.png';
import algorithmImg from '../assets/thumbnails/algorithm-visualizer.png';
import petConnectImg from '../assets/thumbnails/pet-connect.png';

const projects = [
    {
        name: 'Pet Connect',
        subtitle: 'Full-Stack Mobile App',
        description: 'A cross platform social media app for pets where users can post pictures of their pets and view other profiles.',
        image: petConnectImg,
        tech: 'React Native CLI, Apollo GraphQL, Express.js, MySQL, Redux, TypeScript, TailwindCSS, Auth0, Jira, Docker',
        // to: '/projects/stocks-io',
    },
    {
        name: 'Stocks.io',
        subtitle: 'Full-Stack Web App',
        description: 'A dummy stock trading platform where users can trade fake stocks. Prices are simulated and update in real-time.',
        image: stocksIoImg,
        tech: 'MERN, Redux, GraphQL, TypeScript, TailwindCSS, JWT, Socket.io, Docker, Azure Apps, DevOps',
        to: '/projects/stocks-io',
    },
    {
        name: 'Amigo Chat',
        subtitle: 'Full-Stack Web App',
        description: 'A chat application where users can chat with each other in real-time. All messaged are preserved in a database.',
        image: amigoChatImg,
        tech: 'MERN, Redux, Bootstrap, Sass, Socket.io',
        to: '/projects/amigo-chat',
    },
    {
        name: 'Student Database API',
        subtitle: 'REST API',
        description: 'A REST API where users can create accounts then do CRUD operations with student data, which is stored in a database.',
        image: studentDatabaseAPIImg,
        tech: 'Java, Spring Boot, JUnit, PostgreSQL, AWS EC2, RHEL, Azure Apps',
        //to: '/projects/studentdatabase-api',
    },
    {
        name: 'Algorithm Visualizer',
        subtitle: 'Front-End',
        description: 'A web app to visualize various sorting algorithms',
        image: algorithmImg,
        tech: 'React, JavaScript, Sorting Algorithms',
        // to: '/projects/algorithm-visualizer',
    },
    {
        name: 'Simple Habits',
        subtitle: 'Mobile App',
        description: 'A habit tracker app where users can set weekly goals and track daily progress for changing habits.',
        image: simpleHabitsImg,
        tech: 'Dart, Flutter, SQLite, Cross-Platform',
        //to: '/projects/simple-habits',
    },
];

const Projects = () => {
    const navigate = useNavigate();

    return (
        <section id='projects' className='p-4 px-6'>
            <h1 className='text-4xl font-semibold mb-4 font-mono text-center'>Projects</h1>
            <div className='flex flex-wrap justify-center lg:justify-start'>
                {projects.map((project, i) => {
                    return (
                        <div
                            className={'w-full lg:w-1/3 p-4 hover:scale-105 transition-transform ' + (project.to && 'cursor-pointer')}
                            onClick={() => {
                                if (project.to) {
                                    navigate(project.to);
                                }
                            }}
                            key={i}>
                            <div className='bg-gray-200 rounded-lg p-1 relative shadow shadow-gray-300'>
                                {project.to && (
                                    <div className='absolute right-0 top-0'>
                                        <RxExternalLink size={35} className='bg-gray-200 p-1.5 rounded-tr-lg rounded-bl-lg text-indigo-600' />
                                    </div>
                                )}
                                <img className='h-64 rounded w-full object-cover' src={project.image} alt='content' />
                                <div className='p-2 px-3 flex flex-col items-start space-y-1'>
                                    <h3 className='tracking-wider text-indigo-500 text-sm font-medium title-font'>{project.subtitle}</h3>
                                    <h2 className='text-lg text-gray-900 font-medium title-font'>{project.name}</h2>
                                    <div className='divide-gray-400 divide-y-2 flex flex-col items-start'>
                                        <p className='leading-relaxed text-sm font-light pb-2'>{project.description}</p>
                                        <div className='flex flex-wrap pt-2'>
                                            {project.tech.split(',').map((tag) => {
                                                return (
                                                    <p
                                                        className='leading-relaxed text-sm font-light p-1 px-3 mr-2 mt-2 rounded-3xl bg-gray-300'
                                                        key={project.name + tag}>
                                                        {tag.trim()}
                                                    </p>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Projects;
