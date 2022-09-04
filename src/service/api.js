import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com/";
export default axios.create({
  baseURL: BASE_URL,
  params: {
    maxResults: "50",
  },
  headers: {
    "X-RapidAPI-Key": "ee94386f7cmsh73abc374c0daf81p1fa30djsn268fdb7997e0",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
});
