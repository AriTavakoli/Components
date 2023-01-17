import React, { useState, useEffect, useRef } from 'react';
import './Tabs.css';

const transitionTime = 200;
const transitionStyle = `left ${transitionTime}ms, right ${transitionTime}ms`;

function Tabs(props) {
  const [sizes, setSizes] = useState({});
  const els = useRef({});
  const root = useRef(null);

  useEffect(() => {
    getSizes();
  }, [props.children, props.active]);

  const getSizes = () => {
    const rootBounds = root.current.getBoundingClientRect();

    const newSizes = {};

    Object.keys(els.current).forEach((key) => {
      const el = els.current[key];
      const bounds = el.getBoundingClientRect();

      const left = bounds.left - rootBounds.left;
      const right = rootBounds.right - bounds.right;

      newSizes[key] = { left, right };
    });

    setSizes(newSizes);
    return newSizes;
  }

  console.log(JSON.stringify(sizes, null, 2));

  return (
    <div className="Tabs-container">
      <div
        className="Tabs"
        ref={root}
      >
        {React.Children.map(props.children, (child, i) => {
          let className = `Tabs__Tab`;
          if (child.key === props.active) {
            className = `${className} Tabs__Tab--active`;
          }
          return (
            <div
              className={className}
              onClick={() => {
                props.onChange(child.key);
              }}
              ref={el => els.current[child.key] = el}
            >
              {child}
            </div>
          );
        })}
        <div className="Tabs__Underline-Container">

          <div
            className="Tabs__Underline"
            style={getUnderlineStyle()}
          />
          <div
            className="Tabs__UnderlineWhole"
          />
        </div>


      </div>
    </div>
  );

  function getUnderlineStyle() {
    if (props.active == null || Object.keys(sizes).length === 0) {
      return { left: '0', right: '100%' };
    }

    const size = sizes[props.active];

    return {
      left: `${size.left}px`,
      right: `${size.right}px`,
      transition: transitionStyle,
    }
  }
}

export default Tabs;
