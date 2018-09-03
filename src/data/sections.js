import StoriesSection from '../components/sections/StoriesSection';
import EventSection from '../components/sections/EventSection';
import GiftsSection from '../components/sections/GiftsSection';

const components = [
  { id: 'stories', component: StoriesSection },
  { id: 'event', component: EventSection },
  { id: 'gifts', component: GiftsSection }
];

export default {
  components,
  ids: components.map(c => c.id),
  showNavigation: components.length > 1
};
