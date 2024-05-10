// Stats.tsx
import React from 'react';
import clientPromise from '../lib/mongodb';
import { GetServerSideProps } from 'next';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import Layout from './components/Layout';

interface User {
  _id: string;
  userId: string;
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
}

const handleGoBack = () => {
  window.history.back();
};

const Stats: React.FC<UserData> = ({ users }) => {

  if (!users || users.length === 0) {
    console.log("No users found");
    // If no users are found or no stats, display a message and link directing users to TaskForm page
    return (
      <Layout>
        <div className="container">
          <h2 className="mb-4 text-center mt-4">Your Stats</h2>
          <div className="alert alert-info text-center" role="alert">
            No stats found. <a href="/TaskForm">Add a task</a>
          </div>
          <button className='btn fixed btn-info' onClick={handleGoBack}>
              Go Back
            </button>
          <style jsx>
            {`
            a{
              color: steelblue;
              text-decoration: none;
              border-color: transparent;
            }
            a:hover{
              background-color: steelblue;
              color: unset;
              text-decoration: none;
              border: 1px solid;
              border-radius: 0.3rem;
              padding: 0.05em;
            }
            `}
          </style>
        </div>
      </Layout>
    );
  }


  return (
    <Layout>
      <div className="container-fluid row">
        <div className="col-2"></div>
        <div className='col-8'>
          <h2 className="mb-4 text-center mt-4">Your Stats</h2>
          <div className='row'>
            <div className="col-2"></div>
          {users.map((user) => (
            <div key={user._id} className='col-8'>
              <div className="col-md mb-4">
                <div className="card bg-primary">
                  <div className="card-body">
                    <h3 className="card-title">Daily</h3>
                    <p className="card-text">Tasks added: {user.daily.tasksAdded}</p>
                    <p className="card-text">Tasks removed: {user.daily.tasksRemoved}</p>
                  </div>
                </div>
              </div>
              <div className="col-md mb-4">
                <div className="card bg-secondary">
                  <div className="card-body">
                    <h3 className="card-title">Weekly</h3>
                    <p className="card-text">Tasks added: {user.weekly.tasksAdded}</p>
                    <p className="card-text">Tasks removed: {user.weekly.tasksRemoved}</p>
                  </div>
                </div>
              </div>
              <div className="col-md mb-4">
                <div className="card bg-info">
                  <div className="card-body">
                    <h3 className="card-title">Monthly</h3>
                    <p className="card-text">Tasks added: {user.monthly.tasksAdded}</p>
                    <p className="card-text">Tasks removed: {user.monthly.tasksRemoved}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="col-2">
          <button className='btn fixed btn-info' onClick={handleGoBack}>
                Go Back
          </button>
        </div>
          </div>
        </div>
        <Footer />
      </div>
    </Layout>
  );
};

export default Stats;

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const client = await clientPromise;
    const db = client.db("test");

    // Get user's IP address from request headers
    const userId = `::ffff:${context.req.headers['x-forwarded-for'] || context.req.socket.remoteAddress}`;

    const stats = await db
      .collection("userdatas")
      .find({ userId: userId })
      .toArray();
    return {
      props: {
        users: JSON.parse(JSON.stringify(stats)),
      },
    };
  } catch (e) {
    console.error(e);
    return {
      props: {
        users: [],
      },
    };
  }
};
