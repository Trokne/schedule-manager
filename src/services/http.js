import axios from 'axios';
import backendApi from '../constants/network/connection';

export default axios.create({
  baseURL: backendApi
});
