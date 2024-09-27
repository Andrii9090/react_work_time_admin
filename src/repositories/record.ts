import BaseRepository from "./base"

class RecordRepository extends BaseRepository {
    async getRecords(dateStart: string, dateEnd: string, userId: number) {
        const result = await this.api.post('/workers/records', { start: dateStart, end: dateEnd, user_id: userId })
        if (result.status === 200) {
            return result.data.data
        }
        return []
    }

    async getReport(dateStart: string, dateEnd: string, reportType: 'pdf' | 'exel', userId: number) {
        const result = await this.api.post('/workers/report', { start: dateStart, end: dateEnd, report_type: reportType, user_id: userId })
        if (result.status === 200) {
            return result.data
        }
        return []
    }
}

export default RecordRepository