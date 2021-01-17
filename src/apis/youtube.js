import axios from 'axios';

const KEY = 'AIzaSyBs2c_YicTB_bMySOr3UcsTELJWcIJOCoQ';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});

