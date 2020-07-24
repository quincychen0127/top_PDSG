import React from "react"

import "./MainPage.css"

const MainPage = () => {
    return (
        <main>
            <div className="UpperBar">
                Upper bar (Theme of Website)
            </div>
            <div className="MainContent">
                <div className="LeftBar">
                    <div>
                        Catalog: Tier1 and Tier2 topics
                    </div>
                    <div>
                        Some minor contents
                    </div>    
                </div>
                
                <div className="RightBar">
                    <div>
                        Main contents start here
                    </div>
                    <div>
                        Mission of TOP
                    </div>
                    <div>
                    Formal introduction of website
                    </div>                    
                </div>
            </div>
        </main>
    )
}

export default MainPage