import { useNavigate } from 'react-router-dom'
import { TitleUI } from '../ui/Title.ui'
import { WorkerCard } from './WorkerCard'
import { IWorker } from './types'
import useWorkers from '../../customHooks/useWorkers'

export default function WorkersList() {
    const navigate = useNavigate()

    const { workers } = useWorkers()
    return (
        <>
            <TitleUI
                title="Empleados"
                button={{
                    onClick: () => navigate('create'),
                    title: 'Crear Empleado',
                }}
            />
            <div className="flex flex-col sm:flex-row sm:flex-wrap justify-evenly w-full">
                {workers &&
                    workers.map((worker: IWorker) => (
                        <WorkerCard key={worker.id} worker={worker} />
                    ))}
            </div>
        </>
    )
}
