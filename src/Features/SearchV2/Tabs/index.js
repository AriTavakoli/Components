import autoAnimate from '@formkit/auto-animate';
import React, { useState } from 'react';
import Tabs from './Tabs';
import { useAutoAnimate } from '@formkit/auto-animate/react'
import Icon from '../components/assets/icons/Icon';
const styles = {
};

const TabParent = (props) => {


  const [active, setActive] = useState('aTab');
  const autoAnimate = useAutoAnimate({ duration: 100 })

  const childrenArray = React.Children.toArray(props.children);


  const content = {
    aTab: childrenArray[0],
    bTab: childrenArray[1],
    cTab: childrenArray[2],
  };

  return (
    <div style={styles}>
      <Tabs
        active={active}
        onChange={setActive}
      // ref = {autoAnimate}
      >
        <div key="aTab">
          <Icon id="drop" size={20}></Icon>
        </div>
        <div key="bTab">
          <Icon id="mark" size={20}></Icon>
        </div>

        <div key="cTab">
          <Icon id="component" size={20}></Icon>
        </div>
      </Tabs>
      <div>{content[active]}</div>
    </div>
  );
}







export default TabParent;
