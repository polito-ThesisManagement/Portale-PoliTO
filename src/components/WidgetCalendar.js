import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'moment/locale/it';
import events from '../data/Events';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import '../styles/Calendar.css'
import { BsChevronRight, BsChevronLeft } from 'react-icons/bs';
import { Button } from 'react-bootstrap';


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
    <div className="custom-rbc-toolbar">

      <span className="rbc-btn-group">
        <Button onClick={goToBack}>
          <BsChevronLeft />
        </Button>
        <Button type="button" onClick={goToToday}>
          Oggi
        </Button>
        <Button type="button" onClick={goToNext}>
          <BsChevronRight />
        </Button>
      </span>

      <span className="rbc-toolbar-label">{toolbar.label}</span>

      <span className="rbc-btn-group">
          <Button
          onClick={goToWeekView}
          className={`view-button ${isMonthView ? '' : 'active'}`}
          >
              Settimana
          </Button>
          <Button
          onClick={goToMonthView}
          className={`view-button ${isMonthView ? 'active' : ''}`}
          > 
              Mese
          </Button>
      </span>
    </div>
  );
};

const formats = {
  timeGutterFormat: (date, culture, localizer) =>
    localizer.format(date, 'HH:mm', culture),

  eventTimeRangeFormat: ({ start, end }, culture, localizer) =>
    localizer.format(start, 'HH:mm', culture) +
    ' - ' +
    localizer.format(end, 'HH:mm', culture),

  monthHeaderFormat: (date, culture, localizer) =>
    localizer.format(date, 'MMMM YYYY', culture).replace(/^\w/, (c) =>c.toUpperCase()),

  dayRangeHeaderFormat: ({ start, end }, culture, localizer) =>
    localizer.format(start, 'DD MMMM', culture).replace(/(?:^|\s)\w/g, (match) => match.toUpperCase()) +
    ' - ' +
    localizer.format(end, 'DD MMMM', culture).replace(/(?:^|\s)\w/g, (match) => match.toUpperCase()),
  
  dayFormat: (date, culture, localizer) =>
    localizer.format(date, 'ddd', culture).replace(/^\w/, (c) =>c.toUpperCase()),

  
};

export default function WidgetCalendar() {
  const localizer = momentLocalizer(moment);

  return (
    <Calendar
      allDayAccessor={false}
      className='custom-calendar'
      localizer={localizer}
      events={events}
      defaultView='month'
      startAccessor="start"
      endAccessor="end"
      min={new Date(2023, 10, 12, 8, 0)} 
      max={new Date(2023, 10, 12, 20, 0)}
      defaultDate={new Date(2023, 10, 12)}
      style={{ height: '400px', fontFamily:'Montserrat, sans-serif', marginTop:'16px' }}
      formats={formats}
      components={{
          toolbar: CustomToolbar,
      }}
    />
  );
};