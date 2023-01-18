import './Settings.css'
import { useState } from 'react';
import ToggleButton from './ToggleButton';
import Icon from '../assets/icons/Icon';

function Settings({ ref }) {

  return (
    <div ref={ref} className="settings-container">
      <div className="settings-label">Show only available</div>

      <SettingsRow icon="filter" label="Filter" iconSize="small" />
      <SettingsRow icon="filter" label="Filter" iconSize="small" />

      <SettingsRow icon="filter" label="Filter" iconSize="small" />


    </div>
  );
}


function SettingsRow({ icon, label, iconSize }) {
  return (
    <div className="settings-row">
      <div className="settings-icon">
        <Icon id={icon} size={iconSize} />
        <span>{label}</span>
      </div>
      <div className="settings-toggle">
        <ToggleButton></ToggleButton>
      </div>
    </div>
  );
}




export default Settings;