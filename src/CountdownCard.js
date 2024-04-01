import React, { useState, useEffect } from 'react';
import moment from 'moment';
import './CountdownCard.css'; // Import CSS file for styling
import './HomePage.css';
import vid1 from "./asset/surp.mp4";

const CountdownCard = () => {
  const [countdown, setCountdown] = useState('');

  useEffect(() => {
    const calculateCountdown = () => {
      const now = moment();
      const midnight = moment().endOf('day');
      const diff = moment.duration(midnight.diff(now));
      const hours = diff.hours();
      const minutes = diff.minutes();
      const seconds = diff.seconds();
      setCountdown(`${hours}h ${minutes}m ${seconds}s`);
    };

    const interval = setInterval(() => {
      calculateCountdown();
    }, 1000);

    calculateCountdown(); // Initial calculation

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="countdown-card">
      <div className="card">
        <div className="card-header bg-warning text-white">
          Sweetheart I am Eagerly Waiting for this day...................
        </div>
        <div className="card-body">
          <h5 className="card-title">Time Left:</h5>
          <p className="card-text">{countdown}</p>
          <p className="card-text">Until a new Year begins!</p>
        </div>
      </div>

      <div className="card">
        <div>

        <div >
      <div className='vid'>
        <video controls autoPlay loop muted width="200px" height="400px">
          <source src={vid1} type='video/mp4'/>
        </video>
      </div>
    </div>

        </div>
        <div className="card-header bg-warning text-white">
         I'm super excited to share a surprise with you, but it'll have to wait until after midnight. Can't wait for you to see it
        </div>
      </div>
    </div>
  );
};

export default CountdownCard;
