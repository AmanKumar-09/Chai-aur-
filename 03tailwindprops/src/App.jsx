import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/card'

function App() {
  let myObj = {
    uersname : "Aman",
    age : 23
  }

  let arr = [1,2, 3, 4, 5]

  return (
    <>
    <h1 className='bg-green-400 text-white p-5 rounded-xl mb-5'>Tailwind Use</h1>
    <Card username="Harry" btnText="Click me" />
    <Card username="Aman"  />
    
    </>
  )
}

export default App
