import BaseNode from './abstractions/BaseNode';
import { Position } from 'reactflow';

export const AudioNode = ({ id }) => (
  <BaseNode
    title="Audio"
    handles={[
      { type: 'source', position: Position.Right, id: `${id}-audio` },
    ]}
  >
    <label>
      File:
      <input type="file" accept="audio/*" />
    </label>
  </BaseNode>
);