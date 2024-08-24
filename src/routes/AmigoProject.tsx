import TabStyleView from '../components/TabStyleView';
import ScrollToTop from '../components/ScrollToTop';
import ImageGallery from 'react-image-gallery';
import homePagePic from '../assets/screenshots/amigo-chat/home.png';
import conversationPic from '../assets/screenshots/amigo-chat/conversation.png';
import newContactPic from '../assets/screenshots/amigo-chat/new-contact.png';
import loginPic from '../assets/screenshots/amigo-chat/login.png';
import { useEffect } from 'react';

const images = [
    {
        original: homePagePic,
        thumbnail: homePagePic,
    },
    {
        original: conversationPic,
        thumbnail: conversationPic,
    },
    {
        original: newContactPic,
        thumbnail: newContactPic,
    },
    {
        original: loginPic,
        thumbnail: loginPic,
    },
];

const AmigoProject = () => {
    useEffect(() => {
        document.title = 'Amigo Chat V2 | Portfolio';
    }, []);

    return (
        <>
            <ScrollToTop>
                <TabStyleView className='mt-36' redirect={true}>
                    <div className='p-5 px-8'>
                        <h1 className='text-4xl font-semibold mb-2 font-mono text-center'>Amigo Chat V2</h1>
                        <h5 className='text-lg text-indigo-500 mb-4 text-center'>Full-Stack Web Application</h5>
                        <div className='flex flex-wrap justify-center sm:justify-start pt-2'>
                            <p className='text-md'>
                                Amigo is a chat application for the web which allows users to chat with other users in real-time. Users need to create an
                                account with a unique name and password. Users can add contacts and see who's online. Users can also set a custom profile
                                picture.
                                <br />
                                <br />
                                The front-end is a Next.js application that utilizes TypeScript and Redux. The back-end is a GraphQL API that utilizes Mongoose
                                to makes queries to a MongoDB Atlas cluster where all messages are stored. Connections between users are established via
                                sockets. Application is containerized using Docker and deployed to a personal Ubuntu Server.
                            </p>
                            <div className='mt-10'>
                                <div className='mt-3'>
                                    <div className='flex space-x-3 items-center'>
                                        <h5 className='w-fit leading-tight rounded-lg font-medium text-pink-600'>Front-End:</h5>
                                        <h5 className=''>Next.js, Redux, TypeScript, TailwindCSS</h5>
                                    </div>
                                    <div className='flex space-x-3 items-center mt-3'>
                                        <h5 className='w-fit leading-tight rounded-lg font-medium text-green-500'>Back-End:</h5>
                                        <h5 className=''>Apollo GraphQL, TypeScript, Node.js, Express.js, Mongoose, Socket.io</h5>
                                    </div>
                                    <div className='flex space-x-3 items-center mt-3'>
                                        <h5 className='w-fit leading-tight rounded-lg font-medium text-orange-500'>Database:</h5>
                                        <h5 className=''>MongoDB Atlas</h5>
                                    </div>
                                    <div className='flex space-x-3 items-center mt-3'>
                                        <h5 className='w-fit leading-tight rounded-lg font-medium text-blue-500'>Hosting:</h5>
                                        <h5 className=''>Ubuntu Server, Docker</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col items-center space-y-4 mt-14'>
                            <h5 className='text-xl font-medium'>Checkout the project</h5>
                            <div className='flex space-x-3'>
                                <a
                                    href='https://github.com/roynulrohan/amigo-V2'
                                    rel='noreferrer'
                                    target='_blank'
                                    className='flex items-center p-2 px-4 bg-zinc-700 hover:bg-zinc-800 rounded-lg text-white'>
                                    <svg xmlns='http://www.w3.org/2000/svg' width='1.5em' height='1.5em' viewBox='0 0 24 24' fill='currentColor'>
                                        <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
                                    </svg>
                                    <span className='ml-2'>Code</span>
                                </a>
                                <a
                                    href='https://amigo.roynul.com/'
                                    rel='noreferrer'
                                    target='_blank'
                                    className='flex items-center p-2 px-4 bg-teal-500 hover:bg-teal-600 rounded-lg text-white'>
                                    <svg
                                        width='1.5em'
                                        height='1.5em'
                                        viewBox='0 0 16 16'
                                        className='bi bi-cloud-check-fill'
                                        fill='currentColor'
                                        xmlns='http://www.w3.org/2000/svg'>
                                        <path
                                            fill-rule='evenodd'
                                            d='M8 2a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 6.095 0 7.555 0 9.318 0 11.366 1.708 13 3.781 13h8.906C14.502 13 16 11.57 16 9.773c0-1.636-1.242-2.969-2.834-3.194C12.923 3.999 10.69 2 8 2zm2.354 4.854a.5.5 0 0 0-.708-.708L7 8.793 5.854 7.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z'
                                        />
                                    </svg>
                                    <span className='ml-2'>Live</span>
                                </a>
                            </div>
                        </div>
                        <div className='mt-10 bg-zinc-300 p-2 rounded-xl'>
                            <ImageGallery items={images} showPlayButton={false} additionalClass={'rounded-lg'} />
                        </div>
                    </div>
                </TabStyleView>
            </ScrollToTop>
        </>
    );
};

export default AmigoProject;
