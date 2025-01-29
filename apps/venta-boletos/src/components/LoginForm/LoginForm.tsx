import React from 'react';
import './LoginForm.css';

interface LoginFormProps {
  onToggle: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onToggle }) => {
  return (
    <div className="login-form">
      <h1>Iniciar sesión</h1>
      <form>
        <input type="email" placeholder="Correo electrónico" />
        <input type="password" placeholder="Contraseña" />
        <button type="submit">Iniciar sesión</button>
      </form>
      <p>
        ¿No tienes una cuenta?{' '}
        <button onClick={onToggle}>Regístrate</button>
      </p>
    </div>
  );
};

export default LoginForm;