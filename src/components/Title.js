import React from "react";

const Title = () => {
  const handleSubmit = e => {};

  return (
    <section>
      <div className="landing">
        <h1 className="text-main">A Quiz of Ice and Fire</h1>
        <p className="text-secondary">
          Test your knowledge of the Game of Thrones universe
        </p>
        <button type="submit" className="btn-light">
          <span>Click to Start</span>
        </button>
      </div>
    </section>
  );
};

export default Title;
