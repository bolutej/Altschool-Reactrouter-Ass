import React from 'react';
import {Route, Routes,Link} from 'react-router-dom';
import Home from './Components/Home';
import User from './Components/User'
import './style.css';
import { ErrorBoundary } from './Components/ErrorBoundary';

const Error = () => {
  return (
    <div>
    <h1>404 Page</h1>
    </div>
  )
}

function App() {
    return (
    <div>
      <div className='main-nav'>
        <Link to="/"  className='nav'>Home</Link>
        <Link to="/user" className='nav'>Users</Link>
        </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<ErrorBoundary><User /></ErrorBoundary>} />
        <Route
          path="*"
          element={Error}
        />
      </Routes>
    </div>
  );
}

export default App;
