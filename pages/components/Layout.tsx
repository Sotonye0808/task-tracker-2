// Layout.js
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const storedDarkMode = localStorage.getItem('darkMode');
    if (storedDarkMode) {
      setDarkMode(storedDarkMode === 'true');
    }
  }, []);

  useEffect(() => {
    const body = document.body;
    if (darkMode) {
      body.classList.add('dark-mode');
    } else {
      body.classList.remove('dark-mode');
    }
    localStorage.setItem('darkMode', darkMode.toString());
  }, [darkMode]);

  return (
    <div>
          <Head>
            <title>Task Tracker</title>
          </Head>
      
      <div className={darkMode ? 'dark-mode' : 'light-mode'}>
        <div className="container">
          <h1 className="mt-2 mb-3">TASK TRACKER</h1>
          {children}
        </div>
      </div>
      <style jsx global>
        {`
        * {
            transition: all 0.2s ease-in-out;
          }

        input[type="text"], input[type="datetime-local"] {
            borderRadius: 0.3rem, 
            border: 0.01px solid #efefff, 
            padding: 5px
        }

        input[type="checkbox"] {
            cursor: pointer;
        }

        textarea {
            borderRadius: 0.3rem, 
            border: 0.01px solid #efefff, 
            padding: 5px
        }

        .dark-mode {
            height: 100vh;
            background-color: #121212;
            color: #ffd700; /* Gold text color */
        }

        .dark-mode input[type="text"],
        .dark-mode  input[type="datetime-local"],
        .dark-mode textarea,
        .dark-mode checkbox {
            background-color: #121212;
            color: #ffd700; /* Gold text color */
        }

        .dark-mode .card{
          color: #ffd700; /* Gold text color */
        }
        `}
      </style>
    </div>
  );
};

export default Layout;
