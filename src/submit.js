import axios from 'axios';

export async function submitPipeline(nodes, edges, returnData = false) {
  const response = await axios.post('http://localhost:8000/pipelines/parse', {
    nodes,
    edges,
  });
  const { num_nodes, num_edges, is_dag } = response.data;
  if (returnData) {
    return { num_nodes, num_edges, is_dag };
  } else {
    alert(
      `Pipeline Info:\n\nNodes: ${num_nodes}\nEdges: ${num_edges}\nIs DAG: ${is_dag ? 'Yes' : 'No'}`
    );
  }
}
