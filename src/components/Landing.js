import React from 'react';

const Landing = () => {
  return (
    <section className="landing">
      <h1 className="text-main">A Quiz of Ice and Fire</h1>
      <p className="text-secondary">
        Test your knowledge of the Game of Thrones universe
      </p>
      <button type="submit" class="btn-light">
        <p>Click to Start</p>
      </button>
    </section>
  );
};

export default Landing;
