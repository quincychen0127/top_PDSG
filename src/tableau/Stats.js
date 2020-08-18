import React, { Component } from "react"
import tableauSoftware from "tableau-api"

const tableau_url = "https://public.tableau.com/views/costofplastic/Dashboard6?:language=en&:display_count=y&publish=yes&:origin=viz_share_link"

class Stats extends Component {
    componentDidMount = () => {
        this.initViz()
    }

    initViz = () => {
        const options = {
            width: '1000px',
            height: '800px'
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

export default Stats
