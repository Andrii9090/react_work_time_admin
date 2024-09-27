import { useEffect, useState } from "react"
import { IWorker } from "../components/workers/types"
import WorkerRepository from "../repositories/worker"
import toast from "react-hot-toast"
import { useForm } from "react-hook-form"

const useWorker = (workerId: number, sameUser = false) => {
    const [workerData, setWorkerData] = useState<IWorker>({
        id: 0,
        email: '',
        phone: '',
        first_name: '',
        last_name: '',
        position: '',
        document: '',
        is_active: true,
        is_admin: false
    })

    const reset = useForm().reset
    const workerRepository = new WorkerRepository()

    const isDiff = (data: IWorker, oldData: IWorker) => {
        return data.email !== oldData.email
            || data.phone !== oldData.phone
            || data.first_name !== oldData.first_name
            || data.last_name !== oldData.last_name
            || data.position !== oldData.position
            || data.document !== oldData.document
            || data.is_active !== oldData.is_active
    }

    const getWorkerInfo = () => {
        workerRepository.getWorkerInfo(workerId)
            .then((response) => {
                if (response.data.error) toast('Ha ocurrido un error!')
                else
                    setWorkerData(response.data.data!)
            })
            .catch(() => toast('Ha ocurrido un error!'))
    }

    const onChangeActive = (isActive: boolean) => {
        if (isActive !== workerData.is_active)
            workerRepository.changeWorkerActive(workerId)
                .then(() => {
                    setWorkerData({ ...workerData, is_active: !workerData.is_active })
                })
                .catch(() => toast('Ha ocurrido un error!'))
    }


    const updateWorker = (data: IWorker) => {
        if (isDiff(data, workerData)) {
            workerRepository.updateWorker(workerId, data)
                .then(() => {
                    setWorkerData(data)
                    toast('Trabajador actualizado con exito!')
                })
                .catch(() => toast('Ha ocurrido un error!'))
        }
    }

    const createWorker = async (data: IWorker): Promise<boolean> => {
        const result = await workerRepository.createWorker(data)
            .then((res) => {
                if (res.data.error) {
                    toast('Ha ocurrido un error!')
                    return false
                } else {
                    toast('Trabajador creado con exito!')
                    return true
                }
            })
            .catch(() => {
                toast('Ha ocurrido un error!')
                return false
            })

        return result
    }

    const getUserInfo = () => {
        workerRepository.getUserInfo()
            .then((response) => {
                if (response.data.error) toast('Ha ocurrido un error!')
                else
                    setWorkerData(response.data.data!)
            })
    }

    const updateUser = (data: IWorker) => {
        if (isDiff(data, workerData))
            workerRepository.updateUser(data)
                .then((response) => {
                    if (response.data.error) {
                        toast('Ha ocurrido un error!')
                    } else {
                        setWorkerData(response.data.data!)
                        toast('Usuario actualizado con exito!')
                    }

                })
    }

    const onSubmitHandler = (data: IWorker) => {
        if (!Number.isNaN(workerId)) {
            updateWorker(data)
        }
        if (sameUser) {
            updateUser(data)
        }
        if (Number.isNaN(workerId) && !sameUser) {
            createWorker(data).then((result) => result && reset())
        }
    }

    if (!Number.isNaN(workerId)) useEffect(() => getWorkerInfo(), [workerId])

    return {
        getWorkerInfo,
        workerData,
        setWorkerData,
        onChangeActive,
        updateWorker,
        createWorker,
        getUserInfo,
        updateUser,
        onSubmitHandler
    }
}

export default useWorker