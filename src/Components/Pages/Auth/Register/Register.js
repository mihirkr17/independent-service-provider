import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';


const Register = () => {
   const [email, setEmail] = useState('');
   const [pwd, setPwd] = useState('');
   const navigate = useNavigate();
   const [
      createUserWithEmailAndPassword,
      user,
      loading,
      error,
   ] = useCreateUserWithEmailAndPassword(auth);

   if (user) {
      navigate('/login');
   }

   const goLogin = () => {
      navigate('/login');
   }

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

                  <div className="third_party_auth p-4 mt-4">
                     <h4 className="py-3">Sign Up with</h4>
                     <div className="third_party_auth_btn d-flex align-items-center justify-content-evenly">
                        <Button>Google</Button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Register;