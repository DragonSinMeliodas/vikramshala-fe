import React from "react";
import { FEATURES_METRICS_CONSTANTS } from "../../constants/featuresConstants";
export default function featuresWithoutIcons() {
  return (
    <section className="feature">
      <div className="feature__content container--pall">
        <div className="feature__grid">
          {FEATURES_METRICS_CONSTANTS.map((feature, index) => (
            <div
              className={
                index !== FEATURES_METRICS_CONSTANTS.length - 1
                  ? "feature__item feature__border-r"
                  : "feature__item"
              }
            >
              <div className={"feature__title"}>
                <h1>{feature.title}</h1>
              </div>
              <div className="feature__description">
                <h2>{feature.description}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
