import StoriesSection from '../components/sections/StoriesSection';

const components = [
  { id: 'stories', component: StoriesSection }
];

export default {
  components,
  ids: components.map(c => c.id),
  showNavigation: components.length > 1
};
