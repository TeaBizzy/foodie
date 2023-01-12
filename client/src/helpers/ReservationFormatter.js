// Converts the given datetime string into the 
// format: 'Day Mon Date YYYY at HH:MM AM/PM'
export default function formatReservation(dateTime) {
  const date = new Date(dateTime);
  const dateString = date.toDateString();
  const timeString = date.toLocaleTimeString().toUpperCase();

  return `${dateString} at ${timeString}`
}