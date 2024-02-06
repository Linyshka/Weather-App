import { daysForecastArray } from '@/data';
import DayItem from '../DayItem';

function TenDaysForecast() {

  return <>
    <h2>10-DAY FORECAST</h2>
    {daysForecastArray.map((item, index) => <DayItem key={index} day={item} />)}
  </>
}

export default TenDaysForecast;