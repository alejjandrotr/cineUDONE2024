import axios from 'axios';

const API_BASE_URL = 'http://localhost:3001/api';
//const API_URL = 'http://localhost:3001';

// OBTENER PELÍCULAS
export const fetchMovies = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/movies`);
    console.log('Películas obtenidas:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error al obtener películas:', error);
    throw error;
  }
};

// OBTENER FUNCIONES
export const fetchFunciones = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/funciones`);
    console.log('Funciones obtenidas:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error al obtener funciones:', error);
    throw error;
  }
};

// ELIMINAR PELÍCULA
export const deleteMovieById = async (id: number) => {
  try {
    await axios.delete(`${API_BASE_URL}/delete-movies/${id}`);
  } catch (error) {
    throw new Error('Error al eliminar la película');
  }
};



// GET TOP DEALS
export const fetchTopDeals = async () => {
  const response = await axios
    .get('https://react-admin-ui-v1-api.vercel.app/topdeals')
    .then((res) => {
      console.log('axios get:', res.data);
      return res.data;
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });

  return response;
};


// GET TOTAL USERS
export const fetchTotalUsers = async () => {
  const response = await axios
    .get('https://react-admin-ui-v1-api.vercel.app/totalusers')
    .then((res) => {
      console.log('axios get:', res.data);
      return res.data;
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });

  return response;
};

// GET TOTAL PRODUCTS
export const fetchTotalProducts = async () => {
  const response = await axios
    .get('https://react-admin-ui-v1-api.vercel.app/totalproducts')
    .then((res) => {
      console.log('axios get:', res.data);
      return res.data;
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });

  return response;
};

// GET TOTAL RATIO
export const fetchTotalRatio = async () => {
  const response = await axios
    .get('https://react-admin-ui-v1-api.vercel.app/totalratio')
    .then((res) => {
      console.log('axios get:', res.data);
      return res.data;
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });

  return response;
};

// GET TOTAL REVENUE
export const fetchTotalRevenue = async () => {
  const response = await axios
    .get('https://react-admin-ui-v1-api.vercel.app/totalrevenue')
    .then((res) => {
      console.log('axios get:', res.data);
      return res.data;
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });

  return response;
};

// GET TOTAL SOURCE
export const fetchTotalSource = async () => {
  const response = await axios
    .get('https://react-admin-ui-v1-api.vercel.app/totalsource')
    .then((res) => {
      console.log('axios get:', res.data);
      return res.data;
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });

  return response;
};

// GET TOTAL VISIT
export const fetchTotalVisit = async () => {
  const response = await axios
    .get('https://react-admin-ui-v1-api.vercel.app/totalvisit')
    .then((res) => {
      console.log('axios get:', res.data);
      return res.data;
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });

  return response;
};

// GET TOTAL REVENUE BY PRODUCTS
export const fetchTotalRevenueByProducts = async () => {
  const response = await axios
    .get(
      'https://react-admin-ui-v1-api.vercel.app/totalrevenue-by-product'
    )
    .then((res) => {
      console.log('axios get:', res.data);
      return res.data;
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });

  return response;
};

// GET TOTAL PROFIT
export const fetchTotalProfit = async () => {
  const response = await axios
    .get('https://react-admin-ui-v1-api.vercel.app/totalprofit')
    .then((res) => {
      console.log('axios get:', res.data);
      return res.data;
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });

  return response;
};

// GET ALL USERS
export const fetchUsers = async () => {
  const response = await axios
    .get('https://react-admin-ui-v1-api.vercel.app/users')
    .then((res) => {
      console.log('axios get:', res.data);
      return res.data;
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });

  return response;
};

// GET SINGLE USER
export const fetchSingleUser = async (id: string) => {
  const response = await axios
    .get(`https://react-admin-ui-v1-api.vercel.app/users/${id}`)
    .then((res) => {
      console.log('axios get:', res.data);
      return res.data;
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });

  return response;
};

// GET ALL PRODUCTS
export const fetchProducts = async () => {
  const response = await axios
    .get('https://react-admin-ui-v1-api.vercel.app/products')
    .then((res) => {
      console.log('axios get:', res.data);
      return res.data;
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });

  return response;
};

// GET SINGLE PRODUCT
export const fetchSingleProduct = async (id: string) => {
  const response = await axios
    .get(`https://react-admin-ui-v1-api.vercel.app/products/${id}`)
    .then((res) => {
      console.log('axios get:', res.data);
      return res.data;
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });

  return response;
};

// GET ALL ORDERS
export const fetchOrders = async () => {
  const response = await axios
    .get('https://react-admin-ui-v1-api.vercel.app/orders')
    .then((res) => {
      console.log('axios get:', res.data);
      return res.data;
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });

  return response;
};

// GET ALL POSTS
export const fetchPosts = async () => {
  const response = await axios
    .get('https://react-admin-ui-v1-api.vercel.app/posts')
    .then((res) => {
      console.log('axios get:', res.data);
      return res.data;
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });

  return response;
};

// GET ALL NOTES
export const fetchNotes = async () => {
  const response = await axios
    .get(`https://react-admin-ui-v1-api.vercel.app/notes?q=`)
    .then((res) => {
      console.log('axios get:', res.data);
      return res.data;
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });

  return response;
};

// GET ALL LOGS
export const fetchLogs = async () => {
  const response = await axios
    .get(`https://react-admin-ui-v1-api.vercel.app/logs`)
    .then((res) => {
      console.log('axios get:', res.data);
      return res.data;
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });

  return response;
};
