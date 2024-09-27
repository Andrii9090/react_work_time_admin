import useMainStore from '../../store/store'
import { RecordCard } from './RecordCard'
import { RecordFilter } from './RecordFilter'

export const RecordsList = () => {
    const records = useMainStore((state) => state.records)

    return (
        <div className="flex flex-col w-full">
            <RecordFilter />
            {records && (
                <>
                    <div className="flex flex-col w-full justify-around items-center">
                        {Object.keys(records.items).map((date: string) => (
                            <RecordCard
                                key={date}
                                day={date}
                                records={records.items[date].records}
                                total_day={records.items[date].total_day}
                            />
                        ))}
                    </div>
                </>
            )}
        </div>
    )
}
