import { useCallback, useMemo } from "react"
import { dateTimeToStr, getFirstDayOfMonth, getLastDayOfMonth } from "../helpers/datetime.helper"
import RecordRepository from "../repositories/record"
import useMainStore from "../store/store"
import toast from "react-hot-toast"
import { RecordsFilterForm } from "../components/records/types"



const useRecordFilter = (userId: number) => {
    const { setRecords, setIsLoading } = useMainStore((state) => state)
    const repository = new RecordRepository()

    const firstDayOfMonth = useMemo(() => getFirstDayOfMonth(), [])
    const lastDayOfMonth = useMemo(() => getLastDayOfMonth(), [])

    const getRecordsReport = (dateStart: string, dateEnd: string, reportType: 'pdf' | 'exel', userId: number) => {
        setIsLoading(true)
        repository
            .getReport(dateTimeToStr(new Date(dateStart)), dateTimeToStr(new Date(dateEnd)), reportType, userId)
            .then((data) => {
                window.open(data, '_blank')
                window.open(data, '_blank')
            })
            .catch(() => toast('Ha ocurrido un error!'))
            .finally(() => setIsLoading(false))
    }

    const getRecords = (dateStart: Date, dateEnd: Date, userId: number) => {

        repository
            .getRecords(dateTimeToStr(dateStart), dateTimeToStr(dateEnd), userId)
            .then((data) => {
                return setRecords(data)
            })
            .catch(() => toast('Ha ocurrido un error!'))
            .finally(() => setIsLoading(false))

    }

    const onSubmitHandler = useCallback((data: RecordsFilterForm) => {
        const start = new Date(data.dateStart)
        const end = new Date(data.dateEnd)
        getRecords(start, end, userId)
    }, [])

    const reportsHandler = useCallback((dateStart: string, dateEnd: string, reportType: 'pdf' | 'exel', isValid = false) => {
        if (isValid) {
            getRecordsReport(dateStart, dateEnd, reportType, userId)
        } else {
            toast('Hay que rellenar las fechas!')
        }
    }, [])


    return {
        firstDayOfMonth,
        lastDayOfMonth,
        getRecords,
        reportsHandler,
        onSubmitHandler
    }
}

export default useRecordFilter