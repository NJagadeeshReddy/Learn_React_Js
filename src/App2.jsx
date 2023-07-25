import React from 'react'
import Gallary from './components/Gallary';
import App1 from './App1';
import App from './components/App';
import Jsx from './components/Jsx';
import Class from './components/Class';
import Cent from './components/Cent';


const App2 = () => {
  return (
    <>
      <h2 className='hint'> Components</h2>
      <Jsx />
      <App />
      <Cent />
      <Class />
      <Gallary />
      <App1 />
    </>
  )
}

export default App2
