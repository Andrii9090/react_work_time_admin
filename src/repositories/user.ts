import { IToken } from "../components/users/types";
import BaseRepository from "./base";
import IResponse from "./types";

class UserRepository extends BaseRepository {
    login(data: { email: string; password: string }) {
        return this.api.post<IResponse<IToken>>('/users/login/admin', data)
    }
}

export default UserRepository