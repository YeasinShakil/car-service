import React, { useState } from 'react';
import './register.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase';
import { async } from '@firebase/util';
import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from '../../../shared/loading/Loading';

const Register = () => {
  const [agree, setAgree] = useState(false);
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [updateProfile, updating] = useUpdateProfile(auth);
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || '/';

  if (user) {
    // console.log('user====>>>',user)
  }
  if(loading || updating){
    return <Loading></Loading>
}

  const handleRegister = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
    // console.log('update profile');
    navigate(from, {replace:true});

  }
  return (
    <div className='register-form container w-50 mx-auto'>
      <h2 className='text-primary mt-3 mb-5' style={{ textAlign: 'center' }}>Please Register</h2>
      <form onSubmit={handleRegister}>
        <input type="text" name="name" id="" placeholder='Your Name' required />

        <input type="email" name="email" id="" placeholder='Email Address' required />

        <input type="password" name="password" id="" placeholder='Password' required />
        <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
        {/* <label className={agree ? 'ps-2': 'ps-2 text-danger'} htmlFor="terms">Accept Genius Car Terms and Conditions</label> */}
        <label className={`ps-2 ${agree ? 'text-primary' : 'text-danger'}`} htmlFor="terms">Accept Genius Car Terms and Conditions</label>
        <input
          disabled={!agree}
          className='w-50 mx-auto btn btn-primary mt-2'
          type="submit"
          value="Register" />
      </form>
      <p>Already have an account? <Link to="/login" className='text-primary pe-auto text-decoration-none'>Please Login</Link> </p>

      <SocialLogin></SocialLogin>

    </div>
  );
};

export default Register;