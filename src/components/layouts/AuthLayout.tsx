import { Outlet } from 'react-router-dom'
import { HomeIcon, UserIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'
import useMainStore from '../../store/store'
import config from '../../config'

export const AuthLayout = () => {
    const isLoading = useMainStore((state) => state.isLoading)
    const token = localStorage.getItem(config.TOKEN_KEY)
    if (!token) {
        return (window.location.href = '/login')
    }
    return (
        <div className="max-w-6xl m-auto bg-white h-full min-w-72">
            {isLoading && (
                <div className="relative h-0.5 w-full bg-indigo-100 overflow-hidden">
                    <div className="animate-loader h-full bg-indigo-500 origin-left-right"></div>
                </div>
            )}
            <nav className="flex w-full p-3 text-center border-b">
                <div className="border-r  w-3/12 ">
                    <Link
                        to="/"
                        className="font-extrabold text-indigo-600 text-2xl"
                    >
                        LOGO
                    </Link>
                </div>
                <div className="w-full flex justify-between ml-3">
                    <div className="flex">
                        <Link to={'/'} className="mr-3">
                            <HomeIcon className="text-gray-500 size-7" />
                        </Link>
                        <Link to={'/user'} className="mr-3">
                            <UserIcon className="text-gray-500 size-7" />
                        </Link>
                    </div>
                    <div className="flex ">
                        <button
                            className=" text-gray-500 hover:text-gray-700 border-gray-400 rounded-md p-1"
                            onClick={() => {
                                window.location.href = '/login'
                                localStorage.removeItem(config.TOKEN_KEY)
                            }}
                        >
                            Salir
                        </button>
                    </div>
                </div>
            </nav>
            <div className="p-1">
                <Outlet />
            </div>
        </div>
    )
}
