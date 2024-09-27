import { useEffect, useMemo } from 'react'
import { useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom'
import useWorker from '../../customHooks/useWorker'
import { IWorker } from './types'
import { RecordsList } from '../records/RecordsList'
import { TitleUI } from '../ui/Title.ui'
import React from 'react'

const formElements = {
    required: {
        required: 'El campo es obligatorio',
    },
    email: {
        required: 'El campo es obligatorio',
        pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
    },
    phone: {
        required: false,
        pattern: /^\d+$/,
    },
}

type Props = {
    title?: string
    sameUser?: boolean
}

export const WorkerForm = React.memo(
    ({ sameUser = false, title = 'Empleado' }: Props) => {
        const workerId = Number(useParams().worker_id)
        const { workerData, onChangeActive, getUserInfo, onSubmitHandler } =
            useWorker(workerId, sameUser)

        const {
            register,
            handleSubmit,
            formState: { errors },
        } = useForm<IWorker>({
            values: useMemo(() => ({ ...workerData }), [workerData]),
        })

        if (sameUser) {
            useEffect(() => {
                getUserInfo()
            }, [])
        }

        return (
            <>
                <TitleUI title={title} />
                <div className="flex border border-gray-100 rounded-md shadow-md mt-3 p-2">
                    <form
                        onSubmit={handleSubmit(onSubmitHandler)}
                        className="w-10/12 mr-3"
                    >
                        <div className="flex flex-col md:flex-row">
                            <div className="mb-5 mr-2 md:w-4/12">
                                <label
                                    htmlFor="name"
                                    className="mr-3 text-sm text-indigo-500"
                                >
                                    Nombre
                                </label>
                                <input
                                    type="text"
                                    {...register('first_name', {
                                        ...formElements.required,
                                    })}
                                    placeholder="Nombre"
                                    className={`${
                                        errors.first_name ? 'bg-red-50' : ''
                                    } border-b-gray-200 border-b focus:outline-none text-gray-900 text-md block w-full p-1.5`}
                                />
                            </div>
                            <div className="mb-5 md:w-7/12 mr-2">
                                <label
                                    htmlFor="last_name"
                                    className="mr-3 text-sm text-indigo-500"
                                >
                                    Apellidos
                                </label>
                                <input
                                    {...register('last_name', {
                                        ...formElements.required,
                                    })}
                                    type="text"
                                    placeholder="Primer apellido"
                                    className={`${
                                        errors.last_name ? 'bg-red-50' : ''
                                    } border-b-gray-200 border-b focus:outline-none text-gray-900 text-md block w-full p-1.5`}
                                />
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row">
                            <div className="mb-5 md:w-6/12 mr-2">
                                <label
                                    htmlFor="email"
                                    className="mr-3 text-sm text-indigo-500"
                                >
                                    Email
                                </label>
                                <input
                                    {...register('email', {
                                        ...formElements.email,
                                    })}
                                    type="text"
                                    placeholder="Email"
                                    className={`${
                                        errors.email ? 'bg-red-50' : ''
                                    } border-b-gray-200 border-b focus:outline-none text-gray-900 text-md block w-full p-1.5`}
                                />
                            </div>
                            <div className="mb-5 md:w-6/12">
                                <label
                                    htmlFor="phone"
                                    className="mr-3 text-sm text-indigo-500"
                                >
                                    Telefono
                                </label>
                                <input
                                    {...register('phone', {
                                        ...formElements.phone,
                                    })}
                                    type="text"
                                    placeholder="Numero de telefono"
                                    className={`${
                                        errors.phone ? 'bg-red-50' : ''
                                    } border-b-gray-200 border-b focus:outline-none text-gray-900 text-md block w-full p-1.5`}
                                />
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row">
                            <div className="mb-5 md:w-4/12 mr-3">
                                <label
                                    htmlFor="document"
                                    className="mr-3 text-sm text-indigo-500"
                                >
                                    DNI/NIE
                                </label>
                                <input
                                    {...register('document')}
                                    type="text"
                                    placeholder="DNI/NIE"
                                    className={`${
                                        errors.document ? 'bg-red-50' : ''
                                    } border-b-gray-200 border-b focus:outline-none text-gray-900 text-md block w-full p-1.5`}
                                />
                            </div>
                            <div className="mb-5 md:w-8/12">
                                <label
                                    htmlFor="document"
                                    className="mr-3 text-sm text-indigo-500"
                                >
                                    Puesto de trabajo
                                </label>
                                <input
                                    {...register('position', {
                                        ...formElements.required,
                                    })}
                                    type="text"
                                    placeholder="Puesto de trabajo"
                                    className={`${
                                        errors.position ? 'bg-red-50' : ''
                                    } border-b-gray-200 border-b focus:outline-none text-gray-900 text-md block w-full p-1.5`}
                                />
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <button className="bg-indigo-500 p-2 text-white rounded-md hover:bg-indigo-700 transition-colors">
                                Guardar
                            </button>
                        </div>
                    </form>
                    {!sameUser && (
                        <div className="flex h-10 mt-3">
                            <button
                                onClick={() => onChangeActive(false)}
                                className={`${
                                    workerData.is_active
                                        ? 'bg-gray-300'
                                        : 'bg-red-500'
                                }  text-white pl-1 pr-1 rounded-l-md hover:bg-red-700 transition-colors`}
                            >
                                Desact
                            </button>
                            <button
                                onClick={() => onChangeActive(true)}
                                className={`${
                                    workerData.is_active
                                        ? 'bg-green-500'
                                        : 'bg-gray-300'
                                } text-white pl-1 pr-1 rounded-r-md hover:bg-emerald-700 transition-colors`}
                            >
                                Activo
                            </button>
                        </div>
                    )}
                </div>
                {!Number.isNaN(workerId) && (
                    <div className="mt-3">
                        <RecordsList />
                    </div>
                )}
            </>
        )
    }
)
