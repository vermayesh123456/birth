import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './BirthdayCard.css';

const BirthdayCard = ({ name }) => {
  return (
    <div className="birthday-card">
      <div className="card-content">
        <p>"Happy Birthday to my dearest ! 🎉 Today marks another milestone in your journey of beauty, wisdom, and grace. Your presence in my life has been nothing short of a blessing, filling each day with joy, laughter, and profound understanding.

As my girlfriend, you've shown me the true meaning of love, nurturing our relationship with care, patience, and unwavering support. Your maturity astounds me, guiding us through life's twists and turns with a wisdom beyond your years. Yet, amidst it all, your heart remains pure, your spirit gentle, and your kindness a beacon of light in my world.

But it's not just as my partner that you shine so brightly; it's as my best friend too. You've seen me at my best and stood by me at my worst, offering a shoulder to lean on and an ear to listen, even when words fail me. Our bond is a testament to the depth of our connection, built on a foundation of trust, loyalty, and an endless reservoir of inside jokes.

With each passing year, you only grow more beautiful, both inside and out. Your laughter fills the room like music, your smile brightens even the darkest of days, and your presence brings warmth to my soul. Today, as we celebrate you, know that my love for you knows no bounds.

Here's to another year of adventures, of dreams shared and goals achieved, of love that knows no limits. May your birthday be as special as you are to me, filled with all the joy, love, and laughter your heart can hold.

Happy Birthday, my darling girlfriend and best friend. I am endlessly grateful for your presence in my life. Here's to many more birthdays together, and to a love that continues to grow with each passing day. I love you more than words can express." 🎂🎈❤️</p>
      </div>
      <Link to="/birthday-message"> {/* Use Link instead of <a> */}
        <button type="button" className="btn btn-white">Next</button>
      </Link>
    </div>
  );
}

export default BirthdayCard;
