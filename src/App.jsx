import React from 'react';
import Hero from './components/Hero';
import ProfileCard from './components/ProfileCard';
import ActsShowcase from './components/ActsShowcase';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      <Hero />
      <ProfileCard />
      <ActsShowcase />
      <Contact />
    </div>
  );
}

export default App;
