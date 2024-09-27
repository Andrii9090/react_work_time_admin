import { useEffect, useState } from "react"
import { IWorkerDashboard } from "../components/workers/types"
import WorkerRepository from "../repositories/worker"
import toast from "react-hot-toast"

const useDashboard = () => {
    const [workers, setWorkers] = useState<IWorkerDashboard[]>([])

    useEffect(() => {
        const repository = new WorkerRepository()
        repository.getWorkingUsers().then((data) => {
            if (data.data.error) toast('Ha ocurrido un error!')
            else setWorkers(data.data.data!)
        })
    }, [])

    return {
        workers,
        setWorkers
    }
}

export default useDashboard