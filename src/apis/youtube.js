import axios from "axios";

const KEY = "AIzaSyCvemoInXjtvT7y94GV2ujThMN-bVKZB7c";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
