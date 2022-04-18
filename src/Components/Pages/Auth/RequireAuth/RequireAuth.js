import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../../firebase.init';

const RequireAuth = ({ children }) => {
   const [user, loading] = useAuthState(auth);
   const location = useLocation();

   const loadingStyle = {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)"
   }

   // if loading
   if (loading) {
      return (
         <div>
            <p style={loadingStyle}>Loading...</p>
         </div>
      );
   }

   // if user not logged in then navigate to login page
   if (!user) {
      return <Navigate to='/login' state={{ from: location }} replace></Navigate>
   }
   return children;
};

export default RequireAuth;