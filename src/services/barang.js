import axios from 'axios'

const API_URL = import.meta.env.VITE_SUPABASE_URL + "/rest/v1/barang"
const API_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY

const headers = {
  apikey: API_KEY,
  Authorization: `Bearer ${API_KEY}`,
  "Content-Type": "application/json",
}

export const barangAPI = {
  // ✅ Tambah Barang (Insert)
  async tambahBarang(data) {
    const response = await axios.post(API_URL, [data], { headers })
    return response.data
  },

  // ✅ Get Semua Barang
  async getAllBarang() {
    const response = await axios.get(API_URL, {
      headers,
      params: {
        select: '*',
      },
    })
    return response.data
  },

  // ✅ Get Barang By ID
  async getBarangById(id) {
    const response = await axios.get(API_URL, {
      headers,
      params: {
        id: `eq.${id}`,
        select: '*',
      },
    })
    return response.data
  },

  // ✅ Update Barang
  async updateBarang(id, data) {
    const response = await axios.patch(`${API_URL}?id=eq.${id}`, data, { headers })
    return response.data
  },

  // ✅ Hapus Barang
  async deleteBarang(id) {
    const response = await axios.delete(`${API_URL}?id=eq.${id}`, { headers })
    return response.data
  },

  // ✅ Get Count Semua Barang
  async getCountBarang() {
    const response = await axios.get(API_URL, {
      headers: {
        ...headers,
        Prefer: 'count=exact',
      },
      params: {
        select: 'id',
      },
    })
    const count = response.headers['content-range']?.split('/')[1]
    return parseInt(count, 10) || 0
  },
}
