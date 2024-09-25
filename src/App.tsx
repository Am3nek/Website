import { useState } from 'react'
import { Button } from './components/ui/button'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import LandingPage from './landingPage.tsx'
import '@fontsource/jost'; // Defaults to weight 400
//import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <LandingPage></LandingPage>
    </>
  )
}

export default App
