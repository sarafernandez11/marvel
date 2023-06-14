# MARVEL CHARACTERS APP

This is a React web app that contains a list with information from all the Marvel characters, fetched from the official Marvel API.

### Github-hosted APP
If you're using Chrome or Firefox you can see the APP hosted [here](https://sarafernandez11.github.io/marvel/).

### To run it locally
You must have Node.js installed and up to date. Then, just download or clone this repo and, once inside the project directory run the following commands:
```
npm install
npm run build
serve -s build
```
You should now type `localhost:3000` in your browser and you'll be able to see the site up and running! 

### Notice
If the page appears white and an error 429 is thrown when making requests to the API it can be because there have been too many requests made that day with the same key, since it is limited to 3000. 
In that case please change the keys in `api.js` to the following:
```
const publicKey = "6d8cf703a63832a3529c074b5c7cddfb"
const privatKey = "583f58ce9acbe8137c7f6a71b4dfc00b53d102c5"
```
