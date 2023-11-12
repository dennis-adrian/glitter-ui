export const formatDate = (date: string) => {
  const dateObj = new Date(date);
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  };
  return dateObj.toLocaleDateString('es-ES', options);
};

export const formatTime = (date: string) => {
  const dateObj = new Date(date);
  const options: Intl.DateTimeFormatOptions = {
    hour: 'numeric',
    minute: 'numeric',
  };
  return dateObj.toLocaleTimeString('es-ES', options);
}

export const formatDateWithTime = (date: string) => {
  return `${formatDate(date)} a las ${formatTime(date)}`
}
