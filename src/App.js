import logo from './logo.svg';
import './App.css';
import NavBar from './units/navBar';
import Footer from './units/footer';
import BackGround from './units/background';
import Register from './units/register';
import Calculator from './units/caclculator';
import Calculator1 from './units/cal';
import Login from './login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Notfound from './units/404';
import axios from 'axios';
import Home from './units/background';

function App() {
  return (
    <>
  <NavBar />
 <BrowserRouter>
 <Routes>
  <Route path='/' element={<Home/>}></Route>
  <Route path='/register' element={<Register/>}></Route>
  <Route path='/calculate' element={<Calculator/>}></Route>
  <Route path='/login' element={<Login/>}></Route>
  <Route path='/*' element={<Notfound/>}></Route>
 </Routes>
 </BrowserRouter>
  <Footer />
  
  </>
  );
}

export default App;
