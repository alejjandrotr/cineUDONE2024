import React, { useState } from 'react';
import { Schedule } from '../constants/schedules';
import '../styles/MovieSchedule.css';

type MovieScheduleProps = {
  scheduleByDate: Record<string, Schedule[]>;
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
          Object.keys(scheduleByDate).map((date) => (
            <div
              key={date}
              className="schedule-date"
              onClick={() => handleDateClick(date)}
            >
              <div className="date-box">{date}</div>
              {activeDate === date && (
                <ul className="schedule-list">
                  {scheduleByDate[date].map((schedule, index) => (
                    <li key={index} className="schedule-item">
                      {schedule.time} - {schedule.room}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default MovieSchedule;
