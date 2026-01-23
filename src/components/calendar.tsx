import React, { useState } from "react";
import styles from './calendar.module.css';
import { ChevronLeft, ChevronRight } from "lucide-react";

const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const weekdaysShort = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const Calendar: React.FC = () => {
  const today = new Date();

  const [currentDate, setCurrentDate] = useState(new Date(today.getFullYear(), today.getMonth(), today.getDate()));
  const [currentMonth, currentYear] = [currentDate.getMonth(), currentDate.getFullYear()];
  const [selectedDate, setSelectedDate] = useState(today);

  const getDaysInMonth = (month: number, year: number) => {
    return new Date(year, month + 1, 0).getDate(); // gets the date of the last day of the month; 0th day of the next month is last day of curr month
  };

  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay(); //gets the first day (0-6) of curr month

  const prevMonth = () => {
    setCurrentDate(prev => {
      const year = prev.getFullYear();
      const month = prev.getMonth();
      if (month === 0) {
        return new Date(year-1, 11, 1);
      }
      return new Date(year, month-1, 1);
    });
  };

  const nextMonth = () => {
    setCurrentDate(prev => {
      const year = prev.getFullYear();
      const month = prev.getMonth();
      if (month === 12) {
        return new Date(year+1, 1, 1);
      }
      return new Date(year, month+1, 1);
    });
  };

  const days: (number | null)[] = [];

  // Fill empty slots for first week
  for (let i = 0; i < firstDayOfMonth; i++) days.push(null);

  // Fill actual days
  for (let i = 1; i <= getDaysInMonth(currentMonth, currentYear); i++) days.push(i);

  for(let i = firstDayOfMonth + getDaysInMonth(currentMonth, currentYear); i < 42; i++) days.push(null);

  return (
    <section className={styles.calendar}>
      <div className={styles.calendarContainer}>
        <div className={styles.leftMenuContainer}>
          <div className={styles.leftHeader}>
            <h2 className={styles.leftHeaderText}>{weekdays[selectedDate.getDay()]} {months[selectedDate.getMonth()]} {selectedDate.getDate()}, {selectedDate.getFullYear()}</h2>
            <div className={styles.headerButtonContainer}>
              <button className={styles.headerButton} onClick={prevMonth}><ChevronLeft size={24} strokeWidth={4}/></button>
              <button className={styles.headerButton} onClick={nextMonth}><ChevronRight size={24} strokeWidth={4}/></button>
            </div>
          </div>
        </div>
        <div className={styles.rightCalendarContainer}>
          <div className={styles.rightHeader}>
            <h2 className={styles.rightHeaderText}><span className={styles.headerMonth}>{months[currentMonth]}</span> {currentYear}</h2>
            <div className={styles.rightHeaderButtonContainer}>
              <button className={styles.rightHeaderButton} onClick={prevMonth}><ChevronLeft size={24} strokeWidth={4}/></button>
              <button className={styles.rightHeaderButton} onClick={nextMonth}><ChevronRight size={24} strokeWidth={4}/></button>
            </div>
          </div>
          <div className={styles.body}>
            {weekdaysShort.map((day) => (
            <div key={day} className={styles.weekdaysShort}>{day}</div>
            ))}

            {days.map((dayNum, index) => (
            <div
                key={index}
                className={styles.days}
                onClick={() => setSelectedDate(prev => {
                  if(dayNum !== null)
                    return new Date(currentYear, currentMonth, dayNum);
                  return prev;
                })}
            >
                <div className={`${styles.dayNum} ${dayNum === selectedDate.getDate() && currentMonth === selectedDate.getMonth() && currentYear === selectedDate.getFullYear() ? styles.today : ""}`}>{dayNum}</div>
            </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calendar;