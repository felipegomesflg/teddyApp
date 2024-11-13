import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL, 
});


export const getAll = async <T>(endpoint: string): Promise<T[]> => {
  try {
    const response = await api.get<T[]>(endpoint);
    return response.data;
  } catch (error) {
    console.error(`Erro ao buscar dados do endpoint ${endpoint}:`, error);
    throw error;
  }
};


export const getById = async <T>(endpoint: string, id: number): Promise<T> => {
  try {
    const response = await api.get<T>(`${endpoint}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Erro ao buscar dados do endpoint ${endpoint} com ID ${id}:`, error);
    throw error;
  }
};


export const create = async <T>(endpoint: string, data: T): Promise<T> => {
  try {
    const response = await api.post<T>(endpoint, data);
    return response.data;
  } catch (error) {
    console.error(`Erro ao criar novo registro no endpoint ${endpoint}:`, error);
    throw error;
  }
};


export const update = async <T>(endpoint: string, id: number, data: T): Promise<T> => {
  try {
    const response = await api.patch<T>(`${endpoint}/${id}`, data);
    return response.data;
  } catch (error) {
    console.error(`Erro ao atualizar registro no endpoint ${endpoint} com ID ${id}:`, error);
    throw error;
  }
};


export const remove = async (endpoint: string, id: number): Promise<void> => {
  try {
    await api.delete(`${endpoint}/${id}`);
  } catch (error) {
    console.error(`Erro ao excluir registro no endpoint ${endpoint} com ID ${id}:`, error);
    throw error;
  }
};

export default api;
