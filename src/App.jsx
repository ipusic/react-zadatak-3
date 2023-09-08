import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from '../modules/default'
import { add } from '../modules/named'
import { subtract } from '../modules/named'
import { multiply } from '../modules/named';

function App() {
  return (
    <div>
      <h1>My React App</h1>
      <Button text="Click me" />
    </div>
  );
}

export default App;



