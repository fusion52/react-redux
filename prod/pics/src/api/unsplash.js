import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID 31ca51ab010f7530360f1bde4f1dae17f02bc14aac162b5f13c208f58addf6c3'
  }
});
