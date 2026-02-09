import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from './components/Nav';
import Header from './components/Header';
import Main from './components/Main'
import Menu from './pages/Menu'
import Breakfast from "./components/Breakfast";
import Lunch from "./components/Lunch";
import Dinner from "./components/Dinner";
import Dessert from "./components/Dessert";
import Footer from './components/Footer'
import BookingPage from './pages/BookingPage';
import ConfirmedBooking from './pages/ConfirmedBooking';
import NotCooded from './pages/NotCooded';
import NotCooded1 from './pages/NotCooded1';


function App() {
  return (
    <>
    <BrowserRouter basename="/Little-Lemon-app">
      <Nav/>
      <Header/>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Menu" element={<Menu />} >
        <Route path="Breakfast" element={<Breakfast />} />
        <Route path="lunch" element={<Lunch />} />
        <Route path="dinner" element={<Dinner />} />
        <Route path="dessert" element={<Dessert />} />
        </Route>
        <Route path='/BookingPage' element={<BookingPage />} />
        <Route path='/confirmed' element={<ConfirmedBooking />} /> 
        <Route path='/NotCooded' element={<NotCooded />} />
        <Route path='/NotCooded1' element={<NotCooded1 />} />
      </Routes>
      <Footer/>
    </BrowserRouter>

    </>
  );
}

export default App;
