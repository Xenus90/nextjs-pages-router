import { useRef } from 'react';
import { Button } from '../ui/Button';
import classes from './EventsSearch.module.css';

type Props = {
  onSearch: (selectedYear: string, selectedMonth: string) => void;
};

export const EventsSearch = (props: Props) => {
  const yearRef = useRef<HTMLSelectElement>(null);
  const monthRef = useRef<HTMLSelectElement>(null);

  const submitHandler = (event: any) => {
    event.preventDefault();
    const selectedYear = yearRef.current?.value;
    const selectedMonth = monthRef.current?.value;
    if (selectedYear && selectedMonth) {
      props.onSearch(selectedYear, selectedMonth);
    }
  };

  return (
    <form className={classes.form}>
      <div className={classes.controls}>
        <div className={classes.control}>
          <label htmlFor="year">Year</label>
          <select ref={yearRef} name="year" id="year">
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </select>
        </div>
        <div className={classes.control}>
          <label htmlFor="month">Month</label>
          <select ref={monthRef} name="month" id="month">
            <option value="1">January</option>
            <option value="2">February</option>
            <option value="3">March</option>
            <option value="4">April</option>
            <option value="5">May</option>
            <option value="6">June</option>
            <option value="7">Jule</option>
            <option value="8">August</option>
            <option value="9">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>
        </div>
      </div>
      <Button onClick={submitHandler}>Find Events</Button>
    </form>
  );
};