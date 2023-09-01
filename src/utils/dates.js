const { addDays, format } = require('date-fns');

export function getThreeNextWeekdays() {
    const today = new Date();
    const weekdays = ['lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado', 'domingo'];

    const nextWeekdays = [];
  let daysToAdd = 1; // Comenzamos desde mañana

    while (nextWeekdays.length < 3) {
    const nextDate = addDays(today, daysToAdd);
    const dayIndex = nextDate.getDay();

    if (dayIndex >= 1 && dayIndex <= 5) { // Solo de lunes a viernes
        nextWeekdays.push(weekdays[dayIndex - 1]);
    }

    daysToAdd++;
    }

    return nextWeekdays;
}
