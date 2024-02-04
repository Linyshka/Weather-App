import WeatherPropInterface from '../../interfaces/weatherPropsInterfaces';

type Props = {
  item: WeatherPropInterface
}

function PropertyItem({item}: Props) {
  return (
    <div style={{border: "1px solid black", width: "400px"}}>
      <h1>{item.title}</h1>
      <h2>{item.value}</h2>
      {item.description && <h3>{item.description}</h3>}
    </div>
  );
}

export default PropertyItem;