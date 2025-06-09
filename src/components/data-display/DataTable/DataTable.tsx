import { Table, Thead, Tr, Th, Tbody, Td } from '@patternfly/react-table';

interface DataTableProps<T = any> {
    columns: Array<{
        key: string;
        title: string;
        sortable?: boolean;
    }>;
    data: T[];
    onSort?: (column: string, direction: 'asc' | 'desc') => void;
}

export const DataTable = <T extends Record<string, any>>({
    columns,
    data,
    onSort,
}: DataTableProps<T>) => {
    return (
        <Table aria-label="Data table">
            <Thead>
                <Tr>
                    {columns.map((column, columnIndex) => (
                        <Th
                            key={column.key}
                            sort={
                                column.sortable && onSort
                                    ? {
                                        sortBy: {},
                                        onSort: (_event: React.MouseEvent, _index: number, direction: 'asc' | 'desc') => {
                                            onSort(column.key, direction);
                                        },
                                        columnIndex,
                                    }
                                    : undefined
                            }
                        >
                            {column.title}
                        </Th>
                    ))}
                </Tr>
            </Thead>
            <Tbody>
                {data.map((row, index) => (
                    <Tr key={index}>
                        {columns.map((column) => (
                            <Td key={column.key} dataLabel={column.title}>
                                {row[column.key]}
                            </Td>
                        ))}
                    </Tr>
                ))}
            </Tbody>
        </Table>
    );
};

export default DataTable;