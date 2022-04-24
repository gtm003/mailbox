export const formatDate = (date: string) => {
  const currentYear = new Date().getFullYear();
  const optionsDefault: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  };
  const optionsCurrentYear: Intl.DateTimeFormatOptions = {
    month: 'short',
    day: 'numeric',
  };

  return currentYear === new Date(date).getFullYear()
    ? new Date(date).toLocaleString('ru-Ru', optionsCurrentYear)
    : new Date(date).toLocaleString('ru-Ru', optionsDefault);
};
