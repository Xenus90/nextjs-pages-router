import Link from 'next/link';
import classes from './Button.module.css';

type Props = {
  children: React.ReactNode;
  link?: string;
  onClick?: (e: any) => void;
};

export const Button = (props: Props) => {
  return props.link ? (
    <Link className={classes.btn} href={props.link}>
      {props.children}
    </Link>
  ) : (
    <button className={classes.btn} onClick={props.onClick}>
      {props.children}
    </button>
  );
};