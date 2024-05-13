import React from 'react';
import { useRouter } from 'next/router';

const Footer: React.FC = () => {
    const router = useRouter();

    const handleLogout = () => {
        // Clear user data from local storage
        localStorage.removeItem('username');
        localStorage.removeItem('userId');
        localStorage.removeItem('isLoggedOn');
        // Clear user data from cookies
        document.cookie = 'userId=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
        // Redirect to login page after logout
        router.push('/Login');
    };

    return (
        <div className='footer'>
            <button className='btn btn-danger mb-2' onClick={handleLogout}>Logout</button>
            <p>Task Tracker &copy; {new Date().getFullYear()}
                <br />
                Version <strong>2.1.2</strong></p>
            <style jsx>
                {`
                .footer {
                left: 0;
                bottom: 0;
                width: 100%;
                text-align: center;
                }

                .footer p{
                cursor: pointer;
                width: fit-content;
                margin: 0 auto;
                }
                `}
            
            </style>
        </div>
    );
}

export default Footer;