import axios from "axios";
const makeRequest = (options) => {
  return axios(options);
};

export default makeRequest;
