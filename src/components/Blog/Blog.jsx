// Blog.jsx
import React from "react";
import "./Blog.scss";
import all from "../../assets/all.svg"
import hundred from "../../assets/100.svg"
import bridge from "../../assets/brigde.svg"

const posts = [
  {
    id: 1,
    title: "Top 5 Maintenance Tips for Your Car",
    date: "April 10, 2025",
    image: all,
    summary: "Keep your car running smoothly with these essential maintenance tips you can do at home.",
    link: "https://www.allstate.com/resources/car-insurance/car-maintenance-tips"
  },
  {
    id: 2,
    title: "How to Prepare Your Car for Summer",
    date: "March 22, 2025",
    image: hundred,
    summary: "Get your car road-trip ready and beat the heat with these summer car care essentials.",
    link: "https://www.napaonline.com/en/advice/car-care/summer-car-prep"
  },
  {
    id: 3,
    title: "Why Regular Tire Rotations Matter",
    date: "February 15, 2025",
    image: bridge,
    summary: "Learn how tire rotations improve safety, boost performance, and extend the life of your tires.",
    link: "https://www.bridgestonetire.com/learn/maintenance/tire-rotation/"
  }
];

const Blog = () => {
  return (
    <section className="blog">
      <div className="blog__header">
        <h1>From the Garage</h1>
        <p>Explore tips, guides, and automotive news from our team of experts.</p>
      </div>

      <div className="blog__grid">
        {posts.map(post => (
          <div className="blog__card" key={post.id}>
            <div className="blog__img">
              <img src={post.image} alt={post.title} />
            </div>
            <div className="blog__content">
              <h2>{post.title}</h2>
              <p className="blog__date">{post.date}</p>
              <p className="blog__summary">{post.summary}</p>
              <a
                href={post.link}
                className="blog__read-more"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read Full Article →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
