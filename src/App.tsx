

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import HomePage from './pages/HomePage';


function App() {

  return (
    <main className={``}>
   
<BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage /> } /> 
        {/* <Route path='/features' element={<FeaturesPage /> } />  */}
  
      </Routes>
      

</BrowserRouter>

</main>
  )
}

export default App
