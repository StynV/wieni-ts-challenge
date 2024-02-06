import { useEffect, useState } from "react";

export const DarkModeSwitch = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const savedPreference = localStorage.getItem("darkMode");

    if (savedPreference) {
      return savedPreference === "true";
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    localStorage.setItem("darkMode", String(darkMode));
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <button
      type="button"
      id="button--dark-mode"
      aria-expanded="true"
      aria-controls="button--dark-mode"
      onClick={toggleDarkMode}
    >
      <span className="sr-only">Enable/disable dark mode</span>
      {darkMode ? (
        <svg
          viewBox="0 0 48 48"
          id="b"
          xmlns="http://www.w3.org/2000/svg"
          fill="#FFFFFF"
          className="ml-3 mt-3 w-5 md:ml-0 md:mt-0"
        >
          <path d="m32.8,29.3c-8.9-.8-16.2-7.8-17.5-16.6-.3-1.8-.3-3.7,0-5.4.2-1.4-1.4-2.3-2.5-1.6C6.3,9.7,2.1,16.9,2.5,25c.5,10.7,9,19.5,19.7,20.4,10.6.9,19.8-6,22.5-15.6.4-1.4-1-2.6-2.3-2-2.9,1.3-6.1,1.8-9.6,1.5Z" />
        </svg>
      ) : (
        <svg
          viewBox="0 0 48 48"
          id="b"
          xmlns="http://www.w3.org/2000/svg"
          fill="#000000"
          className="ml-3 mt-3 w-5 md:ml-0 md:mt-0"
        >
          <path d="m32.8,29.3c-8.9-.8-16.2-7.8-17.5-16.6-.3-1.8-.3-3.7,0-5.4.2-1.4-1.4-2.3-2.5-1.6C6.3,9.7,2.1,16.9,2.5,25c.5,10.7,9,19.5,19.7,20.4,10.6.9,19.8-6,22.5-15.6.4-1.4-1-2.6-2.3-2-2.9,1.3-6.1,1.8-9.6,1.5Z" />
        </svg>
      )}
    </button>
  );
};
