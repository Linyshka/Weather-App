export function convertDate(date: Date) {
  const options: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "2-digit",
    year: "numeric"
  };
  const data = date.toLocaleString("ru", options).split("."); 
  return `${data[2]}-${data[1]}-${data[0]}`;
}

export const range = (start: number, stop: number, step: number) =>
  Array.from({ length: (stop - start) / step }, (_, i) => start + i * step);
