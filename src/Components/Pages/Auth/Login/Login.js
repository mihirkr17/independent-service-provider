import React, { useRef } from 'react';
import './Login.css';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Login = () => {
   const navigate = useNavigate();
   const emailRef = useRef("");
   const pwdRef = useRef("");

   const handleSubmit = (event) => {
      event.preventDefault();

      const email = emailRef.current.value;
      const pwd = pwdRef.current.value;

   }

   const goRegister = () => {
      navigate(`/register`);
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
                        <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
                     </Form.Group>

                     <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" ref={pwdRef} placeholder="Password" />
                     </Form.Group>
                     <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                     </Form.Group>

                     <Form.Group className='text-center'>
                        <Button variant="primary" type="submit">
                           Login
                        </Button>
                     </Form.Group>
                  </Form>
                  <p className='text-center'>New to HealthCoach ? <span className="text-danger" style={{ cursor: "pointer" }} onClick={goRegister}>Please Register</span></p>
               </div>

               
            </div>
         </div>
      </div>
   );
};

export default Login;