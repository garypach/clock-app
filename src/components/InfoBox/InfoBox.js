import React from 'react';
import PropTypes from 'prop-types';
import './infobox.css';
/**
 * Primary UI component for user interaction
 */
export const InfoBox = (props) => {
  return (
    <div className="infobox-cont">
      <div className="infobox">
        <div className="info-left">
          <div className="info-left-top">
            <div className="info-headers">current timezone</div>
            <div className="info-text">{props.timezone}</div>
          </div>
          <div className="info-left-bottom">
            <div className="info-headers">day of year</div>
            <div className="info-text">{props.daysofyear}</div>
          </div>
        </div>
        <div className="info-right">
          <div className="info-right-top">
            <div className="info-headers">days of week</div>
            <div className="info-text">{props.daysofweek}</div>
          </div>
          <div className="info-right-bottom">
            <div className="info-headers">week number</div>
            <div className="info-text">{props.weeknumber}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

InfoBox.propTypes = {
  /**
   * What timezone
   */
  timezone: PropTypes.string,
   /**
   * What timezone
   */
    daysofyear: PropTypes.string,
     /**
   * What days of week left
   */
  daysofweek: PropTypes.string,
   /**
   * What week of year
   */
    weeknumber: PropTypes.string,
};

InfoBox.defaultProps = {
    timezone:'europe',
    daysofyear:'295',
    daysofweek:'5',
    weeknumber:'49'
};
