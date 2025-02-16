import Home from '../components/Home'
import Payment from '../components/Payment'
import { Route, Routes, Router } from 'react-router-dom';
export function App() {
  return (

            <Routes>
                {/* Ruta principal */}
                <Route path="/" element={<Home />} />

                {/* Ruta exacta para Payment */}
                <Route path="/payment" element={<Payment />} />
            </Routes>
        
  );
}

export default App;
