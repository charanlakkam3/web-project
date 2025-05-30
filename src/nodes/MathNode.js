import BaseNode from './abstractions/BaseNode';
import { Position } from 'reactflow';

export const MathNode = ({ id }) => (
  <BaseNode
    title="Math"
    handles={[
      { type: 'target', position: Position.Left, id: `${id}-a` },
      { type: 'target', position: Position.Left, id: `${id}-b` },
      { type: 'source', position: Position.Right, id: `${id}-result` },
    ]}
  >
    <label>
      Operation:
      <select>
        <option value="add">Add</option>
        <option value="subtract">Subtract</option>
        <option value="multiply">Multiply</option>
        <option value="divide">Divide</option>
      </select>
    </label>
  </BaseNode>
);