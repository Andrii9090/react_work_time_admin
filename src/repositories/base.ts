import axios, { Axios } from "axios";
import config from "../config";

abstract class BaseRepository {
    api: Axios
    authToken: string | null

    constructor() {
        this.authToken = localStorage.getItem(config.TOKEN_KEY)
        if (this.authToken) {
            this.api = axios.create({
                baseURL: config.BASE_URL,
                headers: {
                    Authorization: 'Bearer ' + this.authToken
                }
            })
        } else {
            this.api = axios.create({
                baseURL: config.BASE_URL
            })
        }
    }
}

export default BaseRepository