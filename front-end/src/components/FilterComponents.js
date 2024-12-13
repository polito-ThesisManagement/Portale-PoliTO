import React from 'react';

import { FaAngleDown, FaKey } from 'react-icons/fa6';

export default function FilterComponents() {
  return (
    <div
      style={{
        alignItems: 'center',
        borderRadius: '0.375rem',
        border: '0.0625rem solid var(--tag-border)',
        backgroundColor: 'var(--tag-bg))',
        display: 'flex',
        justifyContent: 'flex-start',
        color: 'var(--tag-text)',
        padding: '0px 6px',
        fontFamily: 'var(--font-primary)',
        fontSize: 'var(--font-size-md)',
        width: 'fit-content',
        height: '2rem',
      }}
    >
      <FaKey style={{ width: '20px' }} />
      <span
        style={{
          margin: '0px 0.5rem',
        }}
      >
        Keywords
      </span>
      <FaAngleDown strokeWidth={1} />
    </div>
  );
}
