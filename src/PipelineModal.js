import React from 'react';

export default function PipelineModal({ open, onClose, num_nodes, num_edges, is_dag }) {
  if (!open) return null;
  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
      background: 'rgba(0,0,0,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000
    }}>
      <div style={{
        background: '#fff', borderRadius: 8, padding: 32, minWidth: 300, boxShadow: '0 2px 16px rgba(0,0,0,0.2)'
      }}>
        <h2>Pipeline Info</h2>
        <p><strong>Nodes:</strong> {num_nodes}</p>
        <p><strong>Edges:</strong> {num_edges}</p>
        <p><strong>Is DAG:</strong> <span style={{color: is_dag ? 'green' : 'red'}}>{is_dag ? 'Yes' : 'No'}</span></p>
        <button onClick={onClose} style={{marginTop: 16, padding: '8px 16px'}}>Close</button>
      </div>
    </div>
  );
}