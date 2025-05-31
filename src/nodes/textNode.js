// textNode.js

import { useState, useMemo, useRef, useEffect } from 'react';
import { Position } from 'reactflow';
import BaseNode from './abstractions/BaseNode';

function extractVariables(text) {
  // Matches {{ variableName }}
  const regex = /{{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*}}/g;
  const vars = new Set();
  let match;
  while ((match = regex.exec(text))) {
    vars.add(match[1]);
  }
  return Array.from(vars);
}

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');
  const textareaRef = useRef(null);

  // Extract variables from text
  const variables = useMemo(() => extractVariables(currText), [currText]);

  // Dynamically adjust textarea and node size
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px';
      textareaRef.current.style.width = '100%';
    }
  }, [currText]);

  // Handles for variables (left side) and output (right side)
  const handles = [
    ...variables.map((v, idx) => ({
      type: 'target',
      position: Position.Left,
      id: `var-${v}`,
      style: { top: `${40 + idx * 28}px` }
    })),
    {
      type: 'source',
      position: Position.Right,
      id: "output",
    }
  ];

  return (
    <BaseNode
      title="Text"
      handles={handles}
      style={{
        minWidth: 220,
        width: Math.max(220, Math.min(500, currText.length * 8)),
        minHeight: 100 + variables.length * 28,
      }}
    >
      <label>
        Text:
        <textarea
          ref={textareaRef}
          value={currText}
          onChange={e => setCurrText(e.target.value)}
          rows={1}
          style={{
            resize: 'none',
            width: '100%',
            fontFamily: 'inherit',
            fontSize: '1rem',
            borderRadius: 8,
            border: '1.5px solid #c7d6ee',
            padding: '6px 10px',
            marginTop: 6,
            boxSizing: 'border-box',
            background: '#fafdff'
          }}
        />
      </label>
    </BaseNode>
  );
};
