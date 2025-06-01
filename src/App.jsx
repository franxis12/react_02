import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import TipCalculator from './components/TipCalculator';


function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <Routes>
      <Route path="/" element={<TipCalculator />} />
     </Routes>
   </>
  )
}

export default App
