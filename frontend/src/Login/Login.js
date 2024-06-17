import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import AuthService from '../authService';

function Login() {

    const Message = ({ message }) => {
        return (
          <div className="message">
            <p>{message}</p>
          </div>
        );
      };

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const isSuccess = await AuthService.login(email, password);
        if (isSuccess) {
            setMessage('Login successful!');
            navigate('/to-do-app'); // Navigate to the dashboard home page
        } else {
            setMessage('Invalid email or password');
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit} >
                <div className="container">
                    <h1>Sign In</h1>
                    <p>Please fill in this form to sign in.</p>
                    <hr/>
                    <label htmlFor="email"><b>Email</b></label>
                    <input type="text" placeholder="Enter Email" name="email" required value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <label htmlFor="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="psw" required value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <div className="clearfix">
                        <button type="submit" className="signinbtn">Sign In</button>
                    </div>
                    {message && <Message message={message} />}
                    <p>Don't have an account? <a href="#signup" onClick={() => navigate('/signup')}>Sign up</a></p>
                    <p>want to go Homepage ? <a href="#home" onClick={() => navigate('/')}>Homepage</a></p>
                </div>
            </form>
        </div>
    );
    
    // return (
    // <form action="#" className="mx-auto max-w-[24rem] text-left" onSubmit={handleSubmit} id="card">
    // <Card className="w-96">
    // <CardHeader
    //      variant="gradient"
    //      color="gray"
    //      className="mb-4 grid h-28 place-items-center"
    //    >
    // <Typography variant="h3" color="white">
    // Sign In
    // </Typography>
    // </CardHeader>
    // <CardBody className="flex flex-col gap-4">
    // <Input label="Email" size="lg" value={email} onChange={(e) => setEmail(e.target.value)}/>
    // <Input label="Password" size="lg" value={password} onChange={(e) => setPassword(e.target.value)}/>
    // <div className="-ml-2.5">
    // <Checkbox label="Remember Me" />
    // </div>
    // </CardBody>
    // <CardFooter className="pt-0 flex flex-col gap-4" >
    // {message && <Message message={message} />}
    // <Button
    //          variant="outlined"
    //          size="lg"
    //          className="mt-6 flex h-12 items-center justify-center gap-2"
    //          fullWidth
    //        >
    // <img
    // src={https://www.material-tailwind.com/logos/logo-google.png}
    // alt="google"
    // className="h-6 w-6"
    // />{" "}
    // sign in with google
    // </Button>
    // <Button variant="gradient" fullWidth type="submit">
    // Sign In
    // </Button>
    // <Typography variant="small" className="mt-6 flex justify-center">
    // Don't have an account?
    // <Typography
    // as="a"
    // href="#signup"
    // variant="small"
    // color="blue-gray"
    // className="ml-1 font-bold"
    // onClick={() => navigate('/signup')}
    // >
    // Sign up
    // </Typography>
    // </Typography>
    // </CardFooter>
    // </Card>
    // </form>
    // );
    }
    
    export default Login;