import { timeForecastArray } from '../../data';
import TimeItem from '../TimeItem/TimeItem';

function TimeForecast() {
  return (
    <>
      <h2>Cloudy conditions from 1AM-9AM, with showers expected at 9AM.</h2>
      {timeForecastArray.map((item, index) => <TimeItem key={index} item={item}/>)}
    </>
  )
}

export default TimeForecast;