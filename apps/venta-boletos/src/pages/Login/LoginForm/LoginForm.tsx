import React from 'react';
import './LoginForm.css';
import { FaGoogle, FaUser } from 'react-icons/fa'; 
import cineImage from '../../../assets/cine.jpg'; 

interface LoginFormProps {
  onToggle: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onToggle }) => {
  return (
    <div className="login-container">
      <div className="login-form">
        <h1 className="login-title">Iniciar Sesión</h1>
        <form>
          <div className="login-input-container">
            <label htmlFor="cedula">Cédula</label>
            <input type="text" id="cedula" className="login-input" placeholder="V-12.345.678" />
          </div>
          <div className="login-input-container">
            <label htmlFor="clave">Clave</label>
            <input type="password" id="clave" className="login-input" placeholder="Introduzca contraseña" />
          </div>

          <button className="login-btn login-btn-submit">Iniciar Sesión</button>

          <hr className="login-divider" />

          <button className="login-btn login-btn-guest">
            <FaUser /> Entrar como invitado
          </button>
          <button className="login-btn login-btn-google">
            <FaGoogle /> Continuar con Google
          </button>
        </form>
        
        <p className="login-footer">
          ¿No tienes una cuenta?{' '}
          <button  onClick={onToggle}>Regístrate</button>
        </p>

        <p className="login-footer">
          <select className="language-selector">
            <option value="es-VE">Español (Venezuela)</option>
            <option value="en-US">English (United States)</option>            
          </select>
          {' | '}
          <a href="#">Cookies</a> | <a href="#">Términos</a> | <a href="#">Privacidad</a>
        </p>
      </div>
      <div className="login-background">
        <img src={cineImage} alt="Cine" />
      </div>
    </div>
  );
};

export default LoginForm;
