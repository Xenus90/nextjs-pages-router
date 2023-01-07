import Link from 'next/link';
import classes from './MainHeader.module.css';

type Props = {};

export const MainHeader = (props: Props) => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link href='/'>NextEvents</Link>
      </div>
      <nav className={classes.navigation}>
        <ul>
          <li>
            <Link href='/event'>All Events</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};