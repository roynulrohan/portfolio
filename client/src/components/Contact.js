const Contact = () => {
    return (
        <section id='contact' className='p-4 px-6 pb-16'>
            <h1 className='text-4xl font-semibold mb-4 font-mono text-center'>Contact</h1>
            <div className='flex flex-col space-y-5 items-center'>
                <h1 className='text-2xl font-light w-2/3 mb-5 text-center'>
                    I would be happy to further discuss my experiences with you, simply fill out this form or message me on LinkedIn! :{')'}
                </h1>
                <div className='w-1/6 rounded-lg px-5 flex'>
                    <div className='p-4 transition-all w-56 hover:scale-110'>
                        <a title='GitHub' href='https://github.com/roynulrohan' rel='noreferrer' target='_blank' className='text-dark'>
                            <svg xmlns='http://www.w3.org/2000/svg' width='100%' height='100%' viewBox='0 0 24 24' fill='currentColor'>
                                <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
                            </svg>
                        </a>
                    </div>
                    <div className='text-blue-600 transition-all w-56 hover:scale-110 p-4'>
                        <a title='LinkedIn' href='https://linkedin.com/in/roynul-rohan' rel='noreferrer' target='_blank' className='text-primary'>
                            <svg xmlns='http://www.w3.org/2000/svg' width='100%' height='100%' viewBox='0 0 24 24' fill='currentColor'>
                                <path d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' />
                            </svg>
                        </a>
                    </div>
                    <div className='text-emerald-400 transition-all w-56 hover:scale-110 p-4'>
                        <a title='Contact' href='mailto:roynulrohan@gmail.com' className='text-success'>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                width='100%'
                                height='100%'
                                fill='currentColor'
                                className='bi bi-envelope-fill'
                                viewBox='0 0 16 16'>
                                <path d='M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z' />
                            </svg>
                        </a>
                    </div>
                </div>
                <div className='relative flex w-1/4 pt-7 items-center'>
                    <div className='flex-grow border-t border-gray-400'></div>
                    <span className='flex-shrink mx-4 text-xl text-gray-400'>or</span>
                    <div className='flex-grow border-t border-gray-400'></div>
                </div>
                <form action='https://formspree.io/f/xknpqrew' method='POST' className='lg:w-1/3 md:w-1/2  rounded-lg p-8 flex flex-col w-full mt-10 md:mt-0'>
                    <div className='relative mb-4'>
                        <label htmlFor='emailInput' className='leading-7 text-sm text-gray-600'>
                            Email
                        </label>
                        <input
                            id='emailInput'
                            type='email'
                            name='_replyto'
                            aria-describedby='emailHelp'
                            placeholder='Enter your email'
                            required
                            className='w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                        />
                    </div>
                    <div className='relative mb-4'>
                        <label htmlFor='messageInput' className='leading-7 text-sm text-gray-600'>
                            Message
                        </label>
                        <textarea
                            id='messageInput'
                            name='message'
                            placeholder='Enter your message'
                            required
                            className='w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out'></textarea>
                    </div>
                    <button
                        title='Submit Form'
                        type='submit'
                        className='text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg'>
                        Send
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
