import { useState } from 'react';
import quotes from './assets/quotes.json';
import { FaTwitter, FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import './App.css';

const getRandomQuote = () => {
  return quotes[Math.floor(Math.random() * quotes.length)];
};

const getRandomColor = () => {
  const red = Math.floor(Math.random() * 128);
  const green = Math.floor(Math.random() * 128);
  const blue = Math.floor(Math.random() * 128);
  return `rgb(${red}, ${green}, ${blue})`;
}

const transition = 'all 2s linear';

function App() {
  const [quote, setQuote] = useState(getRandomQuote());
  const [color, setColor] = useState(getRandomColor()); 

  const changeCode = () => {
    setQuote(getRandomQuote());
    setColor(getRandomColor());
  }


  return (
    <div className='background' style={{ backgroundColor: color, transition }}>
      <div id='quote-box'>
        <div className='quote-content' style={{ color: color , transition}}>
          <FaQuoteLeft size={30} style ={{ marginRight: '10px' }} />
          <h2 id='text'>{quote.quote}</h2>
          <h4 id='author'>- {quote.author}</h4>
          <FaQuoteRight size={30} style ={{ marginRight: '10px' }} />
        </div>

        <div className='buttons'>
          <a
            href='https://twitter.com/intent/tweet'
            id='tweet-quote'
            style={{
              marginRight: '10px',
              backgroundColor: color, 
              transition
            }} target="_blank" rel="noopener noreferrer"> <FaTwitter color='white' />
          </a>

          <button id='new-quote' onClick={changeCode} style={{ backgroundColor: color, transition }}>
            Change Quote
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
