import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../../firebase';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

      let errorElement;

      if(user) {
        navigate('/')
      }
      if(error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
      }

      
      const handleSubmit = async (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        
        await signInWithEmailAndPassword(email, password)
        
      }
      const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
      const resetPassword = async() => {
        const email = emailRef.current.value;
        await sendPasswordResetEmail(email)

      } 
    return (
        <div className='container w-50 mx-auto'>
            {/* <PageTitle title="Login"></PageTitle> */}
            <h2 className='text-primary text-center mt-2 mb-5'>Please Login</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control ref={emailRef}  type="email" placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Button variant="primary w-50 mx-auto d-block mb-2" type="submit">
                    Login
                </Button>
            </Form>
            {errorElement}
         
            <p>New to Genius Car? <Link to="/register" className='text-primary pe-auto text-decoration-none' >Please Register</Link> </p>
            <p>Forget Password? <button className='btn btn-link text-primary pe-auto text-decoration-none'>Reset Password</button> </p>
            
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;