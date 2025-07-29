import { useState } from 'react';
import './App.css';
import Translator from './components/Translator';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-4 flex items-center justify-center">
      <Translator />
    </div>
  );
}

export default App;
