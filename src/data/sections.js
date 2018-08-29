import StoriesSection from '../components/sections/StoriesSection';

const components = [];

export default {
  components,
  ids: components.map(c => c.id),
  showNavigation: components.length > 1
};
