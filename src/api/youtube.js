import axios from "axios"

const KEY = 'AIzaSyC1iqutH-DaeV_XgFoBuL6pRa1IxNG8bUA'

export default 
axios.create({
  baseURL:'https://www.googleapis.com/youtube/v3/search',
  params: {
    part: 'snippet',
    type: 'video',
    maxResult: 5,
    key: KEY
  }
})