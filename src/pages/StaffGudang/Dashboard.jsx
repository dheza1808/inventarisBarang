import { useEffect, useState } from "react";
import { FaArrowDown, FaUserCheck, FaHistory } from "react-icons/fa";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";
import artikelPopuler from "../../data/artikelPopuler.json";
import statistikPengguna from "../../data/statistikPengguna.json";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

export default function Dashboard() {
  const [barangMasuk, setBarangMasuk] = useState([]);
  const [peminjaman, setPeminjaman] = useState([]);
  const [riwayat, setRiwayat] = useState([]);

  useEffect(() => {
    const masuk = JSON.parse(localStorage.getItem("barang_masuk")) || [];
    const pinjam = JSON.parse(localStorage.getItem("peminjaman_guest")) || [];

    setBarangMasuk(masuk);
    setPeminjaman(pinjam);

    const combined = [
      ...masuk.map((item) => ({ ...item, tipe: "Masuk" })),
      ...pinjam.map((item) => ({ ...item, tipe: "Peminjaman" })),
    ];

    combined.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
    setRiwayat(combined);
  }, []);

  const chartData = {
    labels: ["Sen", "Sel", "Rab", "Kam", "Jum", "Sab", "Min"],
    datasets: [
      {
        label: "User Login",
        data: [10, 20, 15, 25, 18, 30, 22],
        fill: false,
        borderColor: "#6366F1",
        tension: 0.4,
      },
      {
        label: "Booking",
        data: [5, 10, 6, 13, 9, 15, 11],
        fill: false,
        borderColor: "#10B981",
        tension: 0.4,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: { legend: { position: "top" } },
    scales: {
      y: {
        beginAtZero: true,
        ticks: { stepSize: 5 },
      },
    },
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-10 space-y-10">
      <h1 className="text-4xl font-bold text-indigo-800 text-center mb-8">
        Dashboard Inventaris
      </h1>

      {/* Statistik Ringkas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard
          icon={<FaArrowDown className="text-green-600 text-3xl" />}
          label="Total Barang Masuk"
          value={barangMasuk.length}
          bgColor="bg-green-100"
          textColor="text-green-800"
        />
        <StatCard
          icon={<FaUserCheck className="text-purple-600 text-3xl" />}
          label="Total Peminjaman"
          value={peminjaman.length}
          bgColor="bg-purple-100"
          textColor="text-purple-800"
        />
        <StatCard
          icon={<FaHistory className="text-blue-600 text-3xl" />}
          label="Total Riwayat Transaksi"
          value={riwayat.length}
          bgColor="bg-blue-100"
          textColor="text-blue-800"
        />
      </div>

      {/* Grafik Statistik */}
      <div className="bg-white shadow rounded-xl p-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Statistik Mingguan</h2>
        <Line data={chartData} options={chartOptions} />
      </div>

      {/* Statistik Pengguna dan Artikel Populer */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Statistik Pengguna */}
        <div className="bg-white shadow-md rounded-xl p-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Statistik Pengguna Aktif</h2>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>👤 Total Pengguna: <span className="font-bold text-indigo-700">{statistikPengguna.totalPengguna}</span></li>
            <li>✅ Aktif Hari Ini: <span className="font-bold text-green-700">{statistikPengguna.aktifHariIni}</span></li>
            <li>🏆 Login Terbanyak: <span className="font-bold text-purple-700">{statistikPengguna.loginTerbanyak}</span></li>
          </ul>
        </div>

        {/* Artikel Populer */}
        <div className="bg-white shadow-md rounded-xl p-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Artikel Populer</h2>
          <ul className="divide-y divide-gray-100">
            {artikelPopuler.map((artikel, idx) => (
              <li key={idx} className="py-3">
                <h3 className="text-sm font-semibold text-gray-800">{artikel.judul}</h3>
                <p className="text-xs text-gray-500 flex justify-between mt-1">
                  <span>📅 {new Date(artikel.tanggal).toLocaleDateString("id-ID")}</span>
                  <span>👁️ {artikel.views} views</span>
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Riwayat Transaksi */}
      <div className="bg-white shadow-md rounded-xl p-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Riwayat Transaksi Terbaru</h2>
        {riwayat.length === 0 ? (
          <p className="text-gray-500 italic">Belum ada transaksi yang tercatat.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-separate border-spacing-y-2">
              <thead className="text-left text-gray-600">
                <tr>
                  <th className="py-2 px-3 bg-gray-100 rounded-l">Nama Barang</th>
                  <th className="py-2 px-3 bg-gray-100">Jumlah</th>
                  <th className="py-2 px-3 bg-gray-100">Tipe</th>
                  <th className="py-2 px-3 bg-gray-100 rounded-r">Tanggal</th>
                </tr>
              </thead>
              <tbody>
                {riwayat.slice(0, 5).map((item, index) => (
                  <tr
                    key={index}
                    className="bg-gray-50 hover:bg-gray-100 transition-all duration-200 shadow-sm rounded"
                  >
                    <td className="py-2 px-3 rounded-l">{item.nama}</td>
                    <td className="py-2 px-3">{item.jumlah || '-'}</td>
                    <td className="py-2 px-3">
                      <span
                        className={`px-2 py-1 rounded text-white text-xs font-semibold ${
                          item.tipe === "Masuk" ? "bg-green-600" : "bg-purple-600"
                        }`}
                      >
                        {item.tipe}
                      </span>
                    </td>
                    <td className="py-2 px-3 rounded-r">
                      {item.created_at
                        ? new Date(item.created_at).toLocaleString("id-ID")
                        : "-"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

// Komponen Kartu Statistik
function StatCard({ icon, label, value, bgColor, textColor }) {
  return (
    <div className={`${bgColor} p-6 rounded-xl shadow flex items-center gap-4`}>
      {icon}
      <div>
        <h2 className={`text-sm font-medium ${textColor}`}>{label}</h2>
        <p className={`text-3xl font-bold ${textColor}`}>{value}</p>
      </div>
    </div>
  );
}
