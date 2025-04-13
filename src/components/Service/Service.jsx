// Service.jsx
import React from 'react';
import './Service.scss';
import { FaTools, FaOilCan, FaCarCrash, FaCarSide } from 'react-icons/fa';

const services = [
  {
    icon: <FaOilCan />,
    title: 'Oil & Filter Change',
    description: 'Keep your engine running smoothly with high-quality oil and filter replacements.'
  },
  {
    icon: <FaTools />,
    title: 'Diagnostics & Repairs',
    description: 'Computer diagnostics, engine check, and professional repairs by certified mechanics.'
  },
  {
    icon: <FaCarCrash />,
    title: 'Collision Repair',
    description: 'Full-service collision repair to restore your vehicle’s factory finish and performance.'
  },
  {
    icon: <FaCarSide />,
    title: 'Detailing & Clean',
    description: 'Interior and exterior detailing to make your car shine like new.'
  }
];

const Service = () => {
  return (
    <section className="service">
      <div className="service__heading">
        <h1>Our Vehicle Services</h1>
        <p>Professional maintenance and repairs to keep your ride in top condition.</p>
      </div>
      <div className="service__grid">
        {services.map((s, i) => (
          <div key={i} className="service__card">
            <div className="service__icon">{s.icon}</div>
            <h2>{s.title}</h2>
            <p>{s.description}</p>
          </div>
        ))}
      </div>
      <div className="service__cta">
        <a href="/contact" className="service__btn">Book a Service Appointment</a>
      </div>
    </section>
  );
};

export default Service;
