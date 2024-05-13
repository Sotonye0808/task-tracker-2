// pages/Login.tsx

import React, { useEffect, useState } from 'react';
import Layout from './components/Layout';
import { useRouter } from 'next/router';

const Login: React.FC = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [username, setUsername] = useState('');
    const [userId, setEmail] = useState('');
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [loginStatus, setLoginStatus] = useState('');
    const router = useRouter();

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

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
      };

    const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
    };

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        // Send a request to the backend to check login status
        const response = await fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, userId }),
        });
        const data = await response.json();
        if (data.status === 'success') {
            // Login successful
            setLoginStatus('success');
            // Store user data in local storage
            localStorage.setItem('username', username);
            localStorage.setItem('userId', userId);
            localStorage.setItem('isLoggedOn', 'true');
            // When the user logs in or signs up, set the userId in a cookie
            document.cookie = `userId=${userId}; path=/`;
            // Redirect to index page
            router.push('/');
        } else if (data.status === 'usernameMismatch') {
            // Username mismatch
            setLoginStatus('usernameMismatch');
        } else if (data.status === 'emailMismatch') {
            // Email mismatch
            setLoginStatus('emailMismatch');
        } else {
            // Neither username nor email match
            setShowConfirmation(true);
        }
    };

    const handleConfirmation = async () => {
        // Send a request to the backend to create a new user
        const response = await fetch('/api/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, userId }),
        });
        const data = await response.json();
        if (data.status === 'success') {
             // Signup successful
            setLoginStatus('success');
            // Store user data in local storage
            localStorage.setItem('username', username);
            localStorage.setItem('userId', userId);
            localStorage.setItem('isLoggedOn', 'true');
            // When the user logs in or signs up, set the userId in a cookie
            document.cookie = `userId=${userId}; path=/`;
            // Redirect to index page
            router.push('/');
        } else {
            // Signup failed
            setLoginStatus('error');
        }
    };

    const handleModalClose = () => {
        setShowConfirmation(false);
    };

    return (
        <Layout>
            <div className='container row'>
                <div className='container-fluid row'>
                    <h2 className='text-center col'>Login/Sign-up</h2>
                    <button className="btn btn-dark col-3" onClick={toggleDarkMode}>
                {darkMode ? 'Light Mode' : 'Dark Mode'}
              </button>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <label className="col-3 mt-4">Username: </label>
                        <input type="text" placeholder='username' required value={username} onChange={handleUsernameChange} style={{ borderRadius: '0.3rem', border: '0.01px solid #efefff', padding: '5px'}}/>
                    </div>
                    <br />
                    <div className='row'>
                        <label className="col-3">Email: </label>
                        <input type="email" value={userId} onChange={handleEmailChange} placeholder='example@email.com' required style={{ borderRadius: '0.3rem', border: '0.01px solid #efefff', padding: '5px'}}/>
                    </div>
                    <br />
                    <button className='btn btn-primary col-12 mt-4' type="submit">Login</button>
                </form>
            </div>
            <div className='modal text-center' style={{ display: showConfirmation ? 'block' : 'none' }}>
                    <header>
                    <div className="row">
                        <div className='col-2'></div>
                        <div className='col-8 text-center'>
                            <h2>Confirmation</h2>
                        </div>
                        <div className="col-2">
                            <button><span aria-hidden="true" onClick={handleModalClose}>&times;</span></button>
                        </div>
                    </div>
                    </header>
                    <div className="modal-message">
                        <p>No user found with those credentials.</p>
                        <p>Do you wish to create one?</p>
                    </div>
                    <div className="modal-footer row">
                        <button className='btn btn-primary col-4' onClick={handleConfirmation}>Yes</button>
                        <button className='btn btn-secondary col-4' onClick={handleModalClose}>No</button>
                    </div>
            </div>
            <div className="text-center text-danger mt-4">
                {loginStatus === 'usernameMismatch' && <p>Incorrect username.</p>}
                {loginStatus === 'emailMismatch' && <p>Incorrect email.</p>}
                {loginStatus === 'error' && <p>An error occurred. Please try again later.</p>}
                {loginStatus === 'success' && <p>Login successful.</p>}
            </div>
        </Layout>
    );
};

export default Login;
