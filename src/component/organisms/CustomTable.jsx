import { useRef } from 'react';
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from '@tanstack/react-table';

export function CustomTable({ columns, data }) {
  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
  });
  const tableRef = useRef();

  const handleMouseDown = (e) => {
    const table = tableRef.current;
    if (!table) return;

    let startX = e.pageX;
    let scrollLeft = table.scrollLeft;

    const handleMouseMove = (e) => {
      const walk = e.pageX - startX;
      table.scrollLeft = scrollLeft - walk;
    };

    const handleMouseUp = () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  return (
    <div
      ref={tableRef}
      onMouseDown={handleMouseDown}
      className="bg-white p-2 overflow-x-auto rounded-lg 
    border border-black border-opacity-10"
    >
      <table className="min-w-full rounded-md bg-white">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr
              key={headerGroup.id}
              className={`bg-lightBlue 
                 `}
            >
              {headerGroup.headers.map((header, index, array) => {
                return (
                  <th
                    key={header.id}
                    className={`border-none p-2 min-w-[140px] xl:min-w-0
                    font-DMSans text-sm text-blue
                    ${index === array.length - 1 && 'rounded-tr-md rounded-br-md'} 
                    ${index === 0 && 'rounded-tl-md rounded-bl-md'}`}
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </th>
                );
              })}
            </tr>
          ))}
        </thead>
        <tbody className="">
          {table.getRowModel().rows.map((row) => {
            return (
              <tr key={row.id} className="">
                {row.getVisibleCells().map((cell) => (
                  <td
                    key={cell.id}
                    className="text-center p-2 border-b border-[#E4E1DF] 
                    font-DMSans text-base text-black"
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
