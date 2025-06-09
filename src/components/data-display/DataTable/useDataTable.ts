import { useState, useMemo } from 'react';

interface UseDataTableProps<T> {
    data: T[];
    defaultSortBy?: string;
    defaultSortDirection?: 'asc' | 'desc';
}

export const useDataTable = <T extends Record<string, any>>({
    data,
    defaultSortBy,
    defaultSortDirection = 'asc',
}: UseDataTableProps<T>) => {
    const [sortBy, setSortBy] = useState<string | undefined>(defaultSortBy);
    const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>(defaultSortDirection);
    const [currentPage, setCurrentPage] = useState(1);
    const [perPage, setPerPage] = useState(10);

    const handleSort = (column: string, direction: 'asc' | 'desc') => {
        setSortBy(column);
        setSortDirection(direction);
    };

    const sortedData = useMemo(() => {
        if (!sortBy) return data;

        return [...data].sort((a, b) => {
            const aValue = a[sortBy];
            const bValue = b[sortBy];

            if (aValue < bValue) return sortDirection === 'asc' ? -1 : 1;
            if (aValue > bValue) return sortDirection === 'asc' ? 1 : -1;
            return 0;
        });
    }, [data, sortBy, sortDirection]);

    const paginatedData = useMemo(() => {
        const startIndex = (currentPage - 1) * perPage;
        return sortedData.slice(startIndex, startIndex + perPage);
    }, [sortedData, currentPage, perPage]);

    return {
        data: paginatedData,
        totalItems: data.length,
        currentPage,
        perPage,
        sortBy,
        sortDirection,
        handleSort,
        setCurrentPage,
        setPerPage,
    };
};