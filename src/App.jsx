import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Main from './components/Main'
import NavBar from './components/NavBar'
import Hero from './components/Hero'

function App() {


  return (
    <>
    <div className='bg-orange-100 flex flex-col gap-20 scroll-smooth'>
      <div className='p-16'>
      <NavBar />
      </div>
      <div className='flex flex-col items-center'>
      <Hero />
      <br />
      <br />
      <br />
      <br />
      <div className='border-1 border-orange-300 w-160'> </div>
      <br />
      <br />
      <Main />
      </div>
        
    </div>
  </>
  )
}

export default App
