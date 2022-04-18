import React from 'react';

const Blog = () => {
   return (
      <section className='blog__section' style={{ minHeight: "80vh" }}>
         <div className="container">
            <h2 className="text-center py-5">
               Qna
            </h2>
            <div className="row">
               <div className="col-lg-12 py-4">
                  <article className="qna">
                     <strong>1st. Difference between authorization and authentication ?</strong>
                     <p className='pt-3'>
                        authentication is the process of verifying who someone is, and authorization
                        is the process of verifying what specific applications, files, and data a user has access.
                        Authentication verifies who the user is. and Authorization determines what resources a user can access to.
                        Authentication works through otp, bio-metric, password or email information. and Authorization works through setting that
                        are implemented by organization.
                     </p>
                  </article>
               </div>

               <div className="col-lg-12 py-4">
                  <article className="qna">
                     <strong>2nd. Why using firebase ? What other options do you have to implement authentication ?</strong>
                     <p className='pt-3'>
                        I using firebase on my project because firebase authentication is more popular and easy to implement,
                        And it provides by google. Firebase have many authentication system like Facebook Login, Google Login,
                        Github Login, Email Login etc.
                        Where i can use this authenticate system for someone who want to access my website with full features.
                        Firebase Authentication provides backend services, easy-to-use SDKs,
                        and ready-made UI libraries to authenticate users to my app.
                        <br />
                        Other option to implement authentication is possible, there are many option like
                        Auth0, MongoDB, Okta, Passport, Amazon Cognito etc.
                     </p>
                  </article>
               </div>

               <div className="col-lg-12 py-4">
                  <article className="qna">
                     <strong>3rd. What other services does firebase provide other than authentication ?</strong>
                     <p className='pt-3'>
                        There are many service which Firebase provide.
                        Here some list i describe 
                        <ul>
                           <li>Cloud Firestore</li>
                           <li>Cloud Function</li>
                           <li>Hosting</li>
                           <li>Google analytic</li>
                           <li>Cloud Storage</li>
                           <li>Cloud Messaging</li>
                           <li>Realtime Database</li>
                        </ul>
                     </p>
                  </article>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Blog;