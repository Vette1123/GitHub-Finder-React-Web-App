import React from "react";

function About() {
  return (
    <div className="container mx-auto px-3 pb-12 text-center">
      <h1 className="text-6xl mb-4">Github Finder Web App</h1>
      <div className="stats stats-vertical lg:stats-horizontal shadow-lg">
        <div className="stat">
          <div className="stat-title">Downloads</div>
          <div className="stat-value">31K</div>
          <div className="stat-desc">Jan 1st - Feb 1st</div>
        </div>

        <div className="stat">
          <div className="stat-title">New Users</div>
          <div className="stat-value">4,200</div>
          <div className="stat-desc">↗︎ 400 (22%)</div>
        </div>

        <div className="stat">
          <div className="stat-title">New Registers</div>
          <div className="stat-value">1,200</div>
          <div className="stat-desc">↘︎ 90 (14%)</div>
        </div>
      </div>
    </div>
  );
}

export default About;
