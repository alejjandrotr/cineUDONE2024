import React from 'react';
import './RegisterForm.css';
import { FaGoogle } from 'react-icons/fa';
import cineImage from '../../assets/cine2.jpg';

interface RegisterFormProps {
  onToggle: () => void;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ onToggle }) => {
  return (
    <div className="register-container">
      <div className="register-form">
        <h1 className="register-title">Registro de Usuario</h1>
        <form>
          <div className="register-input-container">
            <label htmlFor="nombre">Cédula</label>
            <input type="text" id="nombre" className="register-input" placeholder="V-12.345.678" />
          </div>
          <div className="register-input-container">
            <label htmlFor="email">Correo Electrónico</label>
            <input type="email" id="email" className="register-input" placeholder="micorreo@gmail.com" />
          </div>
          <div className="register-input-container">
            <label htmlFor="password">Clave</label>
            <input type="password" id="password" className="register-input" placeholder="Introduzca contraseña" />
          </div>
          <button className="register-btn register-btn-submit">Registrarse</button>

          <hr className="register-divider" />

          <button className="register-btn register-btn-google">
            <FaGoogle /> Continuar con Google
          </button>
        </form>

        <p className="register-footer">
          ¿Ya tienes una cuenta?{' '}
          <a href="#" onClick={onToggle}>
            Iniciar Sesión
          </a>
        </p>

        <p className="register-footer">
          <select className="language-selector">
            <option value="es-VE">Español (Venezuela)</option>
            <option value="en-US">English (United States)</option>            
          </select>
          {' | '}
          <a href="#">Cookies</a> | <a href="#">Términos</a> | <a href="#">Privacidad</a>
        </p>
      </div>
      <div className="register-background">
        <img src={cineImage} alt="Cine" />
      </div>
    </div>
  );
};

export default RegisterForm;
