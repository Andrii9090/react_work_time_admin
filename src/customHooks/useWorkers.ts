import { useEffect } from "react"
import WorkerRepository from "../repositories/worker"
import toast from "react-hot-toast"
import useMainStore from "../store/store"

const useWorkers = () => {
    const setWorkers = useMainStore(state => state.setWorkers)
    const workers = useMainStore(state => state.workers)
    const repository = new WorkerRepository()
    const getWorkers = () => {
        repository.getWorkers()
            .then((data) => {
                if (data.data.error) toast('Ha ocurrido un error!')
                else setWorkers(data.data.data!)
            })
    }

    useEffect(() => {
        getWorkers()
    }, [])

    return {
        workers
    }
}

export default useWorkers