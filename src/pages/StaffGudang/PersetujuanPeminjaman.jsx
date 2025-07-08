import { useEffect, useState } from "react";
import { peminjamanAPI } from "../../services/peminjaman";

export default function PersetujuanPeminjaman() {
  const [data, setData] = useState([]);

  // Ambil data peminjaman dari localStorage saat pertama kali load
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await peminjamanAPI.getPeminjamanMenunggu();

        setData(response);
      } catch (error) {
        console.error("Error fetching peminjaman data:", error);
      }
    }

    fetchData();
  }, []);

  // Fungsi untuk menyetujui atau menolak peminjaman
  const handleApproval = async (id, status) => {
    try {
      await peminjamanAPI.updateStatus(id, status);
      setData(data.filter((item) => item.id !== id ));
      alert(`✅ Peminjaman ${status} berhasil!`);
    } catch (error) {
      console.error("Error updating peminjaman status:", error);
      return alert("❌ Gagal memperbarui status peminjaman. Silakan coba lagi.");
    }
  };

  return (
    <div className="max-w-6xl mx-auto mt-10 bg-white shadow rounded-xl p-6">
      <h1 className="text-3xl font-bold text-red-700 mb-6 text-center">
        Persetujuan Peminjaman Barang
      </h1>

      {data.length === 0 ? (
        <p className="text-gray-500 text-center">Tidak ada permintaan barang keluar.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border text-sm">
            <thead className="bg-red-100 text-left">
              <tr>
                <th className="px-4 py-2 border text-gray-700">Nama Barang</th>
                <th className="px-4 py-2 border text-gray-700">Tanggal Pinjam</th>
                <th className="px-4 py-2 border text-gray-700">Tanggal Kembali</th>
                <th className="px-4 py-2 border text-gray-700">Diajukan Pada</th>
                <th className="px-4 py-2 border text-gray-700">Status</th>
                <th className="px-4 py-2 border text-gray-700 text-center">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50">
                  <td className="border text-gray-700 px-4 py-2">{item.barang.nama}</td>
                  <td className="border text-gray-700 px-4 py-2">
                    {item.tanggal_pinjam || "-"}
                  </td>
                  <td className="border text-gray-700 px-4 py-2">
                    {item.tanggal_kembali || "-"}
                  </td>
                  <td className="border text-gray-700 px-4 py-2">
                    {new Date(item.created_at).toLocaleString()}
                  </td>
                  <td className="border text-gray-700 px-4 py-2">
                    {item.status ? (
                      <span
                        className={`px-2 py-1 text-xs rounded font-semibold ${
                          item.status === "disetujui"
                            ? "bg-green-100 text-green-800"
                            : item.status === "ditolak"
                            ? "bg-red-100 text-red-700"
                            : "bg-yellow-100 text-yellow-700"
                        }`}
                      >
                        {item.status}
                      </span>
                    ) : (
                      <span className="text-gray-500 italic">Menunggu</span>
                    )}
                  </td>
                  <td className="border text-gray-700 px-4 py-2 text-center space-x-2">
                    {item.status !== "disetujui" && (
                      <button
                        onClick={() => handleApproval(item.id, "disetujui")}
                        className="bg-green-600 text-white px-3 py-1 rounded text-xs"
                      >
                        Setujui
                      </button>
                    )}
                    {item.status !== "ditolak" && (
                      <button
                        onClick={() => handleApproval(item.id, "ditolak")}
                        className="bg-red-600 text-white px-3 py-1 rounded text-xs"
                      >
                        Tolak
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
