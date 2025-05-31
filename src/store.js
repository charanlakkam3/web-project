// store.js


import { createWithEqualityFn } from "zustand/traditional";
import { shallow } from "zustand/shallow";
import {
    addEdge,
    applyNodeChanges,
    applyEdgeChanges,
    //MarkerType,
  } from 'reactflow';

//export const useStore = create((set, get) => ({
  export const useStore = createWithEqualityFn((set, get) => ({
    nodes: [
      // { id: '1', type: 'input', data: { label: 'A' }, position: { x: 0, y: 0 } },
      //   { id: '2', type: 'output', data: { label: 'B' }, position: { x: 200, y: 0 } },
    ],
    edges: [],
    getNodeID: (type) => {
        const newIDs = {...get().nodeIDs};
        if (newIDs[type] === undefined) {
            newIDs[type] = 0;
        }
        newIDs[type] += 1;
        set({nodeIDs: newIDs});
        return `${type}-${newIDs[type]}`;
    },
    addNode: (node) => {
        set({
            nodes: [...get().nodes, node]
        });
    },
    onNodesChange: (changes) => {
      set({
        nodes: applyNodeChanges(changes, get().nodes),
      });
    },
    onEdgesChange: (changes) => {
      set({
        edges: applyEdgeChanges(changes, get().edges),
      });
    },
    onConnect: (connection) => {
      set({
        edges: addEdge(connection, get().edges),
      });
    },
    updateNodeField: (nodeId, fieldName, fieldValue) => {
      set({
        nodes: get().nodes.map((node) => {
          if (node.id === nodeId) {
            node.data = { ...node.data, [fieldName]: fieldValue };
          }
          return node;
        }),
      });
    },
  }),shallow );
