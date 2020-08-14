import React, { Component } from "react"

import "./Category"
import "./Calculator.css"
import Category from "./Category"

class Calculator extends Component {
    constructor(props) {
        super(props);
        // this.state mean the unit chosen
        this.state = {
            sumWeight: 0,
            sumToxic: 0
        }
    }

    showResult = () => {
        alert("Your total plastic footprint is " + this.state.sumWeight)
    }

    callback = (states) => {
        var newWeight = this.state.sumWeight + states.SumWeight
        var newToxic = this.state.sumToxic + states.sumToxic
        this.setState({ sumWeight: newWeight, sumToxic:newToxic })
    }

    render() {
        return (
            <div>
                <Category
                    name="Packaging and Containers"
                    subnames={["Small plastic bottles", "Large plastic bottles"]}
                    weight={[1,2]}
                    toxicity={[1,1]}
                    callback={this.callback}
                />
                <Category
                    name="Bathroom and Laundry"
                    subnames={["Toothbrushes", "Body soap bottles"]}
                    weight={[3,4]}
                    toxicity={[1,2]}
                    callback={this.callback}
                />
                <button 
                    className="ResultButton"
                    onClick={this.showResult}
                >
                    Show My Results!
                </button>
            </div>
        )
    }
    
}

export default Calculator