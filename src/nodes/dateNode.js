import BaseNode from './abstractions/BaseNode';
import { Position } from 'reactflow';

export const DateNode = ({ id }) => (
  <BaseNode
    title="Date"
    handles={[
      { type: 'source', position: Position.Right, id: `${id}-date` },
    ]}
  >
    <label>
      Pick Date:
      <input type="date" />
    </label>
  </BaseNode>
);