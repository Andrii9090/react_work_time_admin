export const formatTime = (timeStr: string) => {
    return new Date(timeStr)
        .toLocaleDateString('es-Es', {
            hour: '2-digit',
            minute: '2-digit',
        })
        .split(',')[1]
}

export const formatDate = (dateStr: string) => {
    return new Date(dateStr)
        .toLocaleTimeString('es-Es', {
            day: '2-digit',
            month: 'short',
            year: 'numeric',
        })
        .split(',')[0]
}

export const formatDateTime = (dateStr: string) => {
    const date = new Date(dateStr)
    const now = new Date()
    if (
        date.getDate() == now.getDate() &&
        date.getMonth() == now.getMonth() &&
        date.getFullYear() == now.getFullYear()
    ) {
        return 'Hoy' + ', ' + formatTime(dateStr)
    } else {
        return formatDate(dateStr) + ' ' + formatTime(dateStr)
    }
}

export const getDateInput = (date: Date) => {
    return date.toLocaleDateString('en-CA', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
    })
}

export const getFirstDayOfMonth = (date = new Date()) => {
    return new Date(date.getFullYear(), date.getMonth(), 1)
}

export const getLastDayOfMonth = (date = new Date()) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0)
}

export const dateTimeToStr = (date: Date, separator = '-') => {
    const month = date.getMonth() + 1
    return `${date.getFullYear()}${separator}${
        month > 9 ? month : '0' + month
    }${separator}${date.getDate()}`
}
