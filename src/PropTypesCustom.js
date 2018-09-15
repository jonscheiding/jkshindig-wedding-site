import PropTypes from 'prop-types';

const date = PropTypes.instanceOf(Date);

const children = PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]);

const name = PropTypes.exact({
  first: PropTypes.string.isRequired,
  last: PropTypes.string.isRequired,
  middle: PropTypes.string
});

const address = PropTypes.exact({
  street: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  zip: PropTypes.string.isRequired
});

const location = PropTypes.exact({
  name: PropTypes.string.isRequired,
  address: address.isRequired,
  url: PropTypes.string.isRequired
});

const person = PropTypes.exact({
  name: name.isRequired,
  nickname: PropTypes.string,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string
});

const answers = PropTypes.arrayOf(PropTypes.string);

const attendant = PropTypes.exact({
  person: person.isRequired,
  spouse: PropTypes.number.isRequired,
  answers: answers.isRequired
});

const questions = PropTypes.arrayOf(PropTypes.string);

const spouse = person;
const spouses = PropTypes.arrayOf(spouse);
const attendants = PropTypes.arrayOf(attendant);

const content = PropTypes.exact({
  spouses: spouses.isRequired,
  attendants: attendants.isRequired,
  questions: questions.isRequired,
  story: PropTypes.string.isRequired,
  date: date.isRequired,
  location: location.isRequired
});

const PropTypesEx = { date, children };
const PropTypesContent = { 
  name, address, location, person, 
  spouse, spouses, attendant, attendants, 
  questions, content 
};

export { PropTypesEx, PropTypesContent };
