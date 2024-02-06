import { weatherProperties } from '@/data'

function WeatherProperties() {

  return (
    <>
      {weatherProperties.map((property, index) => {
        return (
          <div key={index} style={{border: "1px solid black", width: "400px"}}>
            <h2>{property.title}</h2>
            <h2>{property.value}</h2>
            {property.description && <h3>{property.description}</h3>}
          </div>
        )
      } )}
    </>
  )
}

export default WeatherProperties