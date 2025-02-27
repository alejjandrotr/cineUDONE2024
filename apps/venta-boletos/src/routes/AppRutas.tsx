import { Navigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Home from '../pages/Boletos/Home';
import Payment from '../pages/MetodosDePago/Payment';
import Login from '../pages/Login/Login';
import NotFound from '../pages/NotFound/NotFound';
import { Route, Routes } from 'react-router-dom';
const AppRutas = () => {
  const [hasVisitedHome, setHasVisitedHome] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/') {
      setHasVisitedHome(true);
    }
  }, [location]);

  const ProtectedRoute = () => {
    if (!hasVisitedHome) {
      return <Navigate to="/" replace />;
    }
    return <Payment />;
  };
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/payment" element={<ProtectedRoute />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRutas;
