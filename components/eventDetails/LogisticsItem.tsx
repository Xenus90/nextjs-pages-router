import classes from './LogisticsItem.module.css';

type Props = {
  children: React.ReactNode;
  icon: any;
};

export const LogisticsItem = (props: Props) => {
  const { icon: Icon } = props;

  return (
    <li className={classes.item}>
      <span className={classes.icon}>
        <Icon />
      </span>
      <span className={classes.content}>{props.children}</span>
    </li>
  );
};