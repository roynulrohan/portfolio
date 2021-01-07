import React, { useEffect, useState } from 'react';
import '../sass/components/_hero.scss';
import HeroSVG from '../assets/finance_computer.svg';
import AnimatedLetter from './AnimatedLetter';

const helloMessage = "Hello, I'm";
const fullName = 'Roynul Rohan';
const titleMessage = 'a Web Developer';

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
                    <h1 className='display-5 d-flex justify-content-center'>
                        {helloMessage.split('').map((letter, index) => {
                            return letter !== ' ' ? (
                                <AnimatedLetter letter={letter} animation='rubberBand' key={`${helloMessage} - ${index}`} />
                            ) : (
                                <span key={`${helloMessage} - ${index}`}>&nbsp;</span>
                            );
                        })}
                    </h1>
                    <h1 className='display-1 d-flex justify-content-center'>
                        {fullName.split('').map((letter, index) => {
                            return letter !== ' ' ? (
                                <AnimatedLetter letter={letter} animation='rubberBand' key={`${fullName} - ${index}`} />
                            ) : (
                                <span key={`${helloMessage} - ${index}`}>&nbsp;</span>
                            );
                        })}
                    </h1>
                    <h1 className={'display-6 pt-4 d-flex justify-content-center' + (hidden ? ' hidden' : '')}>
                        {titleMessage.split('').map((letter, index) => {
                            return letter !== ' ' ? (
                                <AnimatedLetter letter={letter} animation='rubberBand' key={`${titleMessage} - ${index}`} />
                            ) : (
                                <span key={`${helloMessage} - ${index}`}>&nbsp;</span>
                            );
                        })}
                    </h1>
                </div>
                <div className='p-4 hero__img'>
                    <img src={HeroSVG} />
                </div>
            </div>
        </section>
    );
};

export default Hero;
