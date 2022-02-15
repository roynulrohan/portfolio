import { CSSTransition } from 'react-transition-group';

const Footer = () => {
    return (
        <div className='bg-dark text-light text-center p-3 mt-auto'>
            <h5 style={{ fontWeight: '300', margin: '0' }}>© Roynul Rohan {new Date().getFullYear()} </h5>
        </div>
    );
};

export default Footer;
