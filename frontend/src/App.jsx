import { useState } from 'react'  
import { Routes ,Route} from 'react-router-dom'
import AidRequestForm from './pages/AidRequestForm'

function App() {
  

  return (
    <Routes>
      <Route path="/request-aid" element={<AidRequestForm/>}/>
    </Routes>
  )
}

export default App
