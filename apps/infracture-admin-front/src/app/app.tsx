import { Toaster } from 'react-hot-toast';
import AppTemplate from '../template/free-react-tailwind-admin-dashboard-main/src/App';
import NxWelcome from './nx-welcome';

import { Route, Routes, Link } from 'react-router-dom';

export function App() {
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <AppTemplate></AppTemplate>
    </>
  );
}

export default App;
