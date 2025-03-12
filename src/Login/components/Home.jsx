import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container text-center mt-5">
      <h1>Welcome to Our Website</h1>
      <Link to="/register" className="btn btn-primary mt-3">Go to Register</Link>
    </div>
  );
}

export default Home;
