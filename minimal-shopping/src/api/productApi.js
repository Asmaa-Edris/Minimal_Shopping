import axiosInstance from './axios.js';

// 1- Fetch all products from the API
export const getAllProducts = async () => {
  try {
    const response = await axiosInstance.get('/products');
    return response.data.products;
  } catch (error) {
    console.error("Error fetching all products:", error);
    throw error;
  }
};

// 2-Fetch a single product by its ID
export const getProductById = async (id) => {
  try {
    const response = await axiosInstance.get(`/products/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching product with ID ${id}:`, error);
    throw error;
  }
};

//3- User Login

export const loginUser = async (credentials) => {
  try {
    const response = await axiosInstance.post('/auth/login', credentials);
    return response.data; 
  } catch (error) {
    console.error("Login process error:", error);
    throw error; 
  }
};

