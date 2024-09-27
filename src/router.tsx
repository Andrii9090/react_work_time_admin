import { createBrowserRouter } from 'react-router-dom'
import { AuthLayout } from './components/layouts/AuthLayout'
import WorkersList from './components/workers/WorkersList'
import Error from './components/Error'
import { WorkerForm } from './components/workers/WorkerForm'
import { Login } from './components/users/Login'
import { Dashboard } from './components/dashboard/Dashboard'
import { User } from './components/users/User'

const router = createBrowserRouter([
    {
        path: '',
        element: <AuthLayout />,
        errorElement: <Error />,
        children: [
            {
                path: 'user',
                element: <User />,
            },
            {
                index: true,
                element: <Dashboard />,
            },
            {
                path: 'workers',
                element: <WorkersList />,
            },
            {
                path: 'workers/:worker_id',
                element: <WorkerForm />,
            },
            {
                path: 'workers/create',
                element: <WorkerForm />,
            },
        ],
    },
    {
        path: 'login',
        element: <Login />,
    },
])

export default router
