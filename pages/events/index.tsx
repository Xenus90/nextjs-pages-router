import { Fragment } from 'react';
import { useRouter } from 'next/router';
import { Event, getAllEvents } from '../../helpers/api-util';
import EventList from '../../components/events/event-list';
import EventsSearch from '../../components/events/events-search';
import { GetStaticProps } from 'next';
import Head from 'next/head';

function AllEventsPage(props: { events: Event[] }) {
  const router = useRouter();
  const { events } = props;

  function findEventsHandler(year, month) {
    const fullPath = `/events/${year}/${month}`;

    router.push(fullPath);
  }

  return (
    <Fragment>
      <Head>
        <title>All Events</title>
      </Head>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </Fragment>
  );
}

export default AllEventsPage;

export const getStaticProps: GetStaticProps = async () => {
  const events = await getAllEvents();

  return {
    props: {
      events,
    },
    revalidate: 60,
  };
};