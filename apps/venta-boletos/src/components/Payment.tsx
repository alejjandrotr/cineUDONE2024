import React, { useState } from 'react';
import '../styles/payment.css'; // Asegúrate de que la ruta sea correcta

const Payment: React.FC = () => {
    const [metodoSeleccionado, setMetodoSeleccionado] = useState<string | null>(null);

    const handleSeleccionarMetodo = (metodo: string) => {
        setMetodoSeleccionado(metodo);
    };

    return (
        <div className="metodo-pago-container">
            <h2 className="metodo-pago-title">Seleccione un Método de Pago</h2>
            <div className="metodo-pago-dropdown">
                <select
                    className="metodo-pago-select"
                    onChange={(e) => handleSeleccionarMetodo(e.target.value)}
                    defaultValue=""
                >
                    <option value="" disabled>
                        Seleccione una opción
                    </option>
                    <option value="pagoMovil">Pago Móvil</option>
                    <option value="transferenciaBancaria">Transferencia Bancaria</option>
                </select>
                <select
                    className="metodo-pago-select"
                    onChange={(e) => handleSeleccionarMetodo(e.target.value)}
                    defaultValue=""
                >
                    <option value="" disabled>
                        Seleccione una opción
                    </option>
                    <option value="pagoMovil">Pago Móvil</option>
                    <option value="transferenciaBancaria">Transferencia Bancaria</option>
                </select>
            </div>

            {/* Renderizar información según la selección */}
            {metodoSeleccionado === 'pagoMovil' && (
                <div className="metodo-pago-info">
                    <h3 className="metodo-pago-info-title">Información de Pago Móvil</h3>
                    <p>Número de Teléfono: 0414-1234567</p>
                    <p>Cédula/RIF: V-12345678</p>
                </div>
            )}

            {metodoSeleccionado === 'transferenciaBancaria' && (
                <div className="metodo-pago-info">
                    <h3 className="metodo-pago-info-title">Datos para Transferencia Bancaria</h3>
                    <p>Nombre del Banco: Banco Ejemplo</p>
                    <p>Titular de la Cuenta: Juan Pérez</p>
                    <p>Número de Cuenta: 123456789</p>
                    <p>Código del Banco: 001</p>
                </div>
            )}
        </div>
    );
};

export default Payment;
