import axios from 'axios';

export default function fetchApi() {
  return axios.get('https://api.themov4d01&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1');
}
