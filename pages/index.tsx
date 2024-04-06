import { getFeaturedEvents } from '../helpers/api-util';
import EventList from '../components/events/event-list';
import { GetStaticProps } from 'next';

function HomePage(props: { featuredEvents: Event[] }) {
  return (
    <div>
      <EventList items={props.featuredEvents} />
    </div>
  );
}

export default HomePage;

export const getStaticProps: GetStaticProps = async () => {
  const featuredEvents = await getFeaturedEvents();

  return {
    props: {
      featuredEvents,
    },
    revalidate: 60 * 30,
  };
};
