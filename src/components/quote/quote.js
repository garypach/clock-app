import React from 'react';
import PropTypes from 'prop-types';
import './quote.css';
import { useState,useEffect } from 'react';
import { MainButton } from '../MainButton/MainButton';
/**
 * Primary UI component for user interaction
 */
export const Quote = (props) => {
  const [quote,setQuote] = useState([]);
  const [error, setError] = useState(null);

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  const randomQuote = ()=> {
    fetch(`https://api.quotable.io/random`)
      .then(res => res.json())
      .then(
        (result) => {
          setQuote(result);
          console.log(result.results)
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setError(error);
        }
      )
  }

  useEffect (()=>{
    randomQuote();
  },[]);


  return (
      <div className="quote-cont">
        <div className="quote-author">
        <div className="quote">
            {quote.content}
         </div>
         <div className="author">
         {quote.author}
         </div>
        </div>
        <div className="refresh-button">
          <MainButton onClick={randomQuote} label="new quote"/>
        </div>
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
