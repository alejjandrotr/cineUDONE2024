import React, { useState } from 'react';
import { Schedule } from '../constants/schedules';
import '../styles/MovieSchedule.css';

type MovieScheduleProps = {
  scheduleByDate: Record<string, Schedule[]>;
};

const formatTimeForUser = (date: Date) => {  
  return date.toLocaleTimeString('es-VE', { hour: '2-digit', minute: '2-digit', hour12: true });
};

const formatDateForUser = (date: Date) => {
  return date.toLocaleDateString('es-VE', { day: '2-digit', month: 'short' });
};


const MovieSchedule: React.FC<MovieScheduleProps> = ({ scheduleByDate }) => {
  const [activeDate, setActiveDate] = useState<string | null>(null);

  const handleDateClick = (date: string) => {
    if (activeDate === date) {
      setActiveDate(null); 
    } else {
      setActiveDate(date);
    }
  };

  return (
    <div className="movie-schedule">
      <h3>Horarios:</h3>
      <div className="schedule-container">
        {Object.keys(scheduleByDate).length === 0 ? (
          <p>No hay horarios disponibles para esta película.</p>
        ) : (
          Object.keys(scheduleByDate).map((dateKey) => {
            const date = new Date(dateKey); 
            const formattedDate = formatDateForUser(date); 

            return (
              <div
                key={dateKey}
                className="schedule-date"
                onClick={() => handleDateClick(dateKey)}
              >
                <div className="date-box">{formattedDate}</div>
                {activeDate === dateKey && (
                  <ul className="schedule-list">
                    {scheduleByDate[dateKey].map((schedule, index) => (
                      <li key={index} className="schedule-item">
                        {formatTimeForUser(new Date(schedule.date))} - {schedule.room}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default MovieSchedule;
