import { useRouter } from "next/router";
import { EventList } from "../../components/events/EventList";
import { getFilteredEvents } from "../../dummy-data";

const FilteredEventsPage = () => {
  const router = useRouter();
  const filterData = router.query.slug;

  if (!filterData) {
    return (
      <p className="center">Loading...</p>
    );
  }

  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];
  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  if (isNaN(numYear) || isNaN(numMonth)) {
    return (
      <p className="center">Invalid filter</p>
    );
  }

  const events = getFilteredEvents({ year: numYear, month: numMonth });

  if (!events || events.length === 0) {
    return (
      <p className="center">No events found</p>
    );
  }

  return (
    <>
      <EventList items={events} />
    </>
  );
};

export default FilteredEventsPage;