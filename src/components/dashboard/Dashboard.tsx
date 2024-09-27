import { Link } from 'react-router-dom'
import { CardUI } from '../ui/Card.ui'
import { DasboardWorker } from './DasboardWorker'
import { IWorkerDashboard } from '../workers/types'
import useDashboard from '../../customHooks/useDashboard'
import { memo } from 'react'

export const Dashboard = memo(() => {
    const workers = useDashboard().workers

    return (
        <div className="flex w-full flex-wrap justify-evenly">
            <div className="w-full max-w-3xl">
                <CardUI
                    title="Empleados"
                    footer={
                        <Link
                            to="workers"
                            className="bg-indigo-400 w-full text-center p-1 text-white rounded-b-md hover:bg-indigo-600 transition-colors duration-300"
                        >
                            Ver todos
                        </Link>
                    }
                >
                    {workers.length > 0 &&
                        workers.map((worker: IWorkerDashboard) => (
                            <DasboardWorker key={worker.id} worker={worker} />
                        ))}
                    {workers.length == 0 && <span>No hay empleados</span>}
                </CardUI>
            </div>
        </div>
    )
})
