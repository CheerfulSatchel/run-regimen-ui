import React from 'react';
import FullCalendar, { EventApi, DateSelectArg, EventClickArg, EventContentArg, formatDate } from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'

export const Calendar: React.FC = () => {

    return <>
        <FullCalendar 
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        />
    </>
};