import React from "react"

import {Link} from "react-router-dom"

const WelcomePage = () => {
    return (
        <div className="App">
            <main>
            {/* The navigation bar of our sub webpages */}
                <div className="WelcomePageTopic">
                    <p>Welcome to our website</p>
                    <p>(some theme images scrollbar here)</p>
                </div>
                <nav className="NavBar">
                    <div className="SubPageTopic">
                        <Link to="/MainPage">Main Page</Link>
                    </div>
                    <div className="SubPageTopic">
                        Macro Plastics
                    </div>
                    <div className="SubPageTopic">
                        <Link to="/MicroPlastics">Micro Plastics</Link>
                    </div>
                    <div className="SubPageTopic">
                        <Link to="/VisualizationPage">Dataset Visualization</Link>
                    </div>
                    <div className="SubPageTopic">
                        <Link to="/Calculator">Plastics Calculator</Link>
                    </div>
                     <div className="SubPageTopic">
                        <Link to="/PlasticsEntry">Plastics Entry</Link>
                    </div>
                </nav>
            </main>
        </div>
    )
}

export default WelcomePage