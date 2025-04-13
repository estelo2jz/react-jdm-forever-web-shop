import React from "react";
import "./News.scss";

const mediaFeatures = [
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/09/Car_and_Driver_logo.svg",
    title: "Featured in Car and Driver",
    quote: "TopRank leads the charge in JDM vehicle imports to the U.S.",
    link: "https://www.caranddriver.com"
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/48/MotorTrend_Logo.png",
    title: "MotorTrend Highlight",
    quote: "The most reliable place to find classic Japanese performance.",
    link: "https://www.motortrend.com"
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/25/Top_Gear_Logo_2021.svg",
    title: "Top Gear Spotlight",
    quote: "TopRank’s inventory will make any car enthusiast’s jaw drop.",
    link: "https://www.topgear.com"
  }
];

const News = () => {
  {mediaFeatures.map((item, index) => (
    <a
      key={index}
      href={item.link}
      target="_blank"
      rel="noreferrer"
      className="media__card"
      style={{ "--i": index }}
    >
      ...
    </a>
  ))}
  return (
    <section className="media">
      <h2 className="media__title">As Featured In</h2>
      <div className="media__grid">
        {mediaFeatures.map((item, index) => (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noreferrer"
            className="media__card"
          >
            <img src={item.logo} alt={item.title} className="media__logo" />
            <div className="media__content">
              <h3>{item.title}</h3>
              <p>{item.quote}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default News;
