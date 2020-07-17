/*
filename: App.js 
*/

import React, { useCallback, useState } from "react";
import DragBox from './DragBox';
import DropBox from './DropBox';
import { DndProvider,DragDropContext } from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";
import Example from './example';

import "./App.css";

function App() {

  // We pass onDrop function and accept prop to the component. It will be used as initial params for useDropzone hook
  return (
    <div className="App">
        <DndProvider backend={HTML5Backend}>
          <Example />
        </DndProvider>
    </div>
  );
};



// We will pass this function to ImageList and then to Image -> Quiet a bit of props drilling, the code can be refactored and place all the state management in ImageList itself to avoid props drilling. It's an exercise for you :)

export default App;


