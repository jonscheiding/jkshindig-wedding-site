import React, { Component } from 'react';

import ProfilePicture from '../ProfilePicture';
import content from '../../data/content';

export default class StoriesSection extends Component {
  render() {
    const Profile = ({image, title, name, ...props}) => (
      <div {...props}>
        <ProfilePicture image={image} />
        <h3>{name.first} {name.last}</h3>
        <h4>{title}</h4>
      </div>
    );

    const Spouse = props => <Profile className='spouse' {...props} />;
    const Attendant = props => <Profile className='attendant' {...props} />;
    const QA = ({question, answer}) => (
      <div>
        <h4>{question}</h4>
        <p>{answer}</p>
      </div>
    );

    return (
      <div>
        <h2>Stories</h2>
        <div className='spouses'>
          <div>
            <Spouse {...content.spouses[0]} />
            <Spouse {...content.spouses[1]} />
          </div>
          <div className='story'>
            <p>{content.story}</p>
          </div>
        </div>
        <div className='attendants'>
          {content.attendants.map(attendant => (
            <div>
              <div className='small-flourish' />
              <Attendant {...attendant} />
              <div className='story'>
                {attendant.qa.map(qa => (
                  <QA {...qa} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
