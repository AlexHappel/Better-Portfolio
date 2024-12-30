import React from 'react';
import './RippleButton.css';

const RippleButton = ({ children }) => {
    const createRipple = (event) => {
        const button = event.currentTarget;
        const circle = document.createElement('span');
        const diameter = Math.max(button.clientWidth, button.clientHeight);
        const radius = diameter / 2;

        circle.style.width = circle.style.height = `${diameter}px`;
        circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
        circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
        circle.classList.add('ripple');

        const ripple = button.getElementsByClassName('ripple')[0];

        if (ripple) {
            ripple.remove();
        }

        button.appendChild(circle);
    };

    return (
        <button
            className="relative overflow-hidden bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none"
            onClick={createRipple}
        >
            {children}
        </button>
    );
};

export default RippleButton;