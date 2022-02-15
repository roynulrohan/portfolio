import { Link } from 'react-router-dom';

import stocksIoImg from '../assets/project-screenshots/stocks-io.png';
import studentDatabaseAPIImg from '../assets/project-screenshots/studentdatabase-api.png';
import amigoChatImg from '../assets/project-screenshots/amigo-chat.png';
import simpleHabitsImg from '../assets/project-screenshots/simple-habits.png';
import algorithmImg from '../assets/project-screenshots/algorithm-visualizer.png';

const projects = [
    {
        name: 'Stocks.io',
        subtitle: 'Full-stack Web App',
        description: 'A dummy stock trading platform where users can trade fake stocks. Prices are simulated and update in real-time.',
        image: stocksIoImg,
        tech: 'MERN, Redux, GraphQL, TypeScript, TailwindCSS, JWT, Socket.io, Docker, Azure Apps, DevOps',
        to: '/projects/stocks-io',
    },
    {
        name: 'Student Database API',
        subtitle: 'REST API',
        description: 'A REST API where users can create accounts then do CRUD operations with student data, which is stored in a database.',
        image: studentDatabaseAPIImg,
        tech: 'Java, Spring Boot, JUnit, PostgreSQL, AWS EC2, RHEL, Azure Apps',
        to: '/projects/studentdatabase-api',
    },
    {
        name: 'Amigo Chat',
        subtitle: 'Full-stack Web App',
        description: 'A chat application where users can chat with each other in real-time. All messaged are preserved in a database.',
        image: amigoChatImg,
        tech: 'MERN, Redux, Bootstrap, Sass, Socket.io',
        to: '/projects/amigo-chat',
    },
    {
        name: 'Algorithm Visualizer',
        subtitle: 'Front-end',
        description: 'A web app to visualize various sorting algorithms',
        image: algorithmImg,
        tech: 'React, JavaScript, Sorting Algorithms',
        to: '/projects/algorithm-visualizer',
    },
    {
        name: 'Simple Habits',
        subtitle: 'Mobile App',
        description: 'A habit tracker app where users can set weekly goals and track daily progress for changing habits.',
        image: simpleHabitsImg,
        tech: 'Dart, Flutter, SQFLite, Cross-Platform',
        to: '/projects/simple-habits',
        cover: true,
    },
];

const Projects = () => {
    return (
        <section id='projects' className='p-4 px-6'>
            <h1 className='text-4xl font-semibold mb-4 font-mono text-center'>Projects</h1>
            <div className='flex flex-wrap justify-center sm:justify-start'>
                {projects.map((project) => {
                    return (
                        <Link className='lg:w-1/3 p-4 hover:scale-105 transition-transform' to={project.to} key={project.name}>
                            <div className='bg-gray-200 rounded-lg p-1'>
                                <img className={'h-64 rounded w-full object-center' + (project.cover && ' object-cover')} src={project.image} alt='content' />
                                <div className='p-2 px-3 flex flex-col space-y-1'>
                                    <h3 className='tracking-wider text-indigo-500 text-sm font-medium title-font'>{project.subtitle}</h3>
                                    <h2 className='text-lg text-gray-900 font-medium title-font'>{project.name}</h2>
                                    <div className='divide-gray-400 divide-y-2'>
                                        <p className='leading-relaxed text-sm font-light pb-2'>{project.description}</p>
                                        <div className='flex flex-wrap pt-2'>
                                            {project.tech.split(',').map((tag) => {
                                                return (
                                                    <p
                                                        className='leading-relaxed text-base font-light p-1 px-3 mr-2 mt-2 rounded-3xl bg-gray-300'
                                                        key={project.name + tag}>
                                                        {tag.trim()}
                                                    </p>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </section>
    );
};

export default Projects;
