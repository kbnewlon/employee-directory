//this file uses axios to pull the API
import axios from 'axios';

export default {
    getRandomPeople: function () {
        return axios.get("https://randomuser.me/api/?results=200&nat=us")

    }

}