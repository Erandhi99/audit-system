import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Trash2, Send, RefreshCw } from 'lucide-react';

const API_BASE = "http://localhost:8080/api/audit";

function App() {
  const [logs, setLogs] = useState([]);
  const [formData, setFormData] = useState({ user: '', action: '', details: '' });
  const [loading, setLoading] = useState(false);

  // Fetch logs from the backend
  const fetchLogs = async () => {
    try {
      const response = await axios.get(API_BASE);
      setLogs(response.data);
    } catch (error) {
      console.error("Error fetching logs:", error);
    }
  };

  // Submit a new AuditLog
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post(API_BASE, formData);
      setFormData({ user: '', action: '', details: '' });
      fetchLogs();
    } catch (error) {
      alert("Failed to create log. Ensure backend is running.");
    } finally {
      setLoading(false);
    }
  };

  // Auto-refresh every 5 seconds to see the TTL "self-destruct" in action
  useEffect(() => {
    fetchLogs();
    const interval = setInterval(fetchLogs, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif', maxWidth: '800px', margin: '0 auto' }}>
      
    </div>
  );
}

export default App;