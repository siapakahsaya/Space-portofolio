import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-cream-light">
      <Header />
      <main>
        <Hero />
        <About />
        <Menu />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

export default App;