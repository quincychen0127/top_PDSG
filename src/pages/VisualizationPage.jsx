import React from "react"
import "./VisualizationPage.css"
import Stats from "../tableau/Stats"

const VisualizationPage = () => {
    return (
        <main>
            <div ClassName="LeftBar">
              The Cost of Ocean Plastic Pollution 
            <Stats/>
           </div>
        </main>
    )
}

export default VisualizationPage
