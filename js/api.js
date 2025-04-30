async function apiRequest(endpoint, method = 'GET', body = null) {
  const headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Api-Key': CONFIG.apiKey
  };
  
    const token = localStorage.getItem('token');
    if (token) headers['Authorization'] = 'Bearer ' + token;

  try {
    const response = await fetch(CONFIG.baseUrl + endpoint, {
      method,
      headers,
      body: body ? JSON.stringify(body) : null
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('API Request Error:', error);
    throw error; // Re-throw the error for the calling function to handle
  }
}