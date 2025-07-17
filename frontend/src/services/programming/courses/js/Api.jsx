import { useState } from 'react';
import axios from 'axios';

const Api = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // GET request example
  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.get('https://api.example.com/data');
      setData(response.data);
    } catch (err) {
      setError(err.response?.data?.message || err.message || 'Unknown error occurred');
    } finally {
      setLoading(false);
    }
  };

  // POST request example
  const postData = async (payload) => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.post('https://api.example.com/data', payload, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer your_token_here' // if needed
        }
      });
      setData(response.data);
      return response.data; // Optional: return data for further processing
    } catch (err) {
      setError(err.response?.data?.message || err.message || 'Unknown error occurred');
      throw err; // Re-throw if you want to handle the error in the calling function
    } finally {
      setLoading(false);
    }
  };

  // DELETE request example
  const deleteData = async (id) => {
    try {
      setLoading(true);
      await axios.delete(`https://api.example.com/data/${id}`);
      // Handle successful deletion (e.g., update UI)
    } catch (err) {
      setError(err.response?.data?.message || err.message || 'Failed to delete');
    } finally {
      setLoading(false);
    }
  };

  // Example usage in component
  const handleSubmit = async (formData) => {
    try {
      await postData(formData);
      // Do something after successful post
    } catch {
      // Error already handled in postData
    }
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">API Integration with Axios</h1>
      
      <div className="bg-gray-100 p-6 rounded-lg mb-6">
        <h2 className="text-xl font-semibold mb-3">GET Request Example</h2>
        <button
          onClick={fetchData}
          disabled={loading}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50"
        >
          {loading ? 'Loading...' : 'Fetch Data'}
        </button>
        
        {error && (
          <div className="mt-3 p-3 bg-red-100 text-red-700 rounded">
            Error: {error}
          </div>
        )}
        
        {data && (
          <div className="mt-4 p-4 bg-white rounded shadow">
            <pre>{JSON.stringify(data, null, 2)}</pre>
          </div>
        )}
      </div>
      
      <div className="bg-gray-100 p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-3">Code Implementation</h2>
        
        <div className="bg-black text-gray-200 p-4 rounded overflow-x-auto">
          <pre className="text-sm">
            <code>
{`// GET request with error handling
const fetchData = async () => {
  try {
    setLoading(true);
    setError(null);
    const response = await axios.get('https://api.example.com/data');
    setData(response.data);
  } catch (err) {
    setError(
      err.response?.data?.message || 
      err.message || 
      'Unknown error occurred'
    );
  } finally {
    setLoading(false);
  }
};

// POST request with headers
const postData = async (payload) => {
  try {
    const response = await axios.post(
      'https://api.example.com/data',
      payload,
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer your_token'
        }
      }
    );
    return response.data;
  } catch (err) {
    // Error handling...
  }
};`}
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
};


export default Api;
