import React from 'react';
import './ToggleButton.css';
import useToggle from '../hooks/useToggle';

function ToggleButton() {

  const [state, toggle] = useToggle();


  return (
    <div className="toggleContainer" onClick={() => { toggle() }}>
      {state ? <div className="toggleCircle active"></div> : <div className="toggleCircle"></div>}
    </div>
  );
}

export default ToggleButton;