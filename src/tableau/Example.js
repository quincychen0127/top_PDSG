import React, { Component } from "react"
import tableauSoftware from "tableau-api"

const tableau_url = "https://public.tableau.com/views/Example2_15969982762130/Dashboard4?:language=en&:display_count=y&:origin=viz_share_link"

class Example extends Component {
    componentDidMount = () => {
        this.initViz()
    }

    initViz = () => {
        const options = {
            width: '1000px',
            height: '600px'
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
