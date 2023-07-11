import { DateTime } from './luxon.js';

export const showDate = () => {
  const displayDate = document.querySelector('.date');
  const currentDate = DateTime.now();
  const options = {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: true,
  };
  const formattedTime = currentDate.toLocaleString(options);
  displayDate.textContent = formattedTime;
};
export const initializeDate = () => {
  setInterval(showDate, 1000);
};