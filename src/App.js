//import React from 'react';
import { submitPipeline } from './submit';
import { PipelineToolbar } from './toolbar';
import PipelineUI from './ui';
import { useStore } from './store';
import { shallow } from 'zustand/shallow';

const selector = (state) => ({
  nodes: state.nodes,
  edges: state.edges,
});

function App() {
  const { nodes, edges } = useStore(selector, shallow);

  return (
    <div>
      <PipelineToolbar />
      <PipelineUI />
      <button onClick={() => submitPipeline(nodes, edges)}>
        Submit Pipeline
      </button>
    </div>
  );
}

export default App;
