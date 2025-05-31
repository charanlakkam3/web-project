import React, { useState } from 'react';
import { submitPipeline } from './submit';
import { PipelineToolbar } from './toolbar';
import PipelineUI from './ui';
import { useStore } from './store';
import { shallow } from 'zustand/shallow';
import PipelineModal from './PipelineModal';

const selector = (state) => ({
  nodes: state.nodes,
  edges: state.edges,
});

function App() {
  const { nodes, edges } = useStore(selector, shallow);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState({ num_nodes: 0, num_edges: 0, is_dag: true });

  const handleSubmit = async () => {
    console.log('Edges before submit:', edges);
    try {
      const data = await submitPipeline(nodes, edges, true); // pass true to get data instead of alert
      setModalData(data);
      setModalOpen(true);
    } catch (error) {
      alert('Failed to submit pipeline: ' + (error.response?.data?.detail || error.message));
    }
  };
console.log('Nodes:', nodes);
  return (
    <div>
      <PipelineToolbar />
      <PipelineUI />
      <button onClick={handleSubmit}>
        Submit Pipeline
      </button>
      <PipelineModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        {...modalData}
      />
    </div>
  );
}

export default App;
