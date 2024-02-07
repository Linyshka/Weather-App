import { timeForecastArray } from '@/data';
import TimeItem from '../TimeItem';

import style from "./TimeForecast.module.scss";

function TimeForecast() {
  return (
    <div className={style.timeForecast}>
      <h2>Cloudy conditions from 1AM-9AM, with showers expected at 9AM.</h2>
      <div className={style.timeBlock}>
        {timeForecastArray.map((item, index) => <TimeItem key={index} item={item}/>)}
      </div>
    </div>
  )
}

export default TimeForecast;