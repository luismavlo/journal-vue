import axios from "axios";


const journalApi = axios.create({
    baseURL: 'https://vue-demos-50d8a-default-rtdb.firebaseio.com'
})

export default journalApi