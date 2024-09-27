import { ArrowDownOnSquareIcon } from '@heroicons/react/16/solid'
import { useEffect, useMemo, useState } from 'react'
import { useForm } from 'react-hook-form'
import { getDateInput } from '../../helpers/datetime.helper'
import { useParams } from 'react-router-dom'
import useRecordFilter from '../../customHooks/useRecordFilter'
import { RecordsFilterForm } from './types'

export const RecordFilter = () => {
    const userId = useMemo(() => Number(useParams().worker_id), [])
    const {
        firstDayOfMonth,
        lastDayOfMonth,
        getRecords,
        reportsHandler,
        onSubmitHandler,
    } = useRecordFilter(userId)
    const [isShowSaveRecords, setIsShowSaveRecords] = useState(false)

    const {
        register,
        handleSubmit,
        getValues,
        formState: { isValid },
    } = useForm<RecordsFilterForm>()

    useEffect(() => {
        getRecords(firstDayOfMonth, lastDayOfMonth, userId)
    }, [])

    return (
        <div className="flex md:flex-row md:justify-between md:items-center bg-slate-100 mb-3 rounded-md">
            <form
                onSubmit={handleSubmit(onSubmitHandler)}
                method="post"
                className="flex w-full flex-col justify-around md:flex-row md:justify-between md:items-center"
            >
                <div className="flex flex-auto justify-between md:justify-around items-center mr-2">
                    <span>Fecha de inicio</span>
                    <input
                        type="date"
                        defaultValue={getDateInput(firstDayOfMonth)}
                        {...register('dateStart', { required: true })}
                        className="border-b border-indigo-500 focus:outline-none text-slate-600 mb-1"
                    />
                </div>
                <div className="flex flex-auto justify-between md:justify-around items-center mr-2">
                    <span>Fecha de finalización</span>
                    <input
                        type="date"
                        defaultValue={getDateInput(lastDayOfMonth)}
                        {...register('dateEnd', { required: true })}
                        className="border-b border-indigo-500 focus:outline-none text-slate-600 mb-1"
                    />
                </div>
                <div className="flex md:justify-around items-center">
                    <button className="bg-indigo-600 text-white pr-2 pl-2 pb-1 pt-1 rounded-md hover:bg-indigo-500 font-extralight">
                        Filtrar
                    </button>
                </div>
            </form>
            <div className="relative w-3/12 p-1">
                <button
                    className="text-gray-700 p-2 transition-colors text-sm duration-300 hover:text-gray-500
                                data-[active=true]:underline text-center"
                    onClick={() => setIsShowSaveRecords(!isShowSaveRecords)}
                    data-active={isShowSaveRecords}
                >
                    Esport
                    <ArrowDownOnSquareIcon className="ml-1 size-4 inline-block" />
                </button>
                <div
                    className="z-20 absolute shadow-md transition-all duration-200 w-full origin-top-right  bg-white 
                                data-[show=true]:opacity-1 data-[show=true]:visible data-[show=false]:opacity-0 
                                data-[show=true]:h-30 data-[show=false]:invisible data-[show=false]:ease-out "
                    data-show={isShowSaveRecords}
                >
                    <div className="flex flex-col">
                        <button
                            className="text-center hover:underline p-3"
                            onClick={() => {
                                reportsHandler(
                                    getValues('dateStart'),
                                    getValues('dateEnd'),
                                    'pdf',
                                    isValid
                                )
                            }}
                        >
                            PDF
                        </button>
                        <button
                            className="text-center hover:underline p-2"
                            onClick={() => {
                                reportsHandler(
                                    getValues('dateStart'),
                                    getValues('dateEnd'),
                                    'exel'
                                )
                            }}
                        >
                            Exel
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
