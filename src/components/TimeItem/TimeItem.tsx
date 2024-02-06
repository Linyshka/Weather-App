import { TimeProps } from './types';

function TimeItem({ item }: TimeProps) {
  return (
    <>
      <span>{item.time}</span>
      <p>....</p>
      <h2>{item.temperature}&deg;</h2>
    </>
  );
}

export default TimeItem;
