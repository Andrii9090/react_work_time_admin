interface IResponse<T> {
    msg?: string
    data?: T
    error: boolean
}

export default IResponse