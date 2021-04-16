import React from "react";
import { FEATURES_CONSTANTS } from "../../constants/featuresConstants";

export default function features() {
  return (
    <section className="feature">
      <div className="feature__content container--pall">
        <div className="feature__grid">
          {FEATURES_CONSTANTS.map((feature, index) => (
            <div className="feature__item">
              <div
                className={
                  index !== FEATURES_CONSTANTS.length - 1
                    ? "feature__icon feature__border-r"
                    : "feature__icon"
                }
              >
                <img src={feature.iconPath} alt={feature.title} />
              </div>
              <div className="feature__title">{feature.title}</div>
              <div className="feature__description">{feature.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
