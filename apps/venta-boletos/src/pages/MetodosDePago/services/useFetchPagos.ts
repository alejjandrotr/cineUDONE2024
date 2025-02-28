// hooks/useFetchPagos.js
import { useState, useEffect } from 'react';
import {PagoMovil, PagoTransferencia} from '../types/index'

const useFetchPagos = () => {
  const [datosPagoMovil, setDatosPagoMovil] = useState<PagoMovil[]>([]);
  const [datosPagoTransferencia, setDatosPagoTransferencia] = useState<PagoTransferencia[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchDatos = async () => {
    try {
      const [response1, response2] = await Promise.all([
        fetch('http://localhost:3002/api/pago-movil'),
        fetch('http://localhost:3002/api/pago-transferencia'),
      ]);

      if (!response1.ok || !response2.ok) {
        throw new Error('Error en la respuesta');
      }

      const datos1 = await response1.json();
      const datos2 = await response2.json();

      setDatosPagoMovil(datos1);
      setDatosPagoTransferencia(datos2);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDatos();
  }, []);

  return { datosPagoMovil, datosPagoTransferencia, loading, error };
};

export default useFetchPagos;
