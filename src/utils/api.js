import axios from 'axios'

const BASE_URL = import.meta.env.VITE_API_URL || 'https://vali-ai-assistant.onrender.com'

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 60000,
})

export const uploadDocument = async (file) => {
  const formData = new FormData()
  formData.append('file', file)
  const res = await api.post('/api/upload', formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  })
  return res.data
}

export const queryKnowledge = async (query, conversationHistory = []) => {
  const res = await api.post('/api/query', { query, history: conversationHistory })
  return res.data
}

export const getDocuments = async () => {
  const res = await api.get('/api/documents')
  return res.data
}

export const deleteDocument = async (docId) => {
  const res = await api.delete(`/api/documents/${docId}`)
  return res.data
}

export default api
