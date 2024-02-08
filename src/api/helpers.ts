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

export const getStartHour = () => {
  const now = new Date();
  const time = now.toLocaleString("en-US", {hour: "numeric", hour12: true}).split(" ");
  if (+time[0] <= 3 && time[1] === "AM") return 0;
  if (+time[0] >= 1 && time[1] === "PM") return +time[0] + 9;
  return +time[0] - 3;
}