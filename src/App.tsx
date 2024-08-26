import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer'
import Header from './components/Header'
import {Principal} from './components/Principal'
import {Login} from './components/login'
import {Register} from './components/Register'
import './App.css'


function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/Principal" element={<Principal />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
