type NewRecord = {
    lap: number;
    time: string;
};

type NewRecordProps = {
    records: NewRecord[];
};

const TableRecords = ({ records }: NewRecordProps) => {
    return (
        <tbody>
            {records.map((rec) => (
                <tr key={rec.lap} className="record-row">
                    <td>{rec.lap}</td>
                    <td>{rec.time}</td>
                </tr>
            ))}
        </tbody>
    );
};

export { TableRecords };
