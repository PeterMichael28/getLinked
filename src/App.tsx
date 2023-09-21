

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import RegisterPage from './pages/RegisterPage';


function App() {

  return (
    <main className={``}>
   
<BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage /> } /> 
        <Route path='/contact' element={<ContactPage /> } /> 
        <Route path='/register' element={<RegisterPage /> } /> 
  
      </Routes>
      

</BrowserRouter>

</main>
  )
}

export default App
