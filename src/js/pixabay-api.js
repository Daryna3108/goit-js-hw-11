import axios from 'axios';

export function getImagesByQuery(query) {
  const API_KEY = '55893182-8e8d8d313eea42e04d9d959ce';
  const url = `https://pixabay.com/api/?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`;

  return axios.get(url).then(response => response.data);
}
