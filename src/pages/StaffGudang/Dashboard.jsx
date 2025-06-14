import { useEffect, useState } from "react";
import { supabase } from "../../services/inventarisAPI";

export default function Dashboard() {
  const [barangMasukCount, setBarangMasukCount] = useState(0);
  const [barangKeluarCount, setBarangKeluarCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const { count: masukCount } = await supabase
        .from("barang_masuk")
        .select("*", { count: "exact", head: true });

      const { count: keluarCount } = await supabase
        .from("barang_keluar")
        .select("*", { count: "exact", head: true });

      setBarangMasukCount(masukCount || 0);
      setBarangKeluarCount(keluarCount || 0);
    };

    fetchData();
  }, []);

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">Dashboard Gudang</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-green-100 p-6 rounded shadow">
          <h2 className="text-lg font-semibold text-green-700">Total Barang Masuk</h2>
          <p className="text-3xl font-bold text-green-800">{barangMasukCount}</p>
        </div>
        <div className="bg-red-100 p-6 rounded shadow">
          <h2 className="text-lg font-semibold text-red-700">Total Barang Keluar</h2>
          <p className="text-3xl font-bold text-red-800">{barangKeluarCount}</p>
        </div>
      </div>
    </div>
  );
}
