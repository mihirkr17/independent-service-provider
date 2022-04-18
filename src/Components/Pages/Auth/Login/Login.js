import React, { useState } from 'react';
import './Login.css';
import { Button, Form } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../../firebase.init';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import SocialLogin from '../SocialLogin/SocialLogin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
   const [email, setEmail] = useState('');
   const [pwd, setPwd] = useState('');
   const navigate = useNavigate();
   const location = useLocation();

   let from = location.state?.from?.pathname || "/";

   const [
      signInWithEmailAndPassword,
      user,
      loading,
      error,
   ] = useSignInWithEmailAndPassword(auth);

   // password reset
   const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

   // If any err occurs then err will be show
   let err;
   if (error) {
      err = (
         <div>
            <p className='text-danger'>Error: {error.message}</p>
         </div>
      );
   }

   // Loading when trying to login the site
   let load;
   if (loading || sending) {
      load = <p>Loading...</p>;
   }

   if (user) {
      navigate(from, { replace: true });
   }

   const handleSubmit = (event) => {
      event.preventDefault();
      signInWithEmailAndPassword(email, pwd);
   }

   const goRegister = () => {
      navigate(`/register`);
   }

   const resetPassword = async () => {
      if (email) {
         await sendPasswordResetEmail(email);
         toast('Sent email');
      }
      else {
         toast('please enter your email address');
      }
   }

   return (
      <div className='login_form__section py-5'>
         <div className="container">
            <h2 className="py-5 text-center">Login to HealthCoach</h2>
            <div className="row">
               <div className="col-sm-12 col-lg-4 col-md-6 mx-auto card p-4">
                  <Form onSubmit={handleSubmit} className="mb-4">
                     <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter email" />
                     </Form.Group>

                     <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" onChange={(e) => setPwd(e.target.value)} placeholder="Password" />
                     </Form.Group>

                     <Form.Group>
                        {load}
                        {err}
                     </Form.Group>

                     <Form.Group className='text-center'>
                        <Button variant="primary" type="submit">
                           Login
                        </Button>
                     </Form.Group>
                  </Form>


                  <p className='text-center'>New to HealthCoach ? <span className="text-danger" style={{ cursor: "pointer" }} onClick={goRegister}>Please Register</span></p>
                  <p>Forget Password? <button className='btn btn-link text-primary pe-auto text-decoration-none' onClick={resetPassword}>Reset Password</button> </p>
                  <SocialLogin></SocialLogin>
                  <ToastContainer></ToastContainer>
               </div>

            </div>
         </div>
      </div>
   );
};

export default Login;