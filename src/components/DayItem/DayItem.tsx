import { DayPropInterface } from '@/interfaces';

type DayProps = {
  day: DayPropInterface
}

function DayItem({day} : DayProps) {
  return <>
    <p>{day.day}</p>
    <p>{day.minTemperature}&deg;...{day.maxTemperature}</p>
  </>
}

export default DayItem;