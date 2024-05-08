import React from 'react';

const Footer: React.FC = () => {
    return (
        <div className='footer'>
            <p>Task Tracker &copy; {new Date().getFullYear()}
                <br />
                Version <strong>2.1.1</strong></p>
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