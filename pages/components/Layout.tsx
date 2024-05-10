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
            <meta name="description" content="Task tracker app built with Next.js" />
            <link rel="icon" href="/task.ico" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="theme-color" content="#000000" />
            <link rel="apple-touch-icon" href="/task.ico" />
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
        
      /*class to fix go theme button at bottom of parent*/
      .fixed {
        position: relative;
        padding: 10px;
        margin: 10px auto;
        bottom: 0;
      }
      /*styles for list items and the links in them to be like a navbar and be aesthetic */
      .navbar{
        position: fixed;
        top: 0;
        right: 0;
        margin: 0;
        padding: 0;
        overflow: hidden;
        background-color: #333;
        width: 30%;
      }
      .navbar ul{
        list-style-type: none;
        margin: 0 auto;
        padding: 0;
        overflow: hidden;
        background-color: #333;
        width: 100%;
      }
      .navbar ul li{
        text-align: center;
      }
      .navbar a, .navbar li label{
        float: left;
        display: block;
        width: 100%;
        color: #f2f2f2;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
        margin-bottom: 0;
      }
      .navbar a:hover{
        background-color: #ddd;
        color: black;
      }
      .navbar li label:hover{
        cursor: pointer;
      }
        `}
      </style>
    </div>
  );
};

export default Layout;
