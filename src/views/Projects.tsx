import { CgWebsite } from 'react-icons/cg';
import { LuCode2 } from 'react-icons/lu';
import { useNavigate } from 'react-router-dom';

import algorithmImg from '../assets/thumbnails/algorithm-visualizer.png';
import amigoChatImg from '../assets/thumbnails/amigo-chat.png';
import petConnectImg from '../assets/thumbnails/pet-connect.png';
import simpleHabitsImg from '../assets/thumbnails/simple-habits.png';
import stocksIoImg from '../assets/thumbnails/stocks-io.png';
import studentDatabaseAPIImg from '../assets/thumbnails/studentdatabase-api.png';

const projects = [
    {
        name: 'Pet Connect',
        subtitle: 'Full-Stack Mobile App',
        description: 'A cross platform social media app for pets where users can post pictures of their pets and view other profiles.',
        image: petConnectImg,
        tech: 'React Native CLI, Apollo GraphQL, Express.js, MySQL, Redux, TypeScript, TailwindCSS, Auth0, Jira, Docker',
        // to: '/projects/stocks-io',
        repository: 'https://github.com/FinalScript/pet-connect',
    },
    {
        name: 'Stocks.io',
        subtitle: 'Full-Stack Web App',
        description: 'A dummy stock trading platform where users can trade fake stocks. Prices are simulated and update in real-time.',
        image: stocksIoImg,
        tech: 'MERN, Redux, TypeScript, TailwindCSS, GraphQL, Socket.io, Docker',
        to: '/projects/stocks-io',
        repository: 'https://github.com/roynulrohan/Stocks.io',
        live: 'https://stocks-io.roynul.com',
    },
    {
        name: 'Amigo Chat',
        subtitle: 'Full-Stack Web App',
        description: 'A chat application where users can chat with each other in real-time. All messaged are preserved in a database.',
        image: amigoChatImg,
        tech: 'Next.js, Redux, TypeScript, TailwindCSS, Socket.io, GraphQL, MongoDB',
        to: '/projects/amigo-chat',
        repository: 'https://github.com/roynulrohan/amigo-V2',
        live: 'https://amigo.roynul.com',
    },
    {
        name: 'Student Database API',
        subtitle: 'REST API',
        description: 'A REST API where users can create accounts then do CRUD operations with student data, which is stored in a database.',
        image: studentDatabaseAPIImg,
        tech: 'Java, Spring Boot, JUnit, PostgreSQL',
        //to: '/projects/studentdatabase-api',
        repository: 'https://github.com/roynulrohan/StudentDatabase',
    },
    {
        name: 'Algorithm Visualizer',
        subtitle: 'Front-End',
        description: 'A web app to visualize various sorting algorithms',
        image: algorithmImg,
        tech: 'React, JavaScript, Sorting Algorithms',
        // to: '/projects/algorithm-visualizer',
        repository: 'https://algorithm-visualizer-dcba8.web.app',
    },
    {
        name: 'Simple Habits',
        subtitle: 'Mobile App',
        description: 'A habit tracker app where users can set weekly goals and track daily progress for changing habits.',
        image: simpleHabitsImg,
        tech: 'Dart, Flutter, SQLite, Cross-Platform',
        //to: '/projects/simple-habits',
        repository: 'https://github.com/roynulrohan/simple-habits',
    },
];

const Projects = () => {
    const navigate = useNavigate();

    return (
        <section id='projects' className='p-4 px-6'>
            <h1 className='text-4xl font-semibold mb-4 text-center'>Projects</h1>
            <div className='flex flex-wrap justify-center lg:justify-start'>
                {projects.map((project, i) => {
                    return (
                        <div
                            className={'w-full lg:w-1/3 p-4 transition-transform cursor-pointer'}
                            onClick={() => {
                                if (project.to) {
                                    navigate(project.to);
                                }
                            }}
                            key={i}>
                            <div className='bg-gray-100 rounded-lg p-1 relative shadow-md shadow-gray-200'>
                                <img className='h-64 rounded w-full object-cover' src={project.image} alt='content' />
                                <div className='p-2 px-3 flex flex-col items-start space-y-1'>
                                    <div className='flex justify-between items-start w-full'>
                                        <div>
                                            <h3 className='tracking-wider text-indigo-500 text-sm font-medium title-font'>{project.subtitle}</h3>
                                            <h2 className='text-lg text-gray-900 font-medium title-font'>{project.name}</h2>
                                        </div>

                                        <div className='flex gap-x-2'>
                                            {project.repository && (
                                                <a
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                    }}
                                                    href={project.repository}
                                                    target='_blank'
                                                    rel='noreferrer'
                                                    className='bg-zinc-700 hover:bg-gray-800 text-white py-1 px-3 rounded-xl flex items-center gap-x-2'>
                                                    <p className='text-sm'>Code</p>
                                                    <LuCode2 size={20} className='' />
                                                </a>
                                            )}
                                            {project.live && (
                                                <a
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                    }}
                                                    href={project.live}
                                                    target='_blank'
                                                    rel='noreferrer'
                                                    className='bg-rose-400 hover:bg-rose-800 text-white py-1 px-3 rounded-xl flex items-center gap-x-2'>
                                                    <p className='text-sm'>Demo</p>
                                                    <CgWebsite size={20} className='' />
                                                </a>
                                            )}
                                        </div>
                                    </div>
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
