import { Fragment, useState } from 'react';
import { Event, getFilteredEvents } from '../../helpers/api-util';
import EventList from '../../components/events/event-list';
import ResultsTitle from '../../components/events/results-title';
import Button from '../../components/ui/button';
import ErrorAlert from '../../components/ui/error-alert';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import useSwr from "swr";

function FilteredEventsPage() {
  const [events, setEvents] = useState<Event[]>();
  const router = useRouter();
  const filterData = router.query.slug;
  const numYear = +filterData![0];
  const numMonth = +filterData![1];

  useSwr(
    "https://next-js-1fc09-default-rtdb.firebaseio.com/events.json",
    url => fetch(url)
      .then(response => response.json())
      .then(data => {
        const events: Event[] = [];
        for (const key in data) {
          events.push({
            id: key,
            ...data[key]
          });
        }
        setEvents(events);
      })
  );

  if (!events) {
    return (
      <p className='center'>
        Loading...
      </p>
    );
  }

  if (
    isNaN(numYear)
    || isNaN(numMonth)
    || numYear > 2030
    || numYear < 2021
    || numMonth < 1
    || numMonth > 12
  ) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>Invalid filter. Please adjust your values!</p>
        </ErrorAlert>
        <div className='center'>
          <Button link='/events'>Show All Events</Button>
        </div>
      </Fragment>
    );
  }

  const filteredEvents = events.filter(event => {
    const eventDate = new Date(event.date);
    return eventDate.getFullYear() === numYear && eventDate.getMonth() === numMonth - 1;
  });

  if (!filteredEvents?.length) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>No events found for the chosen filter!</p>
        </ErrorAlert>
        <div className='center'>
          <Button link='/events'>Show All Events</Button>
        </div>
      </Fragment>
    );
  }

  return (
    <Fragment>
      <ResultsTitle date={new Date(numYear, numMonth - 1)} />
      <EventList items={filteredEvents} />
    </Fragment>
  );
}

export default FilteredEventsPage;
