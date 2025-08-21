import { TableRecords } from './TableRecords';

type NewRecord = {
    lap: number;
    time: string;
};

type NewRecordProps = {
    records: NewRecord[];
};

const Table = ({ records }: NewRecordProps) => {
    return (
        <table className='records-table'>
            <thead>
                <tr>
                    <th>Numer okrążenia</th>
                    <th>Czas okrążenia</th>
                </tr>
            </thead>
            <TableRecords records={records} />
        </table>
    );
};

export { Table };
