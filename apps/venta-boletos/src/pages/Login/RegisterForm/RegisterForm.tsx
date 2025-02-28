import React from 'react';
import './RegisterForm.css';
import { FaGoogle } from 'react-icons/fa';
import cineImage from '../../../assets/cine.jpg';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { registerSchema } from './schema';

interface RegisterFormProps {
  onToggle: () => void;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ onToggle }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
  });

  interface FormData {
    cedula: string;
    email: string;
    password: string;
  }

  const onSubmit = async (data: FormData): Promise<void> => {
    try {
      console.log(data);
      // Aquí puedes enviar los datos al servidor
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="register-container">
      <div className="register-form">
        <h1 className="register-title">Registro de Usuario</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="register-input-container">
            <label htmlFor="cedula">Cédula</label>
            <input
              type="text"
              id="cedula"
              className="register-input"
              placeholder="V-12.345.678"
              {...register('cedula')}
            />
            {errors.cedula && <p>{String(errors.cedula.message)}</p>}
          </div>
          <div className="register-input-container">
            <label htmlFor="email">Correo Electrónico</label>
            <input
              type="email"
              id="email"
              className="register-input"
              placeholder="micorreo@gmail.com"
              {...register('email')}
            />
            {errors.email && <p>{String(errors.email.message)}</p>}
          </div>
          <div className="register-input-container">
            <label htmlFor="password">Clave</label>
            <input
              type="password"
              id="password"
              className="register-input"
              placeholder="Introduzca contraseña"
              {...register('password')}
            />
            {errors.password && <p>{String(errors.password.message)}</p>}
          </div>
          <button className="register-btn register-btn-submit" type="submit">
            Registrarse
          </button>

          <hr className="register-divider" />

          <button className="register-btn register-btn-google">
            <FaGoogle /> Continuar con Google
          </button>
        </form>

        <p className="register-footer">
          ¿Ya tienes una cuenta?{' '}
          <button onClick={onToggle}>Iniciar sesion</button>
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
