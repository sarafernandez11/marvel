import md5 from 'md5';
import axios from 'axios';

const publicKey = "6d8cf703a63832a3529c074b5c7cddfb";
const privateKey = "583f58ce9acbe8137c7f6a71b4dfc00b53d102c5";


const authURL = (apiURL) => {
  const timestamp = Date.now();
  const hash = md5(timestamp + privateKey + publicKey)
  if (apiURL.includes("?")){
    return apiURL + "&ts=" + timestamp  + "&apikey=" + publicKey + "&hash=" + hash
  }else{
    return apiURL + "?ts=" + timestamp  + "&apikey=" + publicKey + "&hash=" + hash
  }
}

const fetchPageNum = () => {
  const apiURL = authURL("https://gateway.marvel.com:443/v1/public/characters?limit=1")
  return axios.get(apiURL)
}

const fetchCharacterList = (charactersPerPage, offset) => {
  const apiURL = authURL("https://gateway.marvel.com:443/v1/public/characters?limit=" + charactersPerPage + "&offset=" +offset)
  return axios.get(apiURL)
}

const fetchComicDetail = (comicURI) => {
  const apiURL = authURL(comicURI)
  return axios.get(apiURL)
}

export {fetchCharacterList, fetchPageNum, fetchComicDetail};
