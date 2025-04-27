import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
         

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
// import React, { Suspense } from 'react';
// import ReactDOM from 'react-dom/client';

// // ✅ User type decide करो (admin या user)
// const userType = 'admin'; // इसे 'user' भी कर सकते हो

// // ✅ Path mapping (file का नाम userType के हिसाब से)
// const fileMap = {    
//   user: './AppUser.js',
//   admin: './AppAdmin.js',
// };

// // ✅ Dynamic import with React.lazy
// const DynamicComponent = React.lazy(() => import(`${fileMap[userType]}`));

// // ✅ Rendering
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <Suspense fallback={<div>Loading...</div>}>
//     <DynamicComponent />
//   </Suspense>
// );
