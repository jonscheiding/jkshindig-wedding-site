import StoriesSection from '../components/sections/StoriesSection';
import EventSection from '../components/sections/EventSection';

const components = [
  { id: 'stories', component: StoriesSection },
  { id: 'event', component: EventSection }
];

export default {
  components,
  ids: components.map(c => c.id),
  showNavigation: components.length > 1
};
