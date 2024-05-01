import { useState } from 'react';
import styles from "./bottom-group.module.css";
import axios from 'axios';

const StarRating = ({ onRatingSelect }) => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  const handleStarClick = (value) => {
    setRating(value);
    onRatingSelect(value);
  };

  const handleMouseEnter = (value) => {
    setHoverRating(value);
  };

  const handleMouseLeave = () => {
    setHoverRating(0);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      {[1, 2, 3, 4, 5].map((value) => (
        <span
          key={value}
          style={{
            color: value <= (hoverRating || rating) ? 'gold' : 'gray',
            cursor: 'pointer',
            fontSize: '5rem',
          }}
          onClick={() => handleStarClick(value)}
          onMouseEnter={() => handleMouseEnter(value)}
          onMouseLeave={handleMouseLeave}
        >
          &#9733;
        </span>
      ))}
    </div>
  );
};

const BottomGroup = () => {
  const [showFeedbackModal, setShowFeedbackModal] = useState(false);

  const handleFeedbackClick = () => {
    setShowFeedbackModal(!showFeedbackModal);
  };

  const handleRatingSelect = (rating) => {
    console.log('Selected rating:', rating);
    // Send rating to server
    axios.post('http://localhost:8080/api/saveRating', { rating }, {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:3000' // Adjust the origin to match your frontend URL
      
      }
    })
    .then(response => {
      if (response.ok) {
        console.log('Rating sent to server successfully.');
        // Close the stars popup
        setShowFeedbackModal(false);
      } else {
        console.error('Failed to send rating to server.');
      }
    })
    .catch(error => {
      console.error('Error sending rating to server:', error);
    });
  };
  

  return (
    <footer className={styles.bottomGroup}>
      <div className={styles.rectangle} />
      <div className={styles.indeedx} />
      <div className={styles.bottomGroupInner}>
        <div className={styles.frameParent}>
          <div className={styles.frameGroup}>
            <div className={styles.optionsParent}>
              <div className={styles.options}>
                Legal    Privacy Policy      Safety     Contact Us     Expand Your Preferences
              </div>
              <button className={styles.feedback} onClick={handleFeedbackClick}>
                Feedback
              </button>
              {showFeedbackModal && (
                <div style={{ marginLeft: '2.5rem' }}>
                  <StarRating onRatingSelect={handleRatingSelect} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default BottomGroup;