import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

export default function AgendaCalendar() {
  const localizer = momentLocalizer(moment);

  const events = [
    {
      title: 'Evento 1',
      start: new Date(),
      end: new Date(),
    },
    {
      title: 'Evento 2',
      start: moment().add(1, 'days').toDate(),
      end: moment().add(1, 'days').toDate(),
    },

  ];

  return (
    <div style={{ height: '400px' }}>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ margin: '20px' }}
      />
    </div>
  );
};
