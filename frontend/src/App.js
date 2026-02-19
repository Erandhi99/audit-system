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
      <h1>Shield Audit System</h1>
      
      {/* Log Submission Form */}
      <form onSubmit={handleSubmit} style={{ marginBottom: '30px', display: 'grid', gap: '10px' }}>
        <input 
          placeholder="User Name" 
          value={formData.user}
          onChange={(e) => setFormData({...formData, user: e.target.value})}
          required 
        />
        <input 
          placeholder="Action (e.g., LOGIN)" 
          value={formData.action}
          onChange={(e) => setFormData({...formData, action: e.target.value})}
          required 
        />
        <textarea 
          placeholder="Details" 
          value={formData.details}
          onChange={(e) => setFormData({...formData, details: e.target.value})}
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Saving...' : 'Create Audit Log'}
        </button>
      </form>

      <hr />

      {/* Logs Table */}
      <h2>Active Logs (Expire after 60s)</h2>
      <table border="1" cellPadding="10" style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ background: '#f4f4f4' }}>
            <th>User</th>
            <th>Action</th>
            <th>Details</th>
            <th>Created At</th>
          </tr>
        </thead>
        <tbody>
          {logs.map((log) => (
            <tr key={log.id}>
              <td>{log.user}</td>
              <td>{log.action}</td>
              <td>{log.details}</td>
              <td>{new Date(log.createdAt).toLocaleTimeString()}</td>
            </tr>
          ))}
          {logs.length === 0 && <tr><td colSpan="4" style={{textAlign: 'center'}}>No active logs found.</td></tr>}
        </tbody>
      </table>
    </div>
  );
}

export default App;