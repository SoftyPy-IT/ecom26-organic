export const formatTime = (value: number) => String(value).padStart(2, '0');

export const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const day = formatTime(date.getDate());
  const month = formatTime(date.getMonth() + 1);
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};
