# Random Quote Machine🚀

## Project Description 📝

Hi guys welcome to my first react app. i make this project because of implementing HTML CSS and js as jsx components in thus html and js in root component of app.js and so on and it was so interesting this was new thing for me i never do that before, show my activity that how much i work on it and what i achive from this.
this website contains idea about how creating random machine.

```REACT
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
  ....
```

## Demo 📸
life demo link []

![screenshot](./assets/capture_240819_234359.png)

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
