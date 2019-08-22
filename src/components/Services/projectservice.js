import axios from 'axios';

export default function fetchApi(data) {
  const Url = 'https://uimagic.com/wp-json/wp/v2/project';
  return axios.get(Url, { data });
}
