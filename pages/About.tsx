// src/pages/About.js
import React from 'react';
import Footer from './components/Footer';
import Layout from './components/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';

const handleGoBack = () => {
  window.history.back();
};

const About = () => {
  return (
    <Layout>
      <div className='container col-8'>
          <br />
          <div className='col'>
            <div className="row">
              <div className="col text-center">
                <h3>Track Your Tasks</h3>
              </div>
              <div className="col">
                <button className='btn fixed btn-info' onClick={handleGoBack}>
                  Go Back
                  </button>
              </div>
            </div><br />
            <p>This is a simple task tracker app built using React. It allows users to track their tasks by adding and deleting them and also tracking their usage statistics.</p>
            <hr />
            <h4>Features</h4>
            <ul>
              <li><strong>Add new tasks:</strong> Users can add tasks by entering a task name and optionally specifying a day and time.</li>
                <li><strong>Delete tasks:</strong> Users can remove tasks from the list.</li>
                <li><strong>Toggle reminder:</strong> Users can toggle a reminder for a task, which will display their tasks boldly so they won't forget.
              </li>
              <li><strong>Usage statistics:</strong> The app tracks the number of tasks added and removed by the user on a daily, weekly, and monthly basis.</li>
              <li><strong>Responsive design:</strong> The app is responsive and works well on both desktop and mobile devices. There's also a feature for toggling between light mode and dark mode.</li>
              <li><strong>Persistent data:</strong> Task data is stored uniquely for each user, so tasks persist even after refreshing the page.</li>
            </ul>
            <hr />
            <h4>Tasks That involve tracking time?</h4>
            <p>Is your task a study session and you may need breaks? Or are you cooking something that may take a while?</p>
            <p>Well, I built this <a href="https://sotonye0808.github.io/js-clock">25+5 Clock</a> just for that! (not exactly just for that but it helps)</p>
            <p>Check it out!</p>
            <hr />
            <h4>Developer</h4>
            <p>Hi, I'm Sotonye Dagogo, a fullstack developer who loves building web applications.</p>
            <p>Check out my <a href="https://github.com/Sotonye0808">github</a > for more projects. Also feel free to contact me about any bugs or issues you come across when using my applications. You can find my e-mail on my github and be sure to use a descriptive subject.</p>
            <hr />
          </div>
          <br />
          <Footer />
          <style jsx>
            {`
            p a{
              color: steelblue;
              text-decoration: none;
              border-color: transparent;
            }
            p a:hover{
              background-color: steelblue;
              color: unset;
              text-decoration: none;
              border: 1px solid;
              border-radius: 0.3rem;
              padding: 0.05em;
            /* body dark mode styles */
            `}
          </style>
      </div>
    </Layout>
    
  );
};

export default About;
