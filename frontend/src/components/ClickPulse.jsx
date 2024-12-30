import React, { useEffect } from 'react';
import './ClickPulse.css';

function ClickPulse() {
  useEffect(() => {
    console.log('useEffect hook in ClickPulse is running');

    const clickCursor = (e) => {
      const cursor = document.createElement('div');
      cursor.className = 'pulse-cursor';
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
      document.body.appendChild(cursor);

      cursor.addEventListener('animationend', () => {
        document.body.removeChild(cursor);
      });
    };

    window.addEventListener('click', clickCursor);

    return () => {
      window.removeEventListener('click', clickCursor);
      console.log('Click event listener removed');
    };
  }, []);

  return null;
}

export default ClickPulse;
