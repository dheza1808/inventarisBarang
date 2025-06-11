export default function DaftarBarang() {
    return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Input Barang Masuk</h2>
      <form className="space-y-4 bg-white p-6 rounded shadow">
        <input type="text" placeholder="Nama Barang" className="border p-2 w-full rounded" />
        <input type="number" placeholder="Jumlah" className="border p-2 w-full rounded" />
        <input type="date" className="border p-2 w-full rounded" />
        <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Simpan</button>
      </form>
    </div>
  );
}