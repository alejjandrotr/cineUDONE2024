import React, { createContext, useContext, useState } from 'react';

// Definir el tipo para el contexto
interface HorarioContextType {
  selectedDate: string | null;
  setSelectedDate: (date: string | null) => void;
  selectedHour: string | null;
  setSelectedHour: (hour: string | null) => void;
}

// Crear el contexto
const HorarioContext = createContext<HorarioContextType | undefined>(undefined);

// Proveedor del contexto
export const HorarioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedHour, setSelectedHour] = useState<string | null>(null);

  return (
    <HorarioContext.Provider value={{ selectedDate, setSelectedDate, selectedHour, setSelectedHour }}>
      {children}
    </HorarioContext.Provider>
  );
};

// Hook personalizado para usar el contexto
export const useHorario = () => {
  const context = useContext(HorarioContext);
  if (!context) {
    throw new Error('useHorario debe usarse dentro de un HorarioProvider');
  }
  return context;
};