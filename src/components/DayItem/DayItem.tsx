import { DayProps } from './types';

function DayItem({day} : DayProps) {
  return <>
    <p>{day.day}</p>
    <p>{day.minTemperature}&deg;...{day.maxTemperature}</p>
  </>
}

export default DayItem;