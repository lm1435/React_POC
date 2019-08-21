import axios from 'axios';

export default function fetchApi() {
  const Url = 'https://uimagic.com/wp-json/wp/v2/project';

  return axios.get(Url);
}
