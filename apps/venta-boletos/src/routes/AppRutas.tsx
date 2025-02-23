import Home from '../pages/Boletos/Home'
import Payment from '../pages/MetodosDePago/Payment'
import { Route, Routes, Router } from 'react-router-dom';
const AppRutas = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/payment" element={<Payment />} />
    </Routes>
  );
};

export default AppRutas;