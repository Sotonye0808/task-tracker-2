import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import clientPromise from '../lib/mongodb';
import { GetServerSideProps } from 'next';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import Layout from './components/Layout';

interface User {
  _id: string;
  username: string;
  userId: string; //email
  daily: {
    tasksAdded: number;
    tasksRemoved: number;
  };
  weekly: {
    tasksAdded: number;
    tasksRemoved: number;
  };
  monthly: {
    tasksAdded: number;
    tasksRemoved: number;
  };
  tasks: [{
    _id: string;
    title: string;
    description: string;
    date: Date;
    reminder: boolean;
    createdAt: Date;
  }];
  lastUpdated: Date;
}
interface UserData {
  users: User[];
  error?: string;
}

const TasksPage: React.FC<UserData> = ({ users, error }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [expandedTasks, setExpandedTasks] = useState<string[]>([]);
  const [isDeleting, setIsDeleting] = useState(false);
  const [taskId, setTaskId] = useState<string | null>(null);
  const [taskTitle, setTaskTitle] = useState<string>('');
  const [updatedUsers, setUpdatedUsers] = useState<User[]>(users);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [username, setUsername] = useState('');

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

  useEffect(() => {
    // Check if localStorage is available (running on the client-side)
    if (typeof window !== 'undefined') {
      const storedUsername = localStorage.getItem('username');
      setUsername(storedUsername || 'guest');
    }
  }, []);


  // reset stats block start
  useEffect(() => {
    const lastUpdated = new Date(users[0]?.lastUpdated).toDateString(); // Assuming users[0] contains the current user's data
  
    // Get today's date
    const today = new Date().toDateString();
    
    if (users[0] && lastUpdated && lastUpdated !== today) {
      // Check if it's a new day
      const lastResetDay = new Date(lastUpdated).getDay();
      const todayDay = new Date().getDay();
      const isSameDay = lastResetDay === todayDay;
  
      // Check if it's a new week
      const lastResetWeek = getWeekNumber(new Date(lastUpdated));
      const todayWeek = getWeekNumber(new Date());
      const isSameWeek = lastResetWeek === todayWeek;
  
      // Check if it's a new month
      const lastResetMonth = new Date(lastUpdated).getMonth();
      const todayMonth = new Date().getMonth();
      const isSameMonth = lastResetMonth === todayMonth;
  
      if (!isSameDay) {
        // Make the API call to reset daily stats
        fetchResetDailyStatsAPI();
      }
  
      if (!isSameWeek) {
        // Make the API call to reset weekly stats
        fetchResetWeeklyStatsAPI();
      }
  
      if (!isSameMonth) {
        // Make the API call to reset monthly stats
        fetchResetMonthlyStatsAPI();
      }
  
      // Update the lastUpdated date
      localStorage.setItem('lastResetStatsDate', today);
    }
  }, [users]);
  
  const fetchResetDailyStatsAPI = async () => {
    try {
      const userId = localStorage.getItem('userId');
      const response = await fetch('/api/reset-daily-stats', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId,
        }),
    });
      if (!response.ok) {
        throw new Error('Failed to reset daily statistics');
      }
    } catch (error) {
      console.error('Error resetting daily statistics:', error);
    }
  };
  
  const fetchResetWeeklyStatsAPI = async () => {
    try {
      const userId = localStorage.getItem('userId');
      const response = await fetch('/api/reset-weekly-stats', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId,
        }),
    });
      if (!response.ok) {
        throw new Error('Failed to reset weekly statistics');
      }
    } catch (error) {
      console.error('Error resetting weekly statistics:', error);
    }
  };
  
  const fetchResetMonthlyStatsAPI = async () => {
    try {
      const userId = localStorage.getItem('userId');
      const response = await fetch('/api/reset-monthly-stats', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId,
        }),
    });
      if (!response.ok) {
        throw new Error('Failed to reset monthly statistics');
      }
    } catch (error) {
      console.error('Error resetting monthly statistics:', error);
    }
  };
  
  // Function to get the week number from a date
  const getWeekNumber = (date: Date) => {
    const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
    d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));
    const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
    const weekNo = Math.ceil((((d.getTime() - yearStart.getTime()) / 86400000) + 1) / 7);
    return weekNo;
  };
