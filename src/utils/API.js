import axios from "axios"
// const apiKey = "AIzaSyCtBd2C4zRtAXeuIHPiJBGz3AaGIo2MPTA";
const apiKey = process.env.REACT_APP_GOOGLE_KEY;


export default {
    searchVideos: function (term) {
        console.log(apiKey);
        return axios.get(`https://www.googleapis.com/youtube/v3/search`, {
            params: {
                key: apiKey,
                part: "snippet",
                q: term,
                maxResults: 8
            }
        })
    }
}