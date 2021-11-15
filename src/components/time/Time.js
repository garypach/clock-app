import React from 'react';
import PropTypes from 'prop-types';
import './time.css';

/**
 * Primary UI component for user interaction
 */
export const Time = (props) => {
  
  return (
        <div className="time-cont time-cont-active">
        <div className="time">
          <div className="time-number">
          {props.time}
          </div>
          <div className="time-abbreviation">
          {props.abbreviation}
            </div>
         </div>
         <div className="location">
            {props.location}
         </div>
        </div>
 
   
  );
};

Time.propTypes = {
  /**
   * What Time to use
   */
  time: PropTypes.string,
location: PropTypes.string,

};

Time.defaultProps = {
    time:'insert Time here',
    location:'insert location here'

};
