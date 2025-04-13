import React from "react";
import "./News.scss";

import japanDirect from "../../assets/pages-imgs/japandirect.png"
import jdmexpo from "../../assets/pages-imgs/jdmexpo.png"
import jdmsportclassics from "../../assets/pages-imgs/jdmsportclassics.png"
import nengun from "../../assets/pages-imgs/nengun.png"
import caranddriver from "../../assets/pages-imgs/cardrive.png"
import motortrend from "../../assets/pages-imgs/motor.png"
import topgear from "../../assets/pages-imgs/top.png"

const mediaFeatures = [
  {
    logo: caranddriver,
    title: "Car and Driver",
    quote: "TopRank leads the charge in JDM vehicle imports to the U.S.",
    link: "https://www.caranddriver.com",
  },
  {
    logo: motortrend,
    title: "MotorTrend",
    quote: "The most reliable place to find classic Japanese performance.",
    link: "https://www.motortrend.com",
  },
  {
    logo: topgear,
    title: "Top Gear",
    quote: "TopRank’s inventory will make any car enthusiast’s jaw drop.",
    link: "https://www.topgear.com",
  },
  {
    logo: japanDirect,
    title: "Japan CAR Direct",
    quote: "Trust us to source your vehicles from Japan!",
    link: "https://www.japancardirect.com",
  },
  {
    logo: nengun,
    title: "NENGUN",
    quote: "Your trusted source of JDM parts shipped direct from Japan",
    link: "https://www.nengun.com",
  },
  {
    logo: jdmexpo,
    title: "JDM-EXPO",
    quote: "Top exporter of JDM sports amd classic cars worldwide!",
    link: "https://jdm-expo.com",
  },
  {
    logo: jdmsportclassics,
    title: "JDM Sport Classics",
    quote: "JDM Sport Classics!",
    link: "https://jdmsportclassics.com",
  },
];

const News = () => {
  return (
    <section className="media">
      <div className="media__content">
        <div className="media__header">
          <h2>As Featured In</h2>
          <p>Trusted by leading automotive publications worldwide.</p>
        </div>

        <div className="media__grid">
          {mediaFeatures.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noreferrer"
              className="media__card"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="media__card-logo">
                <img src={item.logo} alt={item.title} />
              </div>
              <div className="media__card-body">
                <h3>{item.title}</h3>
                <p>{item.quote}</p>
              </div>
              <span className="media__arrow">→</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
