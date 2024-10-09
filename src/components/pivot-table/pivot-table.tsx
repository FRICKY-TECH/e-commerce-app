"use client";
import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import Select from 'react-select';

const sampleData = [
  { orderId: '1', product: 'Shoes', category: 'Footwear', amount: 100, date: '2023-01-01' },
  { orderId: '2', product: 'Shirt', category: 'Apparel', amount: 50, date: '2023-01-02' },
  // Add more sample data here
];

const fields = [
  { value: 'orderId', label: 'Order ID' },
  { value: 'product', label: 'Product' },
  { value: 'category', label: 'Category' },
  { value: 'amount', label: 'Amount' },
  { value: 'date', label: 'Date' },
];

const CustomPivotTable: React.FC = () => {
  const { control, watch,handleSubmit } = useForm({mode: 'onChange'});
  const [pivotTableData, setPivotTableData] = useState<any[]>([]);


  const formState = watch();
  console.log("🚀 ~ formState:", formState)

  const rows = watch('rows', []);
  const columns = watch('columns', []);
  const values = watch('values', []);
  const filters = watch('filters', []);

  const calculatePivotTable = () => {

    // Implement pivot table calculation logic here
    return [];
  };

  // React.useEffect(() => {
  //   const data = calculatePivotTable();
  //   setPivotTableData(data);
  // }, [rows, columns, values, filters]);

  return (
    <div>
      <h1>E-commerce Reporting</h1>
      <div>
        <label>Rows:</label>
        <Controller
          name="rows"
          control={control}
          render={({ field }) => (
            <Select
              {...field}
              options={fields}
              isMulti
              closeMenuOnSelect={false}
            />
          )}
        />
      </div>
      <div>
        <label>Columns:</label>
        <Controller
          name="columns"
          control={control}
          render={({ field }) => (
            <Select
              {...field}
              options={fields}
              isMulti
              closeMenuOnSelect={false}
            />
          )}
        />
      </div>
      <div>
        <label>Values:</label>
        <Controller
          name="values"
          control={control}
          render={({ field }) => (
            <Select
              {...field}
              options={fields}
              isMulti
              closeMenuOnSelect={false}
            />
          )}
        />
      </div>
      <div>
        <label>Filters:</label>
        <Controller
          name="filters"
          control={control}
          render={({ field }) => (
            <Select
              {...field}
              options={fields}
              isMulti
              closeMenuOnSelect={false}
            />
          )}
        />
      </div>
      <table>
        <thead>
          <tr>
            {/* Render table headers based on rows and columns */}
          </tr>
        </thead>
        <tbody>
          {/* Render table data based on pivotTableData */}
        </tbody>
      </table>
    </div>
  );
};

export default CustomPivotTable;