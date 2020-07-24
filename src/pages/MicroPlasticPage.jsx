import React from "react"
import {DndProvider,DragDropContext } from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";

import Container from "../dragbox/DropDragContainer"

const MicroPlasticPage = () => {
    return (
        <DndProvider backend={HTML5Backend}>
            <div>
                This is the microplastic page
            </div>
            <Container/>
        </DndProvider>
    )
}

export default MicroPlasticPage