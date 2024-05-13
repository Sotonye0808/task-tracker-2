import { useState } from 'react';
import { useRouter } from 'next/router'; // Import useRouter hook to redirect after form submission
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import Layout from './components/Layout';

const TaskForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [reminder, setReminder] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter(); // Initialize useRouter hook

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (!title || isSubmitting) return;

    setIsSubmitting(true);

    try {
      // Retrieve userId from local storage
      const userId = localStorage.getItem('userId');
      if (!userId) {
        throw new Error('User not logged in');
      }

      const res = await fetch('/api/add-task', { // Send a POST request to the API route
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId,
          title,
          description,
          date,
          reminder,
        }),
      });

      if (!res.ok) {
        throw new Error('Failed to add task');
      }

      // Redirect to the home page after successful task addition
      router.push('/');
    } catch (error) {
      console.error('Error adding task:', error);
      setIsSubmitting(false);
    }
  };

  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <Layout>
        <div className="row">
          <div className='col-1'></div>
          <div className='col-10'>
            <form onSubmit={handleSubmit} className='mt-3 row'>
              <div className='col'>
                <div className="col-12 text-center">
                  <h2 className='col'>ADD SOME TASKS!</h2>
                </div>
                <div className="container">
                  <div className='row' id="formTaskTitle">
                    <label className='col-1 mt-4'>Title:</label>
                    <input type="text"  placeholder="Enter task title" value={title} onChange={(e) => setTitle(e.target.value)} style={{ borderRadius: '0.3rem', border: '0.01px solid #efefff', padding: '5px'}} />
                  </div>
                  <div className='row' id="formTaskDescription">
                    <label className='col-1 mt-4'>Description:</label>
                    <textarea
                      rows={3}
                      placeholder="Enter task description"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      style={{ borderRadius: '0.3rem', border: '0.01px solid #efefff', padding: '5px' }}
                    />
                  </div>
                  <div className='row' id="formTaskDate">
                    <label className='col-1  mt-4'>Date:</label><br />
                    <input type="datetime-local" value={date} onChange={(e) => setDate(e.target.value)} style={{ borderRadius: '0.3rem', border: '0.01px solid #efefff', padding: '5px' }} />
                  </div>
                  <div className='row mt-4' id="formTaskReminder">
                    <label className='col-11'>Set Reminder:</label>
                    <input type="checkbox" className='col-1' checked={reminder} onChange={(e) => setReminder(e.target.checked)} style={{cursor: 'pointer' }} />
                  </div>
                  <button className="btn btn-primary col-12 mt-4" type="submit" disabled={isSubmitting}>
                  {isSubmitting ? 'Adding Task...' : 'Add Task'}
                  </button>
                  <div className="col mt-2">
                  <button className='btn fixed btn-info' onClick={handleGoBack}>
                    Go Back
                  </button>
              </div>
                </div>
              </div>
            </form>
          </div>
          <div className='col-2'></div>
          <div className="mt-4">
          <Footer />
          </div>
        </div>
    </Layout>
  );
};

export default TaskForm;
