import React, { useState, useEffect } from 'react';

function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode === 'true' || false;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      document.body.style.backgroundImage = "url('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.Aw74nN0SY1XYJlRRdMD1bQHaEK%26pid%3DApi&f=1&ipt=0797f36c7daf4f41fe1f5b894e01c9daa7dde82a29508d476cc10eb1d70d7362&ipo=images')";
    } else {
      document.documentElement.classList.remove('dark');
      document.body.style.backgroundImage = "url('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpaperaccess.com%2Ffull%2F535675.jpg&f=1&nofb=1&ipt=e1db691e63761f6d7ac8c1a57198222033081221c2661d0fcd31d76465c0d147&ipo=images')";
    }
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="bubble-button p-2 bg-gray-200 text-gray-900 dark:bg-gray-700 dark:text-gray-100 rounded-full w-12 h-12 flex items-center justify-center"
    >
      {darkMode ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 3v1m0 16v1m8.66-8.66h-1M4.34 12H3m15.66 4.66l-.71-.71M6.05 6.05l-.71-.71m12.02 12.02l-.71-.71M6.05 17.95l-.71-.71M12 5a7 7 0 100 14 7 7 0 000-14z"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"
          />
        </svg>
      )}
    </button>
  );
}

export default DarkModeToggle;
