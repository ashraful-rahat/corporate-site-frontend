"use client";

import { useState } from "react";
import { Edit, Trash2, Plus, Eye, Search } from "lucide-react";
import { Button } from "./button";

interface Column {
  key: string;
  label: string;
  render?: (value: any, row: any) => React.ReactNode;
}

interface DataTableProps {
  data: any[];
  columns: Column[];
  title: string;
  onAdd?: () => void;
  onEdit?: (item: any) => void;
  onDelete: (item: any) => void;
  onView?: (item: any) => void;
  searchKey?: string;
  isRowDisabled?: (row: any) => boolean;
}

const DataTable = ({
  data,
  columns,
  title,
  onAdd,
  onEdit,
  onDelete,
  onView,
  searchKey = "title",
  isRowDisabled,
}: DataTableProps) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = data.filter((item) =>
    item[searchKey]?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const renderCell = (column: Column, row: any) => {
    const value = row[column.key];
    
    if (column.render) return column.render(value, row);

    if (Array.isArray(value)) {
      return (
        <div className="flex flex-wrap gap-1">
          {value.slice(0, 3).map((item, index) => (
            <span
              key={index}
              className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full font-medium"
            >
              {item}
            </span>
          ))}
          {value.length > 3 && (
            <span className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded-full">
              +{value.length - 3}
            </span>
          )}
        </div>
      );
    }

    if (typeof value === "string" && value.length > 50) {
      return <span className="text-sm max-w-xs block">{value.substring(0, 50)}...</span>;
    }

    return <span className="text-sm">{value}</span>;
  };

  const ActionButton = ({ onClick, icon: Icon, className, title }: { onClick: () => void; icon: any; className: string; title: string }) => (
    <button 
      onClick={onClick} 
      className={`p-2 rounded-lg transition-all duration-200 hover:scale-105 ${className}`}
      title={title}
    >
      <Icon className="h-4 w-4" />
    </button>
  );

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
      <div className="p-6 border-b border-gray-100 bg-gradient-to-r from-gray-50 to-white">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
            <p className="text-sm text-gray-500 mt-1">
              {filteredData.length} {filteredData.length === 1 ? "item" : "items"}
            </p>
          </div>
          {onAdd && (
            <Button 
              onClick={onAdd} 
              className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-3 rounded-lg font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              <Plus className="h-4 w-4" />
              Add {title.slice(0, -1)}
            </Button>
          )}
        </div>
        
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder={`Search ${title.toLowerCase()}...`}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
          />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              {columns.map((column) => (
                <th
                  key={column.key}
                  className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                >
                  {column.label}
                </th>
              ))}
              <th className="px-6 py-4 text-right text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-100">
            {filteredData.length === 0 ? (
              <tr>
                <td
                  colSpan={columns.length + 1}
                  className="px-6 py-12 text-center text-gray-500"
                >
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                      <Search className="h-8 w-8 text-gray-400" />
                    </div>
                    <p className="text-lg font-medium text-gray-900 mb-2">No {title.toLowerCase()} found</p>
                    <p className="text-sm text-gray-500">Try adjusting your search criteria</p>
                  </div>
                </td>
              </tr>
            ) : (
              filteredData.map((row, index) => {
                const disabled = isRowDisabled?.(row);
                return (
                  <tr
                    key={index}
                    className={`hover:bg-gray-50 transition-colors duration-200 ${disabled ? 'opacity-50 bg-gray-100' : ''}`}
                  >
                    {columns.map((column) => (
                      <td key={column.key} className="px-6 py-4 whitespace-nowrap">
                        {renderCell(column, row)}
                      </td>
                    ))}
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex items-center justify-end gap-1">
                        {onView && (
                          <ActionButton
                            onClick={() => !disabled && onView(row)}
                            icon={Eye}
                            className={`text-blue-600 hover:bg-blue-50 ${disabled ? 'pointer-events-none opacity-50' : ''}`}
                            title="View details"
                          />
                        )}
                        {onEdit && (
                          <ActionButton
                            onClick={() => !disabled && onEdit(row)}
                            icon={Edit}
                            className={`text-indigo-600 hover:bg-indigo-50 ${disabled ? 'pointer-events-none opacity-50' : ''}`}
                            title="Edit"
                          />
                        )}
                        {onDelete && (
                          <ActionButton
                            onClick={() => !disabled && onDelete(row)}
                            icon={Trash2}
                            className={`text-red-600 hover:bg-red-50 ${disabled ? 'pointer-events-none opacity-50' : ''}`}
                            title="Delete"
                          />
                        )}
                      </div>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataTable; 