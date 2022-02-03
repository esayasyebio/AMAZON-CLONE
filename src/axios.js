import axios from 'axios';

const instance = axios.create({
  // THE API (cloud function) URL
  baseURL: 'https://us-central1-clone-2022.cloudfunctions.net/api',
});

export default instance;


// 'http://localhost:5001/clone-2022/us-central1/api'
// https://clone-2022.web.app