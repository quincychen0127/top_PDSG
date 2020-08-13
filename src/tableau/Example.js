import React, { Component } from "react"
import tableauSoftware from "tableau-api"

const tableau_url = "https://public.tableau.com/views/Example4_15970981403510/Dashboard6?:language=en&:retry=yes&:display_count=y&:origin=viz_share_link"

class Example extends Component {
    componentDidMount = () => {
        this.initViz()
    }

    initViz = () => {
        const options = {
            width: '1000px',
            height: '1000px'
        }
        const vizContainer = this.vizContainer;
        this.div = new window.tableauSoftware.Viz(vizContainer, tableau_url, options);
    }
    
    render() {
        return (
            <div ref={div => this.vizContainer = div}>
            </div>
        )
    }
}

export default Example
