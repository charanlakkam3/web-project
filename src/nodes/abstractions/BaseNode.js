import React from 'react';
import { Handle } from 'reactflow';
import '../nodeStyles.css';

const BaseNode = ({
  title,
  children,
  handles = [],
  style = {},
}) => (
  <div className="base-node" style={style}>
    <div className="base-node-title">
      <span>{title}</span>
    </div>
    <div className="base-node-content">
      {children}
    </div>
    {handles.map((h, idx) => (
      <Handle
        key={idx}
        type={h.type}
        position={h.position}
        id={h.id}
        //style={h.style}
        style={{
          width: 10,
          height: 10,
          background: '#555',
          borderRadius: '50%',
          ...h.style
  }}
      />
    ))}
  </div>
);

export default BaseNode;