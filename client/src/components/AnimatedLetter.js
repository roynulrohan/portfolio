import React, { useState } from 'react';

const AnimatedLetter = ({ letter, animation }) => {
    const [animated, setAnimated] = useState(false);

    return (
        <span
            onMouseEnter={() => setAnimated(() => true)}
            onAnimationEnd={() => setAnimated(() => false)}
            className={animated ? animation : ''}
            style={{ display: 'block' }}
        >
            {letter}
        </span>
    );
};

export default AnimatedLetter;
