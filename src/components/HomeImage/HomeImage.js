import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './homeimage.css';
import { InfoBox } from '../InfoBox/InfoBox';
import { Time } from '../time/Time';
import { MainButton } from '../MainButton/MainButton';
import { useState,} from 'react';
import {Quote} from '../quote/quote'
/**
 * Primary UI component for user interaction
 */
export const HomeImage = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const [location,setLocation] = useState('');
  const [error, setError] = useState(null);
  const [time,setTime] = useState('')
  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(()=> {
    fetch(`https://api.freegeoip.app/json/?apikey=e21e6b30-4584-11ec-8cea-87d6316bda55`)
      .then(res => res.json())
      .then(
        (result) => {
          setLocation(result);
          console.log(result.results)
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setError(error);
        }
      )
  },[]);

  useEffect(()=> {
    fetch(`http://worldtimeapi.org/api/ip`)
      .then(res => res.json())
      .then(
        (result) => {
          setTime(result);
          console.log(result.results)
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setError(error);
        }
      )
  },[time.ip]);
  let localtime= Date().toLocaleString().slice(15).slice(0,-36)
 
  return (
      <div className="background-image">
          <img src={props.image} alt="nature"/>
          <Quote/>
          <div className={`body-cont ${isOpen ? 'body-cont-active' : ''}`}>
          <Time time={localtime} abbreviation={time.abbreviation}location={location.time_zone} />
          <MainButton onClick={toggle} label="more"/>
          </div>
          <InfoBox active = {`infobox-cont ${isOpen ? 'infobox-cont-active' : ''}`}/>
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

export default HomeImage;
