# Random Quote Machine🚀

## Project Description 📝

Hi guys welcome to my first react app. i make this project because of implementing HTML CSS and js as jsx components in thus html and js in root component of app.js and so on and it was so interesting this was new thing for me i never do that before, show my activity that how much i work on it and what i achive from this.
this website contains idea about how creating random machine.


```REACT
function App() {
//set state for the fetch API json response (array of quotes) & set state to get a randomized quote
  const [quotes, setQuotes] = useState([]);
  const [randomQuote, setRandomQuote] = useState([]);
//fetch data from API
  useEffect(() => {
    async function fetchData(){
      const response = await fetch('https://type.fit/api/quotes');
      const data = await response.json();
//use data to set a random quote into state
      setQuotes(data);
     # Random Quote Machine🚀

## Project Description 📝

Hi guys welcome to my first react app. i make this project because of implementing HTML CSS and js as jsx components in thus html and js in root component of app.js and so on and it was so interesting this was new thing for me i never do that before, show my activity that how much i work on it and what i achive from this.
this website contains idea about how creating random machine.


```REACT
function App() {
//set state for the fetch API json response (array of quotes) & set state to get a randomized quote
  const [quotes, setQuotes] = useState([]);
  const [randomQuote, setRandomQuote] = useState([]);
//fetch data from API
  useEffect(() => {
    async function fetchData(){
      const response = await fetch('https://type.fit/api/quotes');
      const data = await response.json();
//use data to set a random quote into state
      setQuotes(data);
      let randomIndex = Math.floor(Math.random() * data.length);
      setRandomQuote(data[randomIndex]);
    }
    ....}
```

## Demo 📸
life demo link []

## Technologies Used 🛠️
- HTML
- CSS
- REACT JS

## Installation 💻

```clone
git@github.com:sodabarauf/random-quote-machine.git
cd random-quote
npm install
npm start
```
## Features ⭐
- This website is a responsive website for mobile and desktop version. 

## Author 👩‍💼
Sodaba✨Rauf✨
- Github: [https://github.com/sodabarauf]✔
- LinkedIn: [https://www.linkedin.com/in/sodaba-r-5a0733255/]✔
- Email: [sodabarauf4@gmail.com]✔

## Contributing 🤝
🎇 by using this link you can share your opinion : [https://github.com/sodabarauf/random-quote-machine]

 let randomIndex = Math.floor(Math.random() * data.length);
      setRandomQuote(data[randomIndex]);
    }
    ....}
```

## Demo 📸
life demo link []

## Technologies Used 🛠️
- HTML
- CSS
- REACT JS

## Installation 💻

```clone
git@github.com:sodabarauf/random-quote-machine.git
```
## Features ⭐
- This website is a responsive website for mobile and desktop version. 

## Author 👩‍💼
Sodaba✨Rauf✨
- Github: [https://github.com/sodabarauf]✔
- LinkedIn: [https://www.linkedin.com/in/sodaba-r-5a0733255/]✔
- Email: [sodabarauf4@gmail.com]✔

## Contributing 🤝
🎇 by using this link you can share your opinion : [https://github.com/sodabarauf/random-quote-machine]