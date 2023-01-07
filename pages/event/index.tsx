import { useRouter } from 'next/router';
import { EventList } from '../../components/events/EventList';
import { EventsSearch } from '../../components/events/EventsSearch';
import { getAllEvents } from '../../dummy-data';

const AllEventsPage = () => {
  const router = useRouter();
  const events = getAllEvents();

  const findEvents = (selectedYear: string, selectedMonth: string) => {
    const fullPath = `/event/${selectedYear}/${selectedMonth}`;
    router.push(fullPath);
  };

  return (
    <>
      <EventsSearch onSearch={findEvents} />
      <EventList items={events} />
    </>
  );
};

export default AllEventsPage;