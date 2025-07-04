// src/components/DashboardOverview.jsx
import { useEffect, useState } from 'react';
import { supabase } from '../services/supabaseClient';

export default function DashboardOverview() {
  const [total, setTotal] = useState(0);
  const [lowStock, setLowStock] = useState(0);

  useEffect(() => {
    const fetchSummary = async () => {
      const { data, error } = await supabase.from('items').select('*');
      if (error) {
        console.error('Error fetching items:', error);
        return;
      }
      setTotal(data.length);
      setLowStock(data.filter(item => item.quantity <= item.minimum).length);
    };
    fetchSummary();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
      <div className="bg-white rounded shadow p-6">
        <p className="text-gray-600">Total Barang</p>
        <h2 className="text-3xl font-bold text-blue-700">{total}</h2>
      </div>
      <div className="bg-red-100 rounded shadow p-6">
        <p className="text-red-600">Stok Rendah</p>
        <h2 className="text-3xl font-bold text-red-700">{lowStock}</h2>
      </div>
    </div>
  );
}
