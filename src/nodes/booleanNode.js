import BaseNode from './abstractions/BaseNode';
import { Position } from 'reactflow';

export const BooleanNode = ({ id }) => (
  <BaseNode
    title="Boolean"
    handles={[
      { type: 'source', position: Position.Right, id: `${id}-bool` },
    ]}
  >
    <label>
      Value:
      <select>
        <option value="true">True</option>
        <option value="false">False</option>
      </select>
    </label>
  </BaseNode>
);