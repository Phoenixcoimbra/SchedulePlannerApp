// Front-end environment with ES6 modules
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
dayjs.extend(customParseFormat);

// Display the current date at the top of the page
const date = dayjs().format('dddd, MMMM D, YYYY');
document.getElementById('date').innerHTML = date;



