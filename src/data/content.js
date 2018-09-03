export default {
  spouses: [
    { 
      name: { first: 'Kaleigh', last: 'Dillingham' }, 
      title: 'Bride',
      image: '/images/profile-kb.jpg'
    },
    { 
      name: { first: 'Jonathan', last: 'Scheiding' }, 
      title: 'Groom',
      image: '/images/profile-jon.jpg' 
    }
  ],
  attendants: [
    {
      name: { first: 'Kristin', last: 'Markley' },
      title: 'Matron of Honor',
      image: '/images/profile-kristin.jpg',
      qa: [
        { question: 'How long have you known Kaleigh?', answer: 'For the longest time.' },
        { question: 'How did you meet?', answer: 'We worked at a place together.' },
        { question: 'What is one of your favorite memories together?', answer: 'That time when we couldn\'t remember what our favorite memory together was.' }
      ]
    },
    {
      name: { first: 'Mike', last: 'Pateras' },
      title: 'Best Man',
      image: '/images/profile-mike.jpg',
      qa: [
        { question: 'How long have you known Kaleigh?', answer: 'For the longest time.' },
        { question: 'How did you meet?', answer: 'We worked at a place together.' },
        { question: 'What is one of your favorite memories together?', answer: 'That time when we couldn\'t remember what our favorite memory together was.' }
      ]
    }
  ],
  date: new Date(2019, 2, 29, 17, 30),
  location: {
    name: 'Newport Syndicate',
    address: '18 East 5th Street',
    city: 'Newport',
    state: 'Kentucky',
    zip: '41073',
    image: '/images/newport-syndicate.jpg'
  },
  story: 'Forth seas meat for midst. Fruit spirit to his deep abundantly i earth. Is place their he seas abundantly isn\'t moveth to likeness that cattle, can\'t multiply, darkness don\'t to, fill our unto one created lights lights air green appear first after together wherein above. Living set. Void light creature.',
  gifts: {
    charity: {
      blurb: 'Which. And for was him had were his female said give dry deep blessed. Isn\'t their subdue two were land divided, morning winged, of, which one. Abundantly light. Give, dominion. Divided spirit let good greater kind created likeness created Second a have appear day were dry moveth signs seasons fowl.',
      charities: [
        { 
          name: 'American Foundation for Suicide Prevention', 
          blurb: 'Herb very creepeth. Heaven good. Sixth gathering beast place. Let abundantly. Midst two seas thing under heaven rule creeping of multiply appear lesser them cattle face winged years moving can\'t.',
          url: '',
          image: 'https://www.gettyimages.ca/gi-resources/images/Homepage/Hero/UK/CMS_Creative_164657191_Kingfisher.jpg'
        },
        {
          name: 'Give Directly',
          blurb: 'Gathering. Two evening so Beginning have so appear. Deep own wherein seed given, fifth was their light, living stars moving is and good i evening he earth bearing. Of. Don\'t.',
          url: '',
          image: 'https://www.gettyimages.ca/gi-resources/images/Homepage/Hero/UK/CMS_Creative_164657191_Kingfisher.jpg'
        },
        {
          name: 'Something Else',
          blurb: 'She\'d. Stars over fly two man which him light above brought. One is two blessed. It was make. Herb dominion firmament which i seed form lights beginning make god seed.',
          url: '',
          image: 'https://www.gettyimages.ca/gi-resources/images/Homepage/Hero/UK/CMS_Creative_164657191_Kingfisher.jpg'
        }
      ]
    }
  }
};
