// outputNode.js

import { useState } from 'react';
import { Position } from 'reactflow';
import BaseNode from './abstractions/BaseNode';

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.outputName || id.replace('customOutput-', 'output_'));
  const [outputType, setOutputType] = useState(data.outputType || 'Text');

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setOutputType(e.target.value);
  };

  return (
    <BaseNode
      title="Output"
      handles={[
        {
          type: 'target',
          position: Position.Left,
          id: "value",
        },
      ]}
    >
      <label>
        Name:
        <input
          type="text"
          value={currName}
          onChange={handleNameChange}
        />
      </label>
      <label>
        Type:
        <select value={outputType} onChange={handleTypeChange}>
          <option value="Text">Text</option>
          <option value="File">Image</option>
        </select>
      </label>
    </BaseNode>
  );
};;
