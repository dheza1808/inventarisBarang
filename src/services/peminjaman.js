import axios from 'axios'

const API_URL = import.meta.env.VITE_SUPABASE_URL + "/rest/v1/peminjaman"
const API_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY

const headers = {
  apikey: API_KEY,
  Authorization: `Bearer ${API_KEY}`,
  "Content-Type": "application/json",
}

export const peminjamanAPI = {
  // ✅ Tambah peminjaman baru
  async tambahPeminjaman(data) {
    data.status = 'menunggu'
    const response = await axios.post(API_URL, [data], { headers })
    return response.data
  },

  // ✅ Update status peminjaman (Disetujui/Ditolak)
  async updateStatus(id, status) {
    const response = await axios.patch(`${API_URL}?id=eq.${id}`, { status }, { headers })
    return response.data
  },

  // ✅ Get semua data peminjaman (termasuk relasi data barang)
  async getAllPeminjaman() {
    const response = await axios.get(API_URL, {
      headers,
      params: {
        select: '*,barang(*)',
      },
    })
    return response.data
  },

  // ✅ Get peminjaman dengan status "Menunggu"
  async getPeminjamanMenunggu() {
    const response = await axios.get(API_URL, {
      headers,
      params: {
        status: 'eq.menunggu',
        select: '*,barang(*)',
      },
    })
    return response.data
  },

  // ✅ Count peminjaman dengan status "Disetujui"
  async getCountDisetujui() {
    const response = await axios.get(API_URL, {
      headers: {
        ...headers,
        Prefer: 'count=exact',
      },
      params: {
        status: 'eq.disetujui',
        select: 'id',
      },
    })
    const count = response.headers['content-range']?.split('/')[1]
    return parseInt(count, 10) || 0
  },

  // ✅ Count peminjaman dengan status "Disetujui" atau "Ditolak"
  async getCountPeminjaman() {
    const response = await axios.get(API_URL, {
      headers: {
        ...headers,
        Prefer: 'count=exact',
      },
      params: {
        or: '(status.eq.disetujui,status.eq.ditolak)',
        select: 'id',
      },
    })
    const count = response.headers['content-range']?.split('/')[1]
    return parseInt(count, 10) || 0
  },
}