// reset stats block end

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  if (error) {return (
        <Layout>
          <div className="row">
            <main role="main" className="col-8">
              <h2 className='mt-2'>An error occured</h2>
              <div>
                <p>{error}</p>
              </div>
            </main>
            <nav className="col navbar mt-2">
              <ul className="nav flex-column">
                <li className="nav-item">
                  <Link href="/" legacyBehavior passHref>
                    <a className="nav-link">Tasks</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="./TaskForm" legacyBehavior passHref>
                    <a className="nav-link">Add Tasks</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="./Stats" legacyBehavior passHref>
                    <a className="nav-link">Stats</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="./About" legacyBehavior passHref>
                    <a className="nav-link">About</a>
                  </Link>
                </li>
              </ul>
              <button className="btn fixed btn-dark mt-3" onClick={toggleDarkMode}>
                {darkMode ? 'Light Mode' : 'Dark Mode'}
              </button>
            </nav>
          </div>
          <div className='mt-5'>
            <Footer />
          </div>
        </Layout>
      );
    }
  

  const toggleTaskExpansion = (taskId: string) => {
    setExpandedTasks((prevExpandedTasks) => {
      if (prevExpandedTasks.includes(taskId)) {
        return prevExpandedTasks.filter((id) => id !== taskId);
      } else {
        return [...prevExpandedTasks, taskId];
      }
    });
  };

  const handleDelete = async () => {
    if (!taskId || isDeleting) return;

    setIsDeleting(true);

    try {
      // Retrieve userId from local storage
      const userId = localStorage.getItem('userId');
      if (!userId) {
        throw new Error('User not logged in');
      }

      const res = await fetch(`/api/remove-task?taskId=${taskId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId,
        }),
      });

      if (!res.ok) {
        throw new Error('Failed to remove task');
      }

      // Remove the deleted task from the UI
      const updatedUsersCopy = [...updatedUsers];
      const updatedUsersTasks = updatedUsersCopy[0].tasks.filter(task => task._id !== taskId) as User['tasks'];
      updatedUsersCopy[0].tasks = updatedUsersTasks;
      setUpdatedUsers(updatedUsersCopy);

    } catch (error) {
      console.error('Error removing task:', error);
    } finally {
      setIsDeleting(false);
      setTaskId(null); // Clear taskToDelete state
      setShowConfirmation(false); // Close the confirmation modal after deletion
    }
  };

  const openConfirmationModal = (task: User['tasks'][0]) => {
    setTaskId(task._id);
    setTaskTitle(task.title); // Set the task title
    setShowConfirmation(true);
  };

  // Function to check if an array has items
  const hasItems = (arr: any[]) => Array.isArray(arr) && arr.length > 0;

  return (
    <Layout>
      <div>
          <div className="row">
          <main role="main" className="col-8">
            {users.length > 0 ? (
              users.map((user) => (
                <div key={user._id} className="mb-4">
                  <h2 className='mb-4'>Welcome back <a href="#">{user.username}</a>!</h2>
                  {hasItems(user.tasks) ? <h3 className='mt-2'>Here are your tasks</h3> : <h3 className='mt-2'>You have no tasks</h3>}
                  {hasItems(user.tasks) ? (
                    <ul className="list-group">
                      {user.tasks.map((task, index) => (
                        <li key={index} className={task.reminder ? 'list-group-item task-item fw-bold text-uppercase' : 'list-group-item task-item'} onClick={() => toggleTaskExpansion(task._id)}>
                          <h4 className={task.reminder ? 'fw-bold' : ''}>{task.title}</h4>
                          {expandedTasks.includes(task._id) && (
                            <div>
                              <p><u>Description</u>: {task.description}</p>
                              <p><u>Date & Time</u>: {new Date(task.date).toLocaleString('en-GB', { dateStyle: 'short', timeStyle: 'short' })}</p>
                              <button onClick={() => openConfirmationModal(task)} disabled={isDeleting} className='btn btn-danger'>
                                {isDeleting ? 'Removing Task...' : 'Remove'}
                              </button>
                            </div>
                          )}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <div>
                      <p>Try adding some <a href="./TaskForm">here</a>.</p>
                    </div>
                  )}
                </div>
              ))
            ) : (
              <div>
                <h2 className='mb-4'>Welcome back <a href="#">{username}</a>!</h2>
                <h3 className='mt-2'>You have no tasks</h3>
                <div>
                  <p>Try adding some <a href="./TaskForm">here</a>.</p>
                  <p>Please <a href="./Login">login</a> if you haven't. You can't really do much without it!</p>
                </div>
              </div>
            )}
          </main>

            <nav className="col navbar mt-2">
              <ul className="nav flex-column">
                <li className="nav-item">
                  <Link href="/" legacyBehavior passHref>
                    <a className="nav-link">Tasks</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="./TaskForm" legacyBehavior passHref>
                    <a className="nav-link">Add Tasks</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="./Stats" legacyBehavior passHref>
                    <a className="nav-link">Stats</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="./About" legacyBehavior passHref>
                    <a className="nav-link">About</a>
                  </Link>
                </li>
              </ul>
              <button className="btn fixed btn-dark mt-3" onClick={toggleDarkMode}>
                {darkMode ? 'Light Mode' : 'Dark Mode'}
              </button>
            </nav>
          </div>
          <div className='mt-5'>
            <Footer />
          </div>
        </div>
        <div className='modal text-center'>
          <header>
            <div className='row'>
              <div className='col-2'></div>
              <div className='col-8 text-center'>
                <h2>Confirmation</h2>
              </div>
              <div className='col-2'>
                <button>
                  <span aria-hidden="true" onClick={() => setShowConfirmation(false)}>&times;</span>
                </button>
              </div>
            </div>
          </header>
          <div className='modal-message'>
            <p>Are you sure you want to remove the task "{taskTitle}"?</p> <p>This action cannot be undone!</p>
          </div>
          <div className='modal-footer row'>
            <button className="btn btn-secondary col-4" onClick={() => setShowConfirmation(false)}>
              Cancel
            </button>
            <button className="btn btn-danger col-4" onClick={handleDelete} disabled={isDeleting}>
              {isDeleting ? 'Removing Task...' : 'Remove'}
            </button>
          </div>
        <style jsx global>
          {`
          * {
            transition: all 0.25s;
          }
          /*styling for the body element to also respond to the theme toggle*/
          body {
            background-color: #ffffff;
            color: #000000;
          }
          .dark-mode {
            background-color: #121212;
            color: #ffd700; /* Gold text color */
          }
          .dark-mode input[type="text"],
          .dark-mode input[type="datetime-local"],
          .dark-mode textarea,
          .dark-mode .task-item, .dark-mode ul{
            background-color: #121212;
            color: #ffd700; /* Gold text color */
          }
          .dark-mode .task-item:hover{
            background-color: #333;
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
          .task-item {
            cursor: pointer;
          }
          .task-item:hover {
            background-color: #f9f9f9;
          }
          input[type="text"], form input[type="datetime-local"], form textarea {
            border-radius: 30px;
          }
          /* styles for the modal and its components */
          .modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            display: ${showConfirmation ? 'block' : 'none'};
          }
          .modal header {
            background-color: #333;
            color: #fff;
            padding: 1rem;
          }
          .modal-message {
            background-color: #fff;
            padding: 1rem;
          }
          .modal-footer {
            display: flex;
            margin: 0 auto;
            left: 0;
            justify-content: center;
            padding: 1rem;
          }
          .modal header button {
            margin-left: 1rem;
            border-radius: 25%;
            background-color: transparent;
          }
          .modal header button:hover {
            background-color: #f00;
          }
          .modal header button span {
            font-weight: bold;
            font-size: 1rem;
            color: #fff;
          }
          /* styles for modal in dark mode */
          .dark-mode .modal {
            background-color: rgba(0, 0, 0, 0.5);
          }
          .dark-mode .modal header {
            background-color: ##333;
            color: #ffd700;
          }
          .dark-mode .modal-message {
            background-color: #121212;
            color: #ffd700;
          }
          .dark-mode .modal-footer {
            background-color: #121212;
          }

          h2 a{
            color: steelblue;
            text-decoration: none;
            border-color: transparent;
          }
          h2 a:hover{
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

export default TasksPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const client = await clientPromise;
    const db = client.db("test");

    // Get user's email from cookie as userId
    const userId = context.req.cookies.userId;

    // Check if the user has any tasks
    const userTasks = await db.collection("userdatas").findOne({ userId: userId });

    if (!userTasks || !userTasks.tasks || userTasks.tasks.length === 0) {
      // If the user has no tasks, return an empty array for the users prop
      return { props: { users: [] } };
    }

    // If the user has tasks, retrieve their data from the database
    const tasks = await db
      .collection("userdatas")
      .find({ userId: userId })
      .toArray();
    return {
      props: {
        users: JSON.parse(JSON.stringify(tasks)),
      },
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: {
        users: [],
        error: 'Error fetching data. Please try again later.',
      },
    };
  }
};



