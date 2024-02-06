import { Props } from './types';

function PropertyItem({item}: Props) {
  return (
    <div style={{border: "1px solid black", width: "400px"}}>
      <h2>{item.title}</h2>
      <h2>{item.value}</h2>
      {item.description && <h3>{item.description}</h3>}
    </div>
  );
}

export default PropertyItem;