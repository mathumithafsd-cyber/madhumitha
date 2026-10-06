import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css';
import img1 from './assets/copy.png'

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content" >
          
          <h1>Madhumitha Mehindi</h1>
          <p>Beautiful Henna Designs for Your Special Moments</p>
          <img src={img1}/><br></br>
          <button className="cta-button">Book Now</button>
          
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Why Choose Us</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🎨</div>
            <h3>Artistic Designs</h3>
            <p>Unique and creative mehindi patterns tailored to your style</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">⏱️</div>
            <h3>Quick Service</h3>
            <p>Professional application that dries quickly and lasts longer</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">✨</div>
            <h3>Premium Quality</h3>
            <p>100% natural henna for a beautiful and safe application</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">💝</div>
            <h3>Special Events</h3>
            <p>Perfect for weddings, festivals, and celebrations</p>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="gallery-preview">
        <h2>Recent Works</h2>
        <div className="gallery-grid">
          <div className="gallery-item">
            <div className="gallery-placeholder">Design 1</div>
          </div>
          <div className="gallery-item">
            <div className="gallery-placeholder">Design 2</div>
          </div>
          <div className="gallery-item">
            <div className="gallery-placeholder">Design 3</div>
          </div>
          <div className="gallery-item">
            <div className="gallery-placeholder">Design 4</div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-cta">
        <h2>Ready to get your mehindi done?</h2>
        <p>Get in touch with us for bookings and inquiries</p>
        <button className="cta-button">Contact Us</button>
      </section>
    </div>
  );
};

export default Home;
