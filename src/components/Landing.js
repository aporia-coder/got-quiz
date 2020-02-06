import React, { useState } from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <section>
      <div className="landing">
        <h1 className="text-main">A Quiz of Ice and Fire</h1>
        <p className="text-secondary">
          Test your knowledge of the Game of Thrones universe
        </p>
        <Link to="/game" className="btn-light">
          Click to Start
        </Link>
      </div>
    </section>
  );
};

export default Landing;
