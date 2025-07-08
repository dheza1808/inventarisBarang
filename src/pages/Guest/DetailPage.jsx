import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { barangAPI } from "../../services/barang";
import { peminjamanAPI } from "../../services/peminjaman";

export default function DetailPage() {
	const { id } = useParams();
	const [data, setData] = useState(null);
	const [showForm, setShowForm] = useState(false);
  const [namaPeminjam, setNamaPeminjam] = useState("");
	const [tanggalPinjam, setTanggalPinjam] = useState("");
	const [tanggalKembali, setTanggalKembali] = useState("");
	const [submitted, setSubmitted] = useState(false);

	useEffect(() => {
		const fetchBarangById = async () => {
			try {
				const response = await barangAPI.getBarangById(id);

        setData(response[0]);
			} catch (error) {
				console.error("Error fetching inventory data:", error);
			}
		};

		fetchBarangById();
	}, [id]);

	const handleSubmit = async (e) => {
		e.preventDefault();
    setSubmitted(true);

    if (data.jumlah <= 0) {
      alert("Maaf, barang ini tidak tersedia untuk dipinjam.");
      return;
    }

    try {
      await peminjamanAPI.tambahPeminjaman({
        nama_peminjam: namaPeminjam,
        tanggal_pinjam: tanggalPinjam,
        tanggal_kembali: tanggalKembali,
        id_barang: data.id,
      })

      await barangAPI.updateBarang(data.id, {
        jumlah: data.jumlah - 1,
      });

      alert("Permintaan peminjaman telah diajukan!");
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setShowForm(false);
      setSubmitted(false);
      setNamaPeminjam("");
      setTanggalPinjam("");
      setTanggalKembali("");
    }
	};

	if (!data) {
		return (
			<div className="text-center text-gray-600 px-6 py-10">Memuat data...</div>
		);
	}

	return (
		<div className="px-6 py-10 max-w-xl mx-auto text-gray-800">
			<h1 className="text-2xl font-bold mb-4 text-indigo-800">{data.nama}</h1>
			<img
				src={data.image}
				alt={data.nama}
				className="max-w-xs mb-4 rounded shadow-md"
			/>
			<p className="mb-1">
				<span className="font-semibold">Kategori:</span> {data.kategori}
			</p>
			<p className="mb-1">
				<span className="font-semibold">Lokasi:</span> {data.lokasi}
			</p>
			<p className="mb-4">
				<span className="font-semibold">Kondisi:</span> {data.kondisi}
			</p>

			{!showForm && !submitted && (
				<button
					onClick={() => setShowForm(true)}
					className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
				>
					Ajukan Peminjaman
				</button>
			)}

			{showForm && !submitted && (
				<form
					onSubmit={handleSubmit}
					className="mt-6 bg-white p-6 rounded-xl shadow-md"
				>
					<h2 className="text-lg font-semibold mb-4 text-indigo-700">
						Formulir Peminjaman
					</h2>

					<div className="mb-4">
						<label className="block mb-1 text-sm font-medium text-gray-700">
							Nama Peminjam
						</label>
						<input
							type="text"
							value={namaPeminjam}
							onChange={(e) => setNamaPeminjam(e.target.value)}
							className="w-full px-4 py-2 border border-gray-300 text-gray-700 rounded focus:ring-2 focus:ring-indigo-400 outline-none"
							required
						/>
					</div>

					<div className="mb-4">
						<label className="block mb-1 text-sm font-medium text-gray-700">
							Tanggal Pinjam
						</label>
						<input
							type="date"
							value={tanggalPinjam}
							onChange={(e) => setTanggalPinjam(e.target.value)}
							className="w-full px-4 py-2 border border-gray-300 text-gray-700 rounded focus:ring-2 focus:ring-indigo-400 outline-none"
							required
						/>
					</div>

					<div className="mb-4">
						<label className="block mb-1 text-sm font-medium text-gray-700">
							Tanggal Kembali
						</label>
						<input
							type="date"
							value={tanggalKembali}
							onChange={(e) => setTanggalKembali(e.target.value)}
							className="w-full px-4 py-2 border border-gray-300 text-gray-700 rounded focus:ring-2 focus:ring-indigo-400 outline-none"
							required
						/>
					</div>

					<button
						type="submit"
						className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded font-semibold transition"
					>
						Kirim Permintaan
					</button>
				</form>
			)}
		</div>
	);
}
