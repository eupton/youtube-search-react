import axios from 'axios'


//key restricted at console.developers.google.com, only works from localhost:3000 
//this key was for demo only it's been deleted
//go to https://console.developers.google.com/ to generate your own key

const KEY = 'AIzaSyCdxzLfcccUYfKIQz_u8f6y5Xa2Q6_ueZk';

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
})