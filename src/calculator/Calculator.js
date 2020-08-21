import React, { Component, createRef } from "react"

import "./Category"
import "./Calculator.css"
import Category from "./Category"

const categoryNum = 2;

class Calculator extends Component {
    constructor(props) {
        super(props);
        this.category = [];
        for (var i = 0; i < categoryNum; i++) {
            this.category.push(createRef());
        }
    }

    showResult = () => {
        var allWeight = 0;
        var allToxic = 0;
        for (var i = 0; i < categoryNum; i++) {
            var states = this.category[i].current.calculate();
            console.log(states)
            allWeight += states.sumWeight;
            allToxic += states.sumToxic;
        }
        alert("Your total plastic footprint is " + allWeight);
    }

    reset = () => {
        for (var i = 0; i < categoryNum; i++) {
            this.category[i].current.reset();
        }
    }

    render() {
        return (
            <div>
                <Category
                    name="Packaging and Containers"
                    subnames={["Small plastic bottles", "Large plastic bottles"]}
                    weight={[1,2]}
                    toxicity={[1,1]}
                    ref={this.category[0]}
                />
                <Category
                    name="Bathroom and Laundry"
                    subnames={["Toothbrushes", "Body soap bottles"]}
                    weight={[3,4]}
                    toxicity={[1,2]}
                    ref={this.category[1]}
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