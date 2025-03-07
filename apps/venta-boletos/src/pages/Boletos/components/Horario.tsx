import React, { useRef, useState } from 'react';
import { useHorario } from '../../../context/HorarioContext'; // Importa el hook del contexto
import '../../../styles/horario.css';

const mockDates = [
  { id: 1, day: '06', month: 'Feb' },
  { id: 2, day: '07', month: 'Feb' },
  { id: 3, day: '08', month: 'Feb' },
  { id: 4, day: '09', month: 'Feb' },
  { id: 5, day: '10', month: 'Feb' },
  { id: 6, day: '11', month: 'Feb' },
  { id: 7, day: '12', month: 'Feb' },
];

const mockHours = [
  { id: 1, time: '16:00' },
  { id: 2, time: '17:00' },
  { id: 3, time: '18:00' },
  { id: 4, time: '19:00' },
  { id: 5, time: '20:00' },
  { id: 6, time: '21:00' },
  { id: 7, time: '22:00' },
];

const Horario: React.FC = () => {
  const { setSelectedDate, setSelectedHour } = useHorario(); // Usa el contexto
  const dateContainerRef = useRef<HTMLDivElement>(null);
  const hourContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Estados locales para rastrear la fecha y hora seleccionadas
  const [selectedDateId, setSelectedDateId] = useState<number | null>(null);
  const [selectedHourId, setSelectedHourId] = useState<number | null>(null);

  const handleDateClick = (date: {
    id: number;
    day: string;
    month: string;
  }) => {
    setSelectedDate(`${date.day}-${date.month}`); // Actualiza la fecha en el contexto
    setSelectedDateId(date.id); // Actualiza el estado local de la fecha seleccionada
  };

  const handleHourClick = (hour: { id: number; time: string }) => {
    setSelectedHour(hour.time); // Actualiza la hora en el contexto
    setSelectedHourId(hour.id); // Actualiza el estado local de la hora seleccionada
  };

  const startDragging = (
    e: React.MouseEvent<HTMLDivElement>,
    ref: React.RefObject<HTMLDivElement>
  ) => {
    if (!ref.current) return;
    setIsDragging(true);
    setStartX(e.pageX - ref.current.offsetLeft);
    setScrollLeft(ref.current.scrollLeft);
  };

  const stopDragging = () => {
    setIsDragging(false);
  };

  const onDragging = (
    e: React.MouseEvent<HTMLDivElement>,
    ref: React.RefObject<HTMLDivElement>
  ) => {
    if (!isDragging || !ref.current) return;
    e.preventDefault();
    const x = e.pageX - ref.current.offsetLeft;
    const walk = (x - startX) * 2;
    ref.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className="p-6 max-w-md mx-auto shadow-md fondo-horario">
      {/* Contenedor de fechas */}
      <div
        ref={dateContainerRef}
        onMouseDown={(e) => startDragging(e, dateContainerRef)}
        onMouseLeave={stopDragging}
        onMouseUp={stopDragging}
        onMouseMove={(e) => onDragging(e, dateContainerRef)}
        className="flex overflow-x-hidden space-x-4 pb-4 cursor-grab active:cursor-grabbing"
      >
        {mockDates.map((date) => (
          <div
            key={date.id}
            onClick={() => handleDateClick(date)}
            className={`flex flex-col items-center p-4 rounded-lg cursor-pointer ${
              selectedDateId === date.id ? 'horario-dia--active' : 'horario-dia'
            }`}
          >
            <span className="text-sm">{date.month}</span>
            <h4 className="text-lg font-bold">{date.day}</h4>
          </div>
        ))}
      </div>

      {/* Contenedor de horas */}
      <div
        ref={hourContainerRef}
        onMouseDown={(e) => startDragging(e, hourContainerRef)}
        onMouseLeave={stopDragging}
        onMouseUp={stopDragging}
        onMouseMove={(e) => onDragging(e, hourContainerRef)}
        className="flex overflow-x-hidden space-x-4 pt-4 cursor-grab active:cursor-grabbing"
      >
        {mockHours.map((hour) => (
          <span
            key={hour.id}
            onClick={() => handleHourClick(hour)}
            className={`hour ${
              selectedHourId === hour.id ? 'hour--active' : 'hour'
            }`}
          >
            {hour.time}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Horario;
