import React, { useEffect, useState } from 'react';

import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

import moment from 'moment';
import 'moment/locale/it';

import '../styles/Calendar.css';

const CustomToolbar = toolbar => {
  const [isMonthView, setMonthView] = useState(true);

  const { t } = useTranslation();

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
    <>
      <div className="custom-rbc-toolbar toolbar-expanded">
        <span className="rbc-btn-group">
          <Button onClick={goToBack}>
            <BsChevronLeft />
          </Button>
          <Button type="button" onClick={goToToday}>
            {t('homepage.agenda.oggi')}
          </Button>
          <Button type="button" onClick={goToNext}>
            <BsChevronRight />
          </Button>
        </span>

        <span className="rbc-toolbar-label">{toolbar.label}</span>

        <span className="rbc-btn-group">
          <Button onClick={goToWeekView} className={`view-button ${isMonthView ? '' : 'active'}`}>
            {t('homepage.agenda.settimana')}
          </Button>
          <Button onClick={goToMonthView} className={`view-button ${isMonthView ? 'active' : ''}`}>
            {t('homepage.agenda.mese')}
          </Button>
        </span>
      </div>
      <div className="custom-rbc-toolbar toolbar-reduced">
        <span className="rbc-btn-group">
          <Button onClick={goToBack}>
            <BsChevronLeft />
          </Button>
          <Button type="button" onClick={goToToday}>
            {t('homepage.agenda.oggi')}
          </Button>
          <Button type="button" onClick={goToNext}>
            <BsChevronRight />
          </Button>
        </span>

        <span className="rbc-btn-group" style={{ marginLeft: '0px', marginTop: '6px', marginBottom: '6px' }}>
          <Button onClick={goToWeekView} className={`view-button ${isMonthView ? '' : 'active'}`}>
            {t('homepage.agenda.settimana')}
          </Button>
          <Button onClick={goToMonthView} className={`view-button ${isMonthView ? 'active' : ''}`}>
            {t('homepage.agenda.mese')}
          </Button>
        </span>

        <br />

        <span className="rbc-toolbar-label">{toolbar.label}</span>
      </div>
    </>
  );
};

const formats = {
  timeGutterFormat: (date, culture, localizer) => localizer.format(date, 'HH:mm', culture),

  eventTimeRangeFormat: ({ start, end }, culture, localizer) =>
    localizer.format(start, 'HH:mm', culture) + ' - ' + localizer.format(end, 'HH:mm', culture),

  monthHeaderFormat: (date, culture, localizer) =>
    localizer.format(date, 'MMMM YYYY', culture).replace(/^\w/, c => c.toUpperCase()),

  dayRangeHeaderFormat: ({ start, end }, culture, localizer) =>
    localizer.format(start, 'DD MMMM', culture).replace(/(?:^|\s)\w/g, match => match.toUpperCase()) +
    ' - ' +
    localizer.format(end, 'DD MMMM', culture).replace(/(?:^|\s)\w/g, match => match.toUpperCase()),

  dayFormat: (date, culture, localizer) => localizer.format(date, 'ddd', culture).replace(/^\w/, c => c.toUpperCase()),
};

export default function WidgetCalendar() {
  const { i18n } = useTranslation();
  const [localizer, setLocalizer] = useState(momentLocalizer(moment));

  useEffect(() => {
    moment.locale(i18n.language);
    setLocalizer(momentLocalizer(moment));
  }, [i18n.language]);

  return (
    <Calendar
      allDayAccessor={false}
      className="custom-calendar"
      localizer={localizer}
      defaultView="month"
      startAccessor="start"
      endAccessor="end"
      min={new Date(2023, 10, 12, 8, 0)}
      max={new Date(2023, 10, 12, 20, 0)}
      defaultDate={new Date(2023, 11, 12)}
      style={{ height: '400px', fontFamily: 'var(--font-primary)', marginTop: '16px' }}
      formats={formats}
      components={{
        toolbar: CustomToolbar,
      }}
    />
  );
}
