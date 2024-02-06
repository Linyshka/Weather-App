import { TimeProps } from './types';

function TimeItem({ item }: TimeProps) {
  return (
    <>
      <h2>{item.time}</h2>
      <p>....</p>
      <h2>{item.temperature}&deg;</h2>
    </>
  );
}

export default TimeItem;
