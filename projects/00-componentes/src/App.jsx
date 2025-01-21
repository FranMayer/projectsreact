import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TwitterCard } from './TwitterCard';

function App() {

  return (
    <div className='App'>
    <TwitterCard
      avatar="https://unavatar.io/github/mdo"
      name="Mark Otto"
      username="Markotto23"
    />
    <TwitterCard
      avatar="https://unavatar.io/github/johndoe"
      name="John Doe"
      username="johndoe"
    />
  </div>
);

}

export default App
