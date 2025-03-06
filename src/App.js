import React from 'react';
import Header from './components/Header';
import Menu from './components/Menu';
import ReservationForm from './components/ReservationForm';
import ContactForm from './components/ContactForm';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import About from './components/About';
import Footer from './components/Footer';
import './App.css'; // Importing the global styles here

const App = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <section id="menu">
          <h2>Our Menu</h2>
          <Menu />
        </section>
        <section id="reservations">
          <h2>Reservations</h2>
          <ReservationForm />
        </section>
        <section id="contact">
          <h2>Contact Us</h2>
          <ContactForm />
        </section>
        <section id="gallery">
          <h2>Gallery</h2>
          <Gallery />
        </section>
        <section id="reviews">
          <h2>Customer Reviews</h2>
          <Reviews />
        </section>
        <section id="about">
          <h2>About Us</h2>
          <About />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
