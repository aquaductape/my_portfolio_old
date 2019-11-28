import React, { Suspense } from "react";

const FusionTimeChart = React.lazy(() =>
  import(/* webpackChunkName: "chart" */ "./Fusion/FusionTimeChart")
);

export default function Graph() {
  return (
    <section className="coding-activity">
      <h2 className="section-title coding-activity-title">
        Recent Coding Activity
      </h2>
      <p>(Powered by wakatime.com)</p>
      <div className="container">
        <Suspense fallback={null}>
          <FusionTimeChart />
        </Suspense>
      </div>
    </section>
  );
}
