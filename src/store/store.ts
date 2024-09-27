import { create } from "zustand"
import { RecordResponse } from "../components/records/types"
import { IWorker } from "../components/workers/types"

interface IMainStore {
    token: string | null
    setToken: (token: string | null) => void

    workers: IWorker[] | null
    setWorkers: (workers: IWorker[]) => void

    records: RecordResponse | null
    setRecords: (records: RecordResponse) => void

    isLoading: boolean
    setIsLoading: (isLoading: boolean) => void
}


const useMainStore = create<IMainStore>()((set) => (

    {
        token: null,
        setToken: (token: string | null) => set({ token }),

        workers: null,
        setWorkers: (workers: IWorker[]) => set({ workers }),

        records: null,
        setRecords: (records: RecordResponse) => set({ records }),

        isLoading: false,
        setIsLoading: (isLoading: boolean) => set({ isLoading })
    }
))

export default useMainStore