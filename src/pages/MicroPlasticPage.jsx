import React from "react"
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";

import Container from "../dragbox/DropDragContainer"
import "./MicroPlasticPage.css"

const MicroPlasticPage = () => {
    return (
        <DndProvider backend={HTML5Backend}>
            <div className="PageContent">
                This is the microplastic page. Text Analysis and images are listed here. The contents are chosen from the dataset review and collection part.
            </div>
            <Container/>
        </DndProvider>
    )
}

export default MicroPlasticPage