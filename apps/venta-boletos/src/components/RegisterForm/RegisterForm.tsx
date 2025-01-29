import React from 'react';
import './RegisterForm.css';

interface RegisterFormProps {
  onToggle: () => void;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ onToggle }) => {
  return (
    <div className="register-form">
      <h1>Registro de usuario</h1>
      <form>
        <input type="text" placeholder="Nombre completo" />
        <input type="email" placeholder="Correo electrónico" />
        <input type="password" placeholder="Contraseña" />
        <button type="submit">Registrarse</button>
      </form>
      <p>
        ¿Ya tienes una cuenta?{' '}
        <button onClick={onToggle}>Iniciar sesión</button>
      </p>
    </div>
  );
};

export default RegisterForm;