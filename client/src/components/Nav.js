import { useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';


const Nav = () => {
    const [didScroll, setDidScroll] = useState(true);

    useEffect(() => {
        document.addEventListener('scroll', () => {
            setDidScroll(window.scrollY < 200);
        });

        return () => {
            document.removeEventListener('scroll', () => {
                setDidScroll(window.scrollY < 200);
            });
        };
    }, []);

    return (
        <CSSTransition in={true} appear={true} timeout={400} classNames='fade' unmountOnExit>
            <nav
                className={'navbar navbar-expand-lg fixed-top' + (didScroll ? ' navbar-light' : ' navbar-dark bg-dark scrolled')}
            >
                <div className='container-fluid px-5'>
                    <a className='navbar-brand' href='#'>
                        <svg
                            width='1.5em'
                            height='1.5em'
                            viewBox='0 0 16 16'
                            className='bi bi-house-fill'
                            fill='currentColor'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <path
                                fillRule='evenodd'
                                d='M8 3.293l6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z'
                            />
                            <path
                                fillRule='evenodd'
                                d='M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z'
                            />
                        </svg>
                    </a>
                    <button
                        className='navbar-toggler'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#navbarSupportedContent'
                        aria-controls='navbarSupportedContent'
                        aria-expanded='false'
                        aria-label='Toggle navigation'
                    >
                        <span className='navbar-toggler-icon'></span>
                    </button>
                    <div className='collapse navbar-collapse' id='navbarSupportedContent'>
                        <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
                            <li className='nav-item'>
                                <a className='nav-link' aria-current='page' href='#'>
                                    About
                                </a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link' href='#'>
                                    Projects
                                </a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link' href='#'>
                                    Contact
                                </a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link' href='#'>
                                    Resume
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </CSSTransition>
    );
};

export default Nav;
