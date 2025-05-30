import BaseNode from './abstractions/BaseNode';
import { Position } from 'reactflow';

export const ImageNode = ({ id }) => (
  <BaseNode
    title="Image"
    handles={[
      { type: 'source', position: Position.Right, id: `${id}-img` },
    ]}
  >
    <label>
      URL:
      <input type="text" placeholder="Image URL" />
    </label>
  </BaseNode>
);