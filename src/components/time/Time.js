import React from 'react';
import PropTypes from 'prop-types';
import './time.css';

/**
 * Primary UI component for user interaction
 */
export const Time = (props) => {
  return (
        <div>
        <div>
            {props.time}
         </div>
         <div>
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
