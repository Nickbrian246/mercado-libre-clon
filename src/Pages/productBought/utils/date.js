import { format, getDay, getMonth, getYear ,addDays} from 'date-fns';
import esLocale from 'date-fns/locale/es'
export function getCurrentDateInDDMMYYYY(){
        const currentDate = new Date();
        const dayNumber = currentDate.getDate()
        const dayOfWeek = format(currentDate, 'EEEE', { locale: esLocale }); 
        const month = format(currentDate, 'MMMM', { locale: esLocale }); 
        const year = format(currentDate, 'yyyy'); 
        return `   ${dayOfWeek} ${dayNumber} de ${month} del año ${year}`;

}

export function getNextFourDays() {
    const currentDate = new Date();
    const dates = [];

    for (let i = 0; i < 4; i++) {
        const nextDay = addDays(currentDate, i);
      const day = format(nextDay, 'd', { locale: esLocale }); // Día
        const dayOfWeek = format(nextDay, 'EEEE', { locale: esLocale });
      const month = format(nextDay, 'MMMM', { locale: esLocale }); // Mes
      const year = format(nextDay, 'yyyy'); // Año a 4 dígitos

    dates.push(`${dayOfWeek} ${day} de ${month} del año ${year}`);
    }
    return dates;
}
