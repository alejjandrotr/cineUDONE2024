import React, { useState, useRef } from 'react';
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

  const [selectedDate, setSelectedDate] = useState<string>(mockDates[0].id.toString());
  const [selectedHour, setSelectedHour] = useState<string>(mockHours[0].id.toString());


  const dateContainerRef = useRef<HTMLDivElement>(null);
  const hourContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);


  const handleDateClick = (id: string) => {
    setSelectedDate(id);
  };

  const handleHourClick = (id: string) => {
    setSelectedHour(id);
  };


  const startDragging = (e: React.MouseEvent<HTMLDivElement>, ref: React.RefObject<HTMLDivElement>) => {
    if (!ref.current) return;
    setIsDragging(true);
    setStartX(e.pageX - ref.current.offsetLeft);
    setScrollLeft(ref.current.scrollLeft);
  };

  const stopDragging = () => {
    setIsDragging(false);
  };

  const onDragging = (e: React.MouseEvent<HTMLDivElement>, ref: React.RefObject<HTMLDivElement>) => {
    if (!isDragging || !ref.current) return;
    e.preventDefault();
    const x = e.pageX - ref.current.offsetLeft;
    const walk = (x - startX) * 2; // Ajusta la velocidad del arrastre
    ref.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className="p-6 max-w-md mx-auto shadow-md fondo-horario">

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
            onClick={() => handleDateClick(date.id.toString())}
            className={`flex flex-col items-center p-4 rounded-lg cursor-pointer ${
              selectedDate === date.id.toString()
                ? 'horario-dia--active'
                : 'horario-dia'
            }`}
          >
            <span className="text-sm">{date.month}</span>
            <h4 className="text-lg font-bold">{date.day}</h4>
          </div>
        ))}
      </div>


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
            onClick={() => handleHourClick(hour.id.toString())}
            className={`hour ${
              selectedHour === hour.id.toString()
                ? 'hour--active'
                : 'hour'
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