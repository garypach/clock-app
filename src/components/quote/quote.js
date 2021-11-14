import React from 'react';
import PropTypes from 'prop-types';
import './quote.css';

/**
 * Primary UI component for user interaction
 */
export const Quote = (props) => {
  return (
      <div>
        <div>
        <div>
            {props.quote}
         </div>
         <div>
            {props.author}
         </div>
        </div>
        <div> </div>
    </div>
 
   
  );
};

Quote.propTypes = {
  /**
   * What quote to use
   */
  quote: PropTypes.string,
  author: PropTypes.string,

};

Quote.defaultProps = {
    quote:'insert quote here',
    author:'insert author here'

};
