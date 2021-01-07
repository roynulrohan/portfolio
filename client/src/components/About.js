import React from 'react';
import AboutSVG from '../assets/guy_sitting_information.svg';

const About = () => {
    return (
        <section className='container about d-flex flex-column justify-content-center' style={{ height: '100vh' }}>
            <h1 className='display-3 text-center'>About Me</h1>
            <div className='row align-items-center my-5 about__content'>
                <div className='col-12 col-lg-6 order-md-1 p-3'>
                    <h1 className='display-6 about__text'>
                        My name is Roynul Rohan, and I am a front-end developer driven by{' '}
                        <span style={{ color: '#6f27f5' }}>passion</span> to build quality{' '}
                        <span style={{ color: '#f5276c' }}>web applications</span>. I am going down the road of becoming a
                        full-stack engineer and seeking to build beautiful products with powerful and latest technologies.
                    </h1>
                </div>
                <div className='col-12 col-lg-6 order-md-2 d-flex justify-content-center p-3'>
                    <div className='about__img'>
                        <img src={AboutSVG} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
