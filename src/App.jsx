import { useState } from 'react'
import './App.css'
import Share from './components/Share'

function App() {
  const [counter , setCounter]= useState(0);

  return (
    <>
      <div className='counter-container'>
        <h1 className='counter-text'> counter = {counter}</h1>
        <Share content={`Sayaç değeri: ${counter}`} />
        <div className='button-group'> 
          <button className='btn inc' onClick={()=> setCounter(counter+1)}>Increment</button>
          <button className='btn reset' onClick={()=> setCounter(0)}>Reset</button>
          <button className='btn dec' onClick={()=> setCounter(counter-1)}>Decrement</button>
        </div>
        <div className='site-footer'>
          <div className='footer-content'>
            <p>&copy; 2024 Conter App</p>
            <nav>
              <a href="https://github.com/memin25" target='_blank' rel='nooperrer noreferrer'>GitHub</a>
            </nav>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
