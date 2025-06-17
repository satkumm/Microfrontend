import React, { useMemo, useState } from 'react';
import {
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  flexRender,
} from '@tanstack/react-table';

// Sample data
const defaultData = [
  {
    projectName: 'Project Alpha',
    policy: 'Policy A',
    retention: '30 days',
    archivalDate: '2025-06-01',
    archivalFrequency: 'Weekly',
    archivalLocation: 'S3 Bucket A',
  },
  {
    projectName: 'Project Beta',
    policy: 'Policy B',
    retention: '60 days',
    archivalDate: '2025-05-15',
    archivalFrequency: 'Monthly',
    archivalLocation: 'S3 Bucket B',
  },
];

const ArchivalList = () => {
  const [data] = useState(() => [...defaultData]);
  const [columnFilters, setColumnFilters] = useState([]);
  const [sorting, setSorting] = useState([]);

  const columns = useMemo(
    () => [
      {
        accessorKey: 'projectName',
        header: 'Project Name',
        cell: info => info.getValue(),
      },
      {
        accessorKey: 'policy',
        header: 'Policy',
        cell: info => info.getValue(),
      },
      {
        accessorKey: 'retention',
        header: 'Retention',
        cell: info => info.getValue(),
      },
      {
        accessorKey: 'archivalDate',
        header: 'Archival Date',
        cell: info => info.getValue(),
      },
      {
        accessorKey: 'archivalFrequency',
        header: 'Archival Frequency',
        cell: info => info.getValue(),
      },
      {
        accessorKey: 'archivalLocation',
        header: 'Archival Location',
        cell: info => info.getValue(),
      },
    ],
    []
  );

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      columnFilters,
    },
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  });

  return (
    <div>
      <table border="1" cellPadding="10" style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th
                  key={header.id}
                  style={{ cursor: header.column.getCanSort() ? 'pointer' : 'default' }}
                  onClick={header.column.getToggleSortingHandler()}
                >
                  {flexRender(header.column.columnDef.header, header.getContext())}
                  {{
                    asc: ' 🔼',
                    desc: ' 🔽',
                  }[header.column.getIsSorted()] ?? null}
                </th>
              ))}
            </tr>
          ))}
          <tr>
            {table.getHeaderGroups()[0].headers.map(header => (
              <th key={header.id}>
                {header.column.getCanFilter() ? (
                  <input
                    type="text"
                    placeholder={`Filter ${header.column.id}`}
                    value={(header.column.getFilterValue() ?? '')}
                    onChange={e => header.column.setFilterValue(e.target.value)}
                    style={{ width: '100%' }}
                  />
                ) : null}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.getRowModel().rows.map(row => (
            <tr key={row.id}>
              {row.getVisibleCells().map(cell => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ArchivalList;
