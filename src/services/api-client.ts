import axios from "axios";
const apiKey = "5ffa153a9dfa4e3fbee457da9a206637";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: apiKey,
    },
    timeout: 2000,
});