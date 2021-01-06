import React, { useEffect, useState } from 'react';
import '../sass/components/_hero.scss';
import HeroSVG from '../assets/finance_computer.svg';

const Hero = () => {
    const [hidden, setHidden] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setHidden(false);
        }, 200);
    }, []);

    return (
        <section className='d-flex flex-column justify-content-center align-items-center hero' style={{ height: '100vh' }}>
            <div className='d-flex align-items-center hero__content p-5'>
                <div className='text-nowrap text-center hero__text p-4'>
                    <h1 className='display-5'>Hello, I'm</h1>
                    <h1 className='display-1'>Roynul Rohan</h1>
                    <h1 className={'display-6 pt-4' + (hidden ? ' hidden' : '')}>a Web Developer</h1>
                </div>
                <div className='p-4 hero__img'>
                    <img src={HeroSVG} />
                </div>
            </div>
        </section>
    );
};

export default Hero;
