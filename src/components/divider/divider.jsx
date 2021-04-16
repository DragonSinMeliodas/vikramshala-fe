import React from "react";

export default function divider(props) {
  return (
    <section className="divider">
      <div className="divider__icon">
        <img src={props.data.iconPath} alt="Icon" />
      </div>
      <div className="divider__details flex flex-jc-c flex-ai-c">
        <div className="divider__line"></div>
        <h1>{props.data.text}</h1>
        <div className="divider__line"></div>
      </div>
    </section>
  );
}
