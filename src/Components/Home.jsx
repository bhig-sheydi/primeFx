import React from 'react'
import About from './About'
import Contscts from './Contscts'
import HowItWorks from './HowItWorks'
import Faqs from './Faqs'


export const Home = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div>
      <h1 className='height'>Home</h1>
      <section id="about">
        <About />
      </section>
      <section id="contacts">
        <Contscts/>
      </section>
      <section id="how-it-works">
        <HowItWorks />
      </section>
      <section id="faqs">
        <Faqs />
      </section>
    </div>
  );
}
