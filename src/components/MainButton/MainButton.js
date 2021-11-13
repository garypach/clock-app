import React from 'react';
import PropTypes from 'prop-types';
import './mainbutton.css';

/**
 * Primary UI component for user interaction
 */
export const MainButton = ({ backgroundColor,label, ...props }) => {
  return (
    <button
      type="button"
      className={['mainbutton', 'mainbutton--primary'].join(' ')}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};

MainButton.propTypes = {
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

MainButton.defaultProps = {
  backgroundColor: null,
  onClick: undefined,
};
