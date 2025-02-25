import Home from '../pages/Boletos/Home'
import Payment from '../pages/MetodosDePago/Payment'
import Login from '../pages/Login/Login'
import { Route, Routes, Router } from 'react-router-dom';
const AppRutas = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default AppRutas;