import logo from './logo.svg';
import './App.css';
import DraggableV2 from './Features/DragClass/DraggableV2';
// import Draggable from './Features/Draggable/Draggable';
import { Example } from './Features/Draggable/Example';
import SearchV2 from './Features/SearchV2/components/SearchV2';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import Panel from './Features/Panel/Panel';
import { useRef } from 'react';

function App() {
  const searchRef = useRef();
  return (
    <>
      {/*
      <DndProvider backend={HTML5Backend}>
        <Example></Example>
      </DndProvider> */}

      <Panel
      >
      </Panel>
      {/* <DraggableV2></DraggableV2> */}

      {/* <DraggableV2></DraggableV2> */}
    </>
  );
}

export default App;
