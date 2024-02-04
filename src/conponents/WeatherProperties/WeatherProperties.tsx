import { weatherProperties } from '../../data'
import PropertyItem from '../PropertyItem'

function WeatherProperties() {

  return (
    <>
      {weatherProperties.map((property, index) => <PropertyItem key={index} item={property}/> )}
    </>
  )
}

export default WeatherProperties