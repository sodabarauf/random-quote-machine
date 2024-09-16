import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  // Correct API URL
  const apiURL = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';

  // Function to fetch a random quote from the API
  const fetchQuote = async () => {
    try {
      const response = await fetch(apiURL);

      if (!response.ok) {
        throw new Error('Failed to fetch');
      }

      const data = await response.json();
      const quotes = data.quotes; // Access the quotes array
      const randomIndex = Math.floor(Math.random() * quotes.length); // Get a random index
      const selectedQuote = quotes[randomIndex]; // Select a random quote

      setQuote(selectedQuote.quote); // Set the quote
      setAuthor(selectedQuote.author); // Set the author
    } catch (error) {
      console.error('Error fetching the quote: ', error);
      setQuote('Failed to fetch quote');
      setAuthor('Unknown');
    }
  };

  // Fetch a quote when the component loads
  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div id="quote-box">
      <p id="text">&quot;{quote}&quot;</p>
      <p id="author">- {author}</p>
      <button id="new-quote" onClick={fetchQuote}>
        New Quote
      </button>
      <a
        id="tweet-quote"
        href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(`"${quote}" - ${author}`)}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        Tweet Quote
      </a>
    </div>
  );
}

export default App;
