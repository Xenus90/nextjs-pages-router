export type Event = {
  id: string;
  title: string;
  description: string;
  location: string;
  date: string;
  image: string;
  isFeatured: boolean;
};

export const getAllEvents = async () => {
  const response = await fetch("https://next-js-1fc09-default-rtdb.firebaseio.com/events.json");
  const data = await response.json();
  const events: Event[] = [];
  for (const key in data) {
    events.push({
      id: key,
      ...data[key]
    });
  }
  return events;
}

export const getFeaturedEvents = async () => {
  const events = await getAllEvents();
  return events.filter(event => event.isFeatured);
}

export const getFilteredEvents = async (dateFilter: { year: number, month: number }) => {
  const { year, month } = dateFilter;
  const events = await getAllEvents();

  let filteredEvents = events.filter(event => {
    const eventDate = new Date(event.date);
    return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
  });

  return filteredEvents;
}

export const getEventById = async (id: string) => {
  const events = await getAllEvents();
  return events.find(event => event.id === id);
}