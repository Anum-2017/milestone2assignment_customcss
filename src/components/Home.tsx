"use client"

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const HomeContent = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Welcome to Legacy Watches</h1>
        <p className="hero-description">Discover timeless style with our premium watch collection</p>
        <button className="shop-button">Shop Now</button>
      </div>
    </section>
  );
};

export default HomeContent;
