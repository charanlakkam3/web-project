from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware  # <-- Add this import
from pydantic import BaseModel
from typing import List, Dict

app = FastAPI()

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins= ["http://localhost:3000"], #for more security
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class PipelineRequest(BaseModel):
    nodes: List[Dict]
    edges: List[Dict]

@app.post("/pipelines/parse")
async def parse_pipeline(pipeline: PipelineRequest):
    nodes = pipeline.nodes
    edges = pipeline.edges

    num_nodes = len(nodes)
    num_edges = len(edges)

    # Build adjacency list
    adj = {node['id']: [] for node in nodes}
    for edge in edges:
        source = edge['source']
        target = edge['target']
        adj[source].append(target)

    # Detect cycle using DFS
    def is_dag():
        visited = set()
        rec_stack = set()

        def dfs(v):
            visited.add(v)
            rec_stack.add(v)
            for neighbor in adj.get(v, []):
                if neighbor not in visited:
                    if not dfs(neighbor):
                        return False
                elif neighbor in rec_stack:
                    return False
            rec_stack.remove(v)
            return True

        for node in adj:
            if node not in visited:
                if not dfs(node):
                    return False
        return True

    return {
        "num_nodes": num_nodes,
        "num_edges": num_edges,
        "is_dag": is_dag()
    }