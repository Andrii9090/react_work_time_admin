type Props = {
    title: string
    children?: React.ReactNode
    footer?: string | React.ReactNode
}

export const CardUI: React.FC<Props> = ({ title, children, footer }) => {
    return (
        <div className="flex flex-col min-w-72 border shadow-md rounded-lg m-1">
            <span className="font-bold text-xl text-center border-b border-indigo-200 p-1 text-indigo-800">
                {title}
            </span>
            <div className="flex flex-col justify-between items-center p-3">
                {children}
            </div>
            {footer && <div className="flex w-full">{footer}</div>}
        </div>
    )
}
