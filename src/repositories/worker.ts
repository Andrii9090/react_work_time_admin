import { IWorker, IWorkerDashboard } from "../components/workers/types";
import BaseRepository from "./base";
import IResponse from "./types";

class WorkerRepository extends BaseRepository {

    async getWorkers() {
        return this.api.get<IResponse<IWorker[]>>('/workers/')
    }

    async getWorkerInfo(workerId: number) {
        return this.api.get<IResponse<IWorker>>('/workers/' + workerId)
    }

    async createWorker(data: IWorker) {
        return this.api.post<IResponse<IWorker>>('/users/', data)
    }

    async changeWorkerActive(workerId: number) {
        return this.api.patch<IResponse<IWorker>>('/workers/' + workerId)
    }

    async updateWorker(workerId: number, data: IWorker) {
        return this.api.put<IResponse<IWorker>>('/workers/' + workerId, data)
    }

    async getWorkingUsers() {
        return this.api.get<IResponse<IWorkerDashboard[]>>('/workers/working')
    }

    async getUserInfo() {
        return this.api.get<IResponse<IWorker>>('/users/user')
    }

    async updateUser(data: IWorker) {
        return this.api.put<IResponse<IWorker>>('/users/user', data)
    }

}

export default WorkerRepository