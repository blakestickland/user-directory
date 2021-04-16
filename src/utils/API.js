import axios from "axios";
const BASEURL = "https://randomuser.me/api/?results=";
const query = "20&nat=au,nz";

// Export an object containing methods we'll use for accessing the randomuser.me API
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getUsers: function() {
    return axios.get(BASEURL + query);
  }
};
