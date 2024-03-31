import React from 'react';
import './HomePage.css';
import BirthdayCard from './BirthdayCard';


const HomePage = () => {
  const circles = [];
  const numCircles = Math.floor(Math.random() * 11) + 70; // Generate a random number of circles between 20 and 30

  // Generate circles with random sizes and colors
  for (let i = 0; i < numCircles; i++) {
    const size = Math.floor(Math.random() * 120) + 80; // Random size between 50 and 150 pixels
    const top = Math.random() * 100 ; // Random top position between 10% and 90% of the viewport height
    const left = Math.random() * 90 ; // Random left position between 10% and 90% of the viewport width
    const color = `rgb(${Math.random() * 256}, ${Math.random() * 256}, ${Math.random() * 256})`; // Random color
    // Generate random shades of pink
    // const red = Math.floor(Math.random() * 156) + 100; // Red component between 100 and 255
    // const green = Math.floor(Math.random() * 101) + 50; // Green component between 50 and 150
    // const blue = Math.floor(Math.random() * 101) + 150; // Blue component between 150 and 250

    // const color = `rgb(${red}, ${green}, ${blue})`; // Random color


    circles.push(
      <div
        key={i}
        className="circle"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          top: `${top}%`,
          left: `${left}%`,
          backgroundColor: color,
        }}
      />
    );
  }

  return (
    <div className="home-page">
        <div className="backgrounds">
            <div><BirthdayCard/></div>
        </div>
      {circles}
      
    </div>
  );
}

export default HomePage;
