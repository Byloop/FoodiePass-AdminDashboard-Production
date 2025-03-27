import { tableIcons } from '../../../assets/globals/data/tableData';
import Draggable from 'react-draggable';

export function TableLayout({
  className,
  tables,
  addons,
  onDragTable,
  onDragAddon,
  onSelectTable,
  selectedTable,
  isDraggable,
}) {
  return (
    <div
      className={`border bg-[#E6EEF5] border-black border-opacity-10 rounded-2xl w-[400px] h-[500px] relative ${className}`}
    >
      {tables.map((table) => (
        <Draggable
          bounds="parent"
          defaultPosition={table.position}
          key={table.id}
          onStop={(e, data) => {
            if (selectedTable === null || selectedTable?.id !== table.id) {
              onSelectTable(table);
            } else {
              onSelectTable(null);
            }
            onDragTable(data);
          }}
          disabled={
            (selectedTable != null && selectedTable?.id !== table.id) ||
            !isDraggable
          }
        >
          <span
            className={`w-[40px] h-[40px] inline-block cursor-pointer ${table.id !== selectedTable?.id ? 'opacity-50' : 'opacity-100'}`}
          >
            <img
              src={
                table.shape === 'sofa'
                  ? tableIcons[table.shape][table.orientation]
                  : table?.maximumPax
                    ? tableIcons[table.shape][table?.maximumPax]
                    : null
              }
              className="w-full h-full object-cover"
              alt={table.name}
            />
          </span>
        </Draggable>
      ))}
      {addons.map((addon) => (
        <Draggable
          key={addon.id}
          defaultPosition={addon.position}
          bounds="parent"
          onStop={(e, data) => onDragAddon(e, data, addon)}
        >
          <span className="w-[40px] h-[40px] inline-block">
            <img
              src={addon.image}
              className="w-full h-full object-cover"
              alt={addon.name}
            />
          </span>
        </Draggable>
      ))}
    </div>
  );
}
