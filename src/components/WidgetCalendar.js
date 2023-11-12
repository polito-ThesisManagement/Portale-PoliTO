import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import events from '../data/Events';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import '../styles/Calendar.css'
import { BsChevronRight, BsChevronLeft } from 'react-icons/bs';


const CustomToolbar = (toolbar) => {

  const [isMonthView, setMonthView] = useState(true);

  const goToBack = () => {
    toolbar.onNavigate('PREV');
  };

  const goToNext = () => {
    toolbar.onNavigate('NEXT');
  };

  const goToToday = () => {
    toolbar.onNavigate('TODAY');
  };

  const goToWeekView = () => {
    setMonthView(false);
    toolbar.onView('week');
  };

  const goToMonthView = () => {
    setMonthView(true);
    toolbar.onView('month');
  };

  return (
    <div className="rbc-toolbar">
      <span className="rbc-btn-group">
        <button type="button" onClick={goToBack}>
          <BsChevronLeft />
        </button>
        <button type="button" onClick={goToToday}>
          Oggi
        </button>
        <button type="button" onClick={goToNext}>
          <BsChevronRight />
        </button>
      </span>
      <span className="rbc-toolbar-label">{toolbar.label}</span>
      <span className="rbc-btn-group">
          <button type="button" onClick={goToWeekView} className='view-button'>
              Settimana
          </button>
          <button type="button" onClick={goToMonthView} className= 'view-button'> 
              Mese
          </button>
      </span>
    </div>
  );
};

export default function WidgetCalendar() {
  const localizer = momentLocalizer(moment);

  return (
        <Calendar
        className='custom-calendar'
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        min={new Date(2023, 10, 12, 8, 0)} // Imposta l'orario minimo a 8:00
        max={new Date(2023, 10, 12, 20, 0)} // Imposta l'orario massimo a 19:00
        defaultDate={new Date(2023, 10, 12)}
        style={{ height: '400px', fontFamily:'Montserrat, sans-serif', marginTop:'16px' }}
        components={{
            toolbar: CustomToolbar,
        }}
      />
  );
};