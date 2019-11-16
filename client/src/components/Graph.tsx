import React from "react";
import FusionTimeChart from "./Fusion/FusionTimeChart";

export default function Graph() {
  return (
    <section className="coding-activity">
      <h2 className="section-title coding-activity-title">
        Coding Activity over the Past Week
      </h2>
      <p>(Powered by wakatime.com)</p>
      <div className="container">
        <FusionTimeChart />
      </div>
    </section>
  );
}
