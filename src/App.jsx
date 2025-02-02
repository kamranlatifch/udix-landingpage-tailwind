import { useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
// import Header from './components/Header';
// import Hero from './components/Hero';
// import Solutions from './components/Solutions';
// import SignupNow from './components/SignupNow';
// import OurValues from './components/OurValues';
import {
  Header,
  Hero,
  Solutions,
  SignupNow,
  OurValues,
  Footer,
} from '@components';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Solutions />
      <SignupNow />
      <OurValues />
      <Footer />
    </>
  );
}

export default App;
