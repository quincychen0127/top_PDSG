import React from "react"

import "./Category"
import "./Calculator.css"

const Calculator = () => {
    // Array of arrays
    // Input from the user
    var CategoryInput = [[0,0],[0,0],[0,0],[0]]
    // Unit weight of plastics
    var CategoryWeight = [[1,2],[3,4],[5,6],[7]]
    // Toxic level
    var CategoryToxicity = [[1,1],[0,0],[1,2],[1]]

    return (
        <main>
            <div className="Category">Packaging and Containers</div>
                <div className="SubCategory">Small plastic bottles</div>
                <div className="SubCategory">Large plastic bottles</div>
            <div className="Category">Bathroom and Laundry</div>
                <div className="SubCategory">Toothbrushes</div>
                <div className="SubCategory">Body soap bottles</div>
            <div className="Category">Entertainments</div>
                <div className="SubCategory">Toys</div>
                <div className="SubCategory">Electronic Devices</div>
            <div className="Category">Furnitures and KitchenWare</div>
                <div className="SubCategory">Plastic bowls and cups</div>
            
            <button className="ResultButton">Show My Results!</button>
            <button className="NewClassButton">Add new category</button>
        </main>
    )
}

export default Calculator