import axios from 'axios';

// working api
// export default function fetchApi2() {
//   return axios.get('https://api.themoviedb.org/3/discover/movie?api_key=9725571b96179202ebd3830a5ee14d01&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1');
// }


// breaking test

export default function fetchApi2() {
  return axios.get('https://api.thorg/3/discover/movie?api_key=9725571b96179202ebd3830a5ee14d01&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1');
}
