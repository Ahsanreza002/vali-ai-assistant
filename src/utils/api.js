import axios from 'axios'

const api = axios.create({
  baseURL: '/api',
  timeout: 60000,
})

export const uploadDocument = async (file) => {
  const formData = new FormData()
  formData.append('file', file)
  const res = await api.post('/upload', formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  })
  return res.data
}

export const queryKnowledge = async (query, conversationHistory = []) => {
  const res = await api.post('/query', { query, history: conversationHistory })
  return res.data
}

export const getDocuments = async () => {
  const res = await api.get('/documents')
  return res.data
}

export const deleteDocument = async (docId) => {
  const res = await api.delete(`/documents/${docId}`)
  return res.data
}

export default api
