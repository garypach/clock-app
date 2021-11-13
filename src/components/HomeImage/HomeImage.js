import React from 'react';
import PropTypes from 'prop-types';
import './homeimage.css';

/**
 * Primary UI component for user interaction
 */
export const HomeImage = (props) => {
  return (
      <div className="background-image">
          <img src={props.image} alt="nature"/>
      </div>
   
  );
};

HomeImage.propTypes = {
  /**
   * What background image to use
   */
  image: PropTypes.string,
};

HomeImage.defaultProps = {
  image: "https://c32-cdn.guidingtech.com/media/assets/_800x418_crop_center-center_82_none/Best-Nature-Wallpapers-in-4K-and-Full-HD-for-Desktop-and-Mobile-8.jpg?mtime=1549009677",
};
