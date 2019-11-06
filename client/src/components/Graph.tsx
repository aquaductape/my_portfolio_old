import React from 'react';
import FusionTimeChart from './Fusion/FusionTimeChart';

export default function Graph() {
  return (
    <section>
      <h2>What I've been up to for the past week...</h2>
      <div className="container">
        <FusionTimeChart />
      </div>
    </section>
  );
}
