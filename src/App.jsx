
import './App.css'
import Login from './pages/Login'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Movies from './pages/Movies';


function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/home' element={<Home />} />
      <Route path='/movies' element={<Movies/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
