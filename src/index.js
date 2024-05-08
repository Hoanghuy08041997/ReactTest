import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

function App() {
  const fullName = "Hoang Duc Huy";
  const className = "SE17D08";
  const schoolName = "FBTU";
  const description = "This is a React application displaying user information. Let's go";

  return (
    <div>
      <h1>User Information</h1>
      <p>Full Name: {fullName}</p>
      <p>Class: {className}</p>
      <p>School: {schoolName}</p>
      <p>Description: {description}</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
