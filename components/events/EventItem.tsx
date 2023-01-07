import Image from 'next/image';
import { EventItemType } from '../../types';
import AddressIcon from '../icons/AddressIcon';
import ArrowRightIcon from '../icons/ArrowRightIcon';
import DateIcon from '../icons/DateIcon';
import { Button } from '../ui/Button';
import classes from './EventItem.module.css';

type Props = {
  item: EventItemType;
};

export const EventItem = (props: Props) => {
  const { item } = props;
  const humanReadableDate = new Date(item.date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  const formattedAddress = item.location.replace(', ', '\n');
  const exploreLink = `/event/${item.id}`;

  return (
    <li className={classes.item}>
      <Image src={`/${item.image}`} alt='event image' width={100} height={100}></Image>
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{item.title}</h2>
          <div className={classes.address}>
            <DateIcon />
            <time className={classes.date}>{humanReadableDate}</time>
          </div>
          <div className={classes.address}>
            <AddressIcon />
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div className={classes.actions}>
          <Button link={exploreLink}>
            <span>Explore event</span>
            <span className={classes.icon}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
};