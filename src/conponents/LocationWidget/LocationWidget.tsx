import LocationInterface from '../../interfaces/sideBarInterfaces';

type LocationProps = {
  location: LocationInterface;
}

function LocationWidget({location} : LocationProps) {
  const date = new Date();

  return (
    <div style={{border: "1px solid black", padding: "10px"}}>
      {location.isMyLocation ? (
        <div>
          <h1>My location</h1>
          <h2>{location.city}</h2>
        </div>
      ) : (
        <div>
          <h1>{location.city}</h1>
          <h2>{date.getHours()}:{date.getMinutes()}</h2>
        </div>
      )}
      <p>Partly cloudy</p>
      <div>
        <h3>21&deg;</h3>
        <p>H:29&deg; L:15&deg;</p>
      </div>
    </div>
  );
}

export default LocationWidget;