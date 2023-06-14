import md5 from 'md5';
import axios from 'axios';

const publicKey = "f8198526bff1d104558f97c5e24ea83a";
const privateKey = "ba6145edc54ea329c16c359dde6699f205ed635c";


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
