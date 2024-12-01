import { ReactElement } from 'react';

export interface Columns {
  key: string;
  title: string;
  onShow?: (data: unknown) => string;
  component?: (element: unknown) => ReactElement;
}

interface TableProps {
  title?: string;
  columns: Columns[];
  data: unknown[];
}

const TableCrud = ({ title, columns, data }: TableProps) => {
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      {title && (
        <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
          {title}
        </h4>
      )}

      <div className="flex flex-col">
        <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-5">
          {columns.map((column) => (
            <div className="p-2.5 xl:p-5">
              <h5 className="text-sm font-medium uppercase xsm:text-base">
                {column.key}
              </h5>
            </div>
          ))}
        </div>

        {data.map((obj: any, index) => (
          <div
            className={`grid grid-cols-3 sm:grid-cols-5 ${
              index === data.length - 1
                ? ''
                : 'border-b border-stroke dark:border-strokedark'
            }`}
            key={obj.id || index}
          >
            {columns.map((column) => (
              <div className="flex items-center justify-center p-2.5 xl:p-5">
                {column.component !== undefined && column.component(obj)}

                {column.component === undefined && (
                  <p className="text-black dark:text-white">
                    {column.onShow?.(obj) || obj[column.key] || '???'}
                  </p>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableCrud;
