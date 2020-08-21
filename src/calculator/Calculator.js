import React, { Component, Children } from "react"

import "./Category"
import "./Calculator.css"
import Category from "./Category"

class Calculator extends Component {
    constructor(props) {
        super(props);
        // this.state mean the unit chosen
        this.state = {
            allWeight: 0,
            allToxic: 0
        }
    }

    showResult = () => {
        alert("Your total plastic footprint is " + this.state.allWeight);
        this.setState({ 
            allWeight: 0, 
            allToxic: 0 
        });
    }

    callback = (states) => {
        var newWeight = this.state.allWeight + states.newWeight
        var newToxic = this.state.allToxic + states.newToxic
        this.setState({ 
            allWeight: newWeight, 
            allToxic: newToxic 
        });
    }

    reset = () => {
        this.setState({ 
            allWeight: 0, 
            allToxic: 0 
        });

    }

    render() {
        return (
            <div>
                <Category
                    name="Packaging and Containers"
                    subnames={["Small plastic bottles", "Large plastic bottles"]}
                    weight={[1,2]}
                    toxicity={[1,1]}
                    callback={(states) => this.callback(states)}
                />
                <Category
                    name="Bathroom and Laundry"
                    subnames={["Toothbrushes", "Body soap bottles"]}
                    weight={[3,4]}
                    toxicity={[1,2]}
                    callback={(states) => this.callback(states)}
                />
                <button 
                    className="ResultButton"
                    onClick={this.showResult}
                >
                    Show My Results!
                </button>
                <button
                    className="ResetButton"
                    onClick={this.reset}
                >
                    Reset All
                </button>
            </div>
        )
    }
    
}

export default Calculator