import React, { useState, useEffect } from 'react';

const AnimatedLetter = ({ letter, animation }) => {
    const [animated, setAnimated] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setAnimated(true);
        }, Math.floor(Math.random() * 300) + 100);
    }, []);

    return (
        <span
            onClick={() => setAnimated(true)}
            onMouseEnter={() => setAnimated(true)}
            onAnimationEnd={() => setAnimated(false)}
            className={animated ? animation : ''}
            style={{ display: 'block', cursor: 'default', userSelect: 'none' }}>
            {letter}
        </span>
    );
};

export default AnimatedLetter;
