import { useRouter } from 'next/router';
import { EventContent } from '../../components/eventDetails/EventContent';
import { EventLogistics } from '../../components/eventDetails/EventLogistics';
import { EventSummary } from '../../components/eventDetails/EventSummary';
import { getEventById } from '../../dummy-data';

const EventDetailPage = () => {
  const router = useRouter();
  const eventId = router.query.eventId as string;
  const event = getEventById(eventId);

  if (!event) {
    return <p>No Event Found</p>
  }

  return (
    <>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title} />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </>
  );
};

export default EventDetailPage;