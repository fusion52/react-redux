import axios from 'axios';

const KEY = 'AIzaSyCvKehiGjbuDhhrjGAzaedNpAaemdC94tc';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});
