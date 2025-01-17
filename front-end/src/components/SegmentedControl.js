import React, { useEffect, useRef, useState } from 'react';

import PropTypes from 'prop-types';

import './../styles/SegmentedControl.css';

export default function SegmentedControl({ name, segments, callback, defaultIndex = 0, controlRef }) {
  const [activeIndex, setActiveIndex] = useState(defaultIndex);
  const componentReady = useRef();

  const onInputChange = (value, index) => {
    setActiveIndex(index);
    callback(value, index);
  };

  const updateStyles = () => {
    if (segments[activeIndex]?.ref?.current) {
      const activeSegmentRef = segments[activeIndex].ref;
      const { offsetWidth, offsetLeft } = activeSegmentRef.current;
      const { style } = controlRef.current;

      style.setProperty('--highlight-width', `${offsetWidth}px`);
      style.setProperty('--highlight-x-pos', `${offsetLeft}px`);
    }
  };

  // Determine when the component is "ready"
  useEffect(() => {
    componentReady.current = true;
  }, []);

  useEffect(() => {
    updateStyles();
    window.addEventListener('resize', updateStyles);
    return () => {
      window.removeEventListener('resize', updateStyles);
    };
  }, [activeIndex, callback, controlRef, segments]);

  return (
    <div className="controls-container" ref={controlRef}>
      <div className={`controls ${componentReady.current ? 'ready' : 'idle'}`}>
        {segments?.map((item, i) => (
          <div key={item.value} className={`segment ${i === activeIndex ? 'active' : 'inactive'}`} ref={item.ref}>
            <input
              type="radio"
              value={item.value}
              id={item.value}
              name={name}
              onChange={() => onInputChange(item.value, i)}
              checked={i === activeIndex}
            />
            <label htmlFor={item.label}>{item.label}</label>
          </div>
        ))}
      </div>
    </div>
  );
}

SegmentedControl.propTypes = {
  name: PropTypes.string.isRequired,
  segments: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
      ref: PropTypes.object.isRequired,
    }),
  ).isRequired,
  callback: PropTypes.func.isRequired,
  defaultIndex: PropTypes.number,
  controlRef: PropTypes.object.isRequired,
};
