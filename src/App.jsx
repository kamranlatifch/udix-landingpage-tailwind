import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import Header from './components/Header';
import Hero from './components/Hero';
import Solutions from './components/Solutions';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Hero />
      <Solutions />
    </>
  );
}

export default App;
