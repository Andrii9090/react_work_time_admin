import { FC } from 'react'

type Props = {
    title: string
    button?: {
        onClick: () => void
        title: string
    }
}

export const TitleUI: FC<Props> = ({ title, button }) => {
    return (
        <div className="flex justify-between items-center border-b mb-3">
            <h3 className="text-2xl text-indigo-900 p-3">{title}</h3>
            {button && (
                <button
                    className="bg-indigo-500 text-white font-semibold text-xl rounded-md p-2 transition-colors duration-300 hover:bg-indigo-600"
                    onClick={button?.onClick}
                >
                    {button?.title}
                </button>
            )}
        </div>
    )
}
