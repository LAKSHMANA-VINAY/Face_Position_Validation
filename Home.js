// Home.js
import React from 'react';

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to our Face Position Validation App!</h1>
      <p>Please click on the button below to start the validation process.</p>
      <button onClick={() => window.location.href = '/capture'}>Start Validation</button>
    </div>
  );
}

export default Home;
