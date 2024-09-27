import { useRouteError, ErrorResponse } from 'react-router-dom'

export default function Error() {
    const error: ErrorResponse = useRouteError() as ErrorResponse

    console.log(error)

    return (
        <div className="flex h-screen flex-col p-5 text-center">
            <div className="m-auto">
                <span className="m-auto text-3xl">
                    Ooops! Ha pasado algoerror!
                </span>
                <p className="text-xl text-red-500">Error {error.status}</p>
                <p className="text-gray-400 font-extralight">
                    <i>{error.statusText}</i>
                </p>
            </div>
        </div>
    )
}
