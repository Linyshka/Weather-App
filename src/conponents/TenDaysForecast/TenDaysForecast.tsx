import { daysForecastArray } from '../../data';
import DayItem from '../DayItem';

function TenDaysForecast() {

  return <>
    <h1>10-DAY FORECAST</h1>
    {daysForecastArray.map((item, index) => <DayItem key={index} day={item} />)}
  </>
}

export default TenDaysForecast;