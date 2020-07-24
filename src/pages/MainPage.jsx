import React from "react"

import "./MainPage.css"

const MainPage = () => {
    return (
        <main>
            <div className="UpperBar">
                Upper bar
            </div>
            <div className="MainContent">
                <div className="LeftBar">
                    Catalog and some minor contents
                </div>
                <div className="RightBar">
                    Main contents starting here
                </div>
            </div>
        </main>
    )
}

export default MainPage