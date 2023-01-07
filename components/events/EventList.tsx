import { EventItemType } from '../../types';
import { EventItem } from './EventItem';
import classes from './EventList.module.css';

type Props = {
  items: EventItemType[];
};

export const EventList = (props: Props) => {
  const { items } = props;

  return (
    <ul className={classes.list}>
      {items.map(item => <EventItem key={item.id} item={item} />)}
    </ul>
  );
};
