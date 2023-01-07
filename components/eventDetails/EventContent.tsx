import classes from './EventContent.module.css';

type Props = {
  children: React.ReactNode;
};

export const EventContent = (props: Props) => {
  return (
    <section className={classes.content}>
      {props.children}
    </section>
  );
};