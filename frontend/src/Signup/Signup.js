import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './signup.css';


function Signup() {
    const Message = ({ message }) => {
        return (
          <div className="message">
            <p>{message}</p>
          </div>
        );
      };

  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== repeatPassword) {
        setMessage('Passwords do not match!');
        return;
      }
    try {
      const response = await fetch('http://localhost:8000/api/register/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        setMessage('Registration successful!');
        navigate('/login');
      } else {
        setMessage(data.msg);
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('Something went wrong!');
    }
  };

  

  

  return (

    <form onSubmit={handleSubmit} className='signup-container'>
        <div className="container">
            <h1>Sign Up</h1>
            <p>Please fill in this form to create an account.</p>
            <hr/>
            <label htmlFor="name"><b>Name</b></label>
            <input type="text" placeholder="Enter Name" name="name" required onChange={(e) => setName(e.target.value)}/>
            <label htmlFor="email"><b>Email</b></label>
            <input type="text" placeholder="Enter Email" name="email" required onChange={(e) => setEmail(e.target.value)}/>
            <label htmlFor="psw"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="psw" required onChange={(e) => setPassword(e.target.value)}/>
            <label htmlFor="psw-repeat"><b>Repeat Password</b></label>
            <input type="password" placeholder="Repeat Password" name="psw-repeat" required onChange={(e) => setRepeatPassword(e.target.value)}/>
            
            <div className="clearfix">
                {/* <button type="button" className="cancelbtn">Cancel</button> */}
                <button type="submit" className="signupbtn" onClick={handleSubmit}>Sign Up</button>
            </div>
            {message && <Message message={message} />}

            <p>Already have an account ? <a href="#signin" onClick={() => navigate('/login')}>Sign in</a></p>
            <p>Want to go Homepage ? <a href="#home" onClick={() => navigate('/')}>Homepage</a></p>
            
        </div>
    </form>
    
    
    
  );
}

export default Signup;
