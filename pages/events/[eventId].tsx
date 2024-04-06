import { Fragment } from 'react';
import { getEventById, getFeaturedEvents } from '../../helpers/api-util';
import EventSummary from '../../components/event-detail/event-summary';
import EventLogistics from '../../components/event-detail/event-logistics';
import EventContent from '../../components/event-detail/event-content';
import { GetStaticPaths, GetStaticProps } from 'next';
import { Event } from '../../helpers/api-util';
import Head from 'next/head';

function EventDetailPage(props: { event: Event }) {
  const { event } = props;

  if (!event) {
    return (
      <div className='center'>
        <p>Loading!</p>
      </div>
    );
  }

  return (
    <Fragment>
      <Head>
        <title>{event.title}</title>
        <meta name="description" content={event.description} />
      </Head>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  );
}

export default EventDetailPage;

export const getStaticProps: GetStaticProps = async (context) => {
  const event = await getEventById(context.params?.eventId as string);

  return {
    props: {
      event,
    },
    revalidate: 60,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const events = await getFeaturedEvents();
  const paths = events.map(event => ({ params: { eventId: event.id } }))
  return {
    paths,
    fallback: true,
  };
};