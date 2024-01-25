import React, { useState } from 'react';
import Calendar from 'react-calendar';
import '../Styling/Calendar.css';
import 'react-calendar/dist/Calendar.css';

export default function CalendarPage() {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className='calendar-section'>
        <div className="calendar-page">
        <div className="calendar-container">
            <Calendar
            onClickDay={handleDateClick}
            value={selectedDate}
            calendarType="US"
            />
        </div>
        <div className="details-container">
            {selectedDate && (
            <div>
                <h2>Details for {selectedDate.toLocaleDateString()}</h2>
                {/* Render your details here based on the selected date */}
            </div>
            )}
        </div>
        </div>
    </div>
  );
}
