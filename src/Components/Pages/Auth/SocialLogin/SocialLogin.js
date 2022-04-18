import React from 'react';
import './SocialLogin.css';
import gLogo from '../../../../Assets/logo/gLogo.png';
import auth from '../../../../firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';


const SocialLogin = () => {
   const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
   const navigate = useNavigate();
   const location = useLocation();

   let from = location.state?.from?.pathname || "/";

   let errMsg;
   if (error) {
      errMsg = <div><p>Error: {error.message}</p></div>;
   };

   // Loading when trying to login the site
   let load;
   if (loading) {
      load = <p>Loading...</p>;
   }

   if (user) {
      navigate(from, { replace: true });
   }

   return (
      <div className="third_party_auth p-2 mt-2">
         {errMsg} <br />
         {load}
         <div className="third_party_auth_btn d-flex align-items-center justify-content-evenly">
            <h6 className="py-3">Login with :</h6>
            <button onClick={() => signInWithGoogle()} className='g_btn'><img src={gLogo} alt="" />oogle</button>
         </div>
      </div>
   );
};

export default SocialLogin;