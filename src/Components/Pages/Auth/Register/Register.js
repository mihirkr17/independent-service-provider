import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';



const Register = () => {
   const [email, setEmail] = useState('');
   const [pwd, setPwd] = useState('');
   const navigate = useNavigate();

   // register with email pwd
   const [
      createUserWithEmailAndPassword,
      user,
      loading,
      error,
   ] = useCreateUserWithEmailAndPassword(auth);

   let err;
   if (error) {
      err = (
         <div>
            <p className='text-danger'>Error: {error.message}</p>
         </div>
      );
   }

   // Loading when trying to signup the site
   let load;
   if (loading) {
      load = <p>Loading...</p>;
   }

   if (user) {
      navigate('/login');
   }

   const goLogin = () => {
      navigate('/login');
   }

   // Register Button
   const handleRegister = (e) => {
      e.preventDefault();
      createUserWithEmailAndPassword(email, pwd);
   }


   return (
      <div className='py-5 register__section'>
         <div className="container">
            <h2 className='py-5 text-center'>Register Here</h2>
            <div className="row">
               <div className="col-lg-4 col-md-6 col-sm-12 mx-auto card p-4">
                  <Form onSubmit={handleRegister}>
                     <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" name='name' placeholder="Enter username" />
                     </Form.Group>

                     <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name='email' onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" />
                     </Form.Group>

                     <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name='password' onChange={(e) => setPwd(e.target.value)} placeholder="Password" />
                     </Form.Group>

                     <Form.Group>
                        {err} <br />
                        {load}
                     </Form.Group>

                     <Form.Group className="text-center mb-4">
                        <Button variant="primary" type="submit">
                           Register
                        </Button>
                     </Form.Group>

                  </Form>

                  <p className="text-center">
                     Already Logged In ?
                     <span style={{ cursor: "pointer" }} className='text-danger ms-2' onClick={goLogin}>Go to Login</span>
                  </p>

                  <SocialLogin></SocialLogin>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Register;