import axios from 'axios'

const API_URL = import.meta.env.VITE_SUPABASE_URL + "/rest/v1/user"
const API_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY

const headers = {
  apikey: API_KEY,
  Authorization: `Bearer ${API_KEY}`,
  "Content-Type": "application/json",
}

export const usersAPI = {
  async registerUser(data) {
    const response = await axios.post(API_URL, [data], { headers })
    return response.data
  },

  async loginUser(email) {
    const response = await axios.get(API_URL, {
      headers,
      params: {
        email: `eq.${email}`,
        select: '*',
      },
    })
    return response.data
  },

  async getUserById(userId) {
    const response = await axios.get(API_URL, {
      headers,
      params: {
        id: `eq.${userId}`,
        select: '*',
      },
    })
    return response.data
  },

  async editUser(userId, data) {
    const response = await axios.patch(`${API_URL}?id=eq.${userId}`, data, {
      headers,
    })
    return response.data
  },
}
