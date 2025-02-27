import { useState } from 'react';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import '../../styles.css';

export const Login = () => {
  const [showLogin, setShowLogin] = useState(true);

  const toggleForm = () => {
    setShowLogin(!showLogin);
  };

  return (
    <div>
      <div>
        {showLogin ? (
          <LoginForm onToggle={toggleForm} />
        ) : (
          <RegisterForm onToggle={toggleForm} />
        )}
      </div>
    </div>
  );
};

export default Login;
