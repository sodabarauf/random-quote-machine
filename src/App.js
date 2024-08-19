import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [qouteInfo, setQouteInfo] = useState({})

  useEffect(() => {
    getQuote();
  }, [])

  const getQuote = () => {
    fetch('https://api.quotable.io/random')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setQouteInfo({
          text: data.content,
          author: data.author
        });
      });
  };

  return (
    <div className="App">
      <div className="container">
        <div className='jumbotron text-center' id='quote-box'>
          <div className='card'></div>
          <div className='card-header'>Quotes</div>
          <div id="quote-box">
            <p id="text">{qouteInfo.text}</p>
            <p id="author">{qouteInfo.author}</p>
       <div className='row'> 
        <div className='col'>
        <button id="new-quote" onClick={getQuote}>New Quote</button>
        </div>
       <div className='col'>
      <a href={`https://twitter.com/intent/tweet?text= ${qouteInfo.text} ${qouteInfo.author}`}
                  target='_blank'
                  rel='noreferrer'
                  className='btn btn-outline-info '
                  id="tweet-quote"> post to twitter
            </a> 
          </div>
         </div>
         </div>
         </div>
      </div>
    </div>
  );
}

export default App;
