import axios from 'axios';

//const KEY2 = 'AIzaSyD-QPllhY6lKG_96-RJLeBhtaPwhcSqfb4';
const KEY = 'AIzaSyAmf1-GEHDwiawoYm7Y4hRRBOxfHfe10qM';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});
