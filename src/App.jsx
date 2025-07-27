import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Translator from './components/Translator';

function App() {
  return (
    <div className="min-h-screen bg-gray p-4 flex items-center justify-center">
      <Translator />
    </div>
  );
}

export default App;