import React, { Component, createRef } from "react"

import "./Category"
import "./Calculator.css"
import Category from "./Category"


// CHANGE THIS NUMBER IF YOU ADD OR REMOVE CATEGORIES
const categoryNum = 3;

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
        for (var i = 0; i < categoryNum; i++) {
            var states = this.category[i].current.calculate();
            allWeight += states
        }
        alert("Your annual plastic footprint is " + allWeight.toFixed(5) + " kilograms of plastic products.");
        this.reset();
    }

    showToxicity = () => {
        for (var i = 0; i < categoryNum; i++) {
            this.category[i].current.display();
        }
    }

    reset = () => {
        for (var i = 0; i < categoryNum; i++) {
            this.category[i].current.reset();
        }
    }

    render() {
        // Weight in kilogram, Toxicity in general level
        return (
            <div>
                <div className="Header">
                    <div>
                        Calculate you plastic footprint here!
                        <div>
                            <button 
                                className="ToxicityButton"
                                onClick={this.showToxicity}
                            >
                                Show Toxic Level of Plastics
                            </button>
                        </div>
                    </div>
                </div>
                <div className="Calculator">
                    <div className="Category1">
                        <Category
                            name="Hard Plastic"
                            subnames={[
                                "Pipes", 
                                "Beverage bottle",
                                "Other bottle",
                                "Bottle cap or lid",
                                "Hard food container",
                                "Hard utensil, plate, or bowl",
                                "Bucket or crate",
                                "Lighter",
                                "Lollipop stick",
                                "Personal care product",
                            ]}
                            weight={[
                                5,
                                0.048,
                                0.2,
                                0.005,
                                0.0467,
                                0.005,
                                7.25,
                                0.01,
                                0.002,
                                0.02
                            ]}
                            unit={[
                                "meter",
                                "items",
                                "items",
                                "items",
                                "items",
                                "items",
                                "items",
                                "items",
                                "items",
                                "items",
                            ]}
                            toxicity={[
                                "Medium",
                                "Low",
                                "Low",
                                "Low",
                                "Low",
                                "Medium",
                                "High",
                                "High",
                                "Low",
                                "Medium",
                            ]}
                            ref={this.category[0]}
                        />
                    </div>
                    <div className="Category2">
                        <Category
                            name="Soft Plastic"
                            subnames={[
                                "Grocery bag",
                                "Other bag",
                                "Food wrapper and food label",
                                "Thick Sheet",
                                "Soft cup or lid",
                                "Straw",
                                "Cigarette butt",
                            ]}
                            weight={[
                                0.0014,
                                0.01,
                                0.005,
                                1.7,
                                0.004,
                                0.00042,
                                0.0034
                            ]}
                            unit={[
                                "items",
                                "items",
                                "items",
                                "squared meter",
                                "items",
                                "items",
                                "items",
                            ]}
                            toxicity={[
                                "Low",
                                "Low",
                                "Low",
                                "Medium",
                                "Low",
                                "Low",
                                "High",
                            ]}
                            ref={this.category[1]}
                        />
                    </div>
                    <div className="Category3">
                        <Category
                            name="Other Plastic"
                            subnames={[
                                "Ring, or ribbon", 
                                "Straps, ties, or bands",
                                "Foam food container",
                                "Foam cup, plate, or bowl",
                                "Net",
                                "Fishing line, lure, or rope",
                                "Buoys and floats",
                                "Glow stick",
                                "Fishhook",
                                "Fishing sinker",
                            ]}
                            weight={[
                                0.035,
                                0.005,
                                0.01,
                                0.004,
                                0.54,
                                0.1,
                                1.4,
                                0.043,
                                0.006,
                                0.6
                            ]}
                            unit={[
                                "items",
                                "items",
                                "items",
                                "items",
                                "squared meter",
                                "meters",
                                "items",
                                "items",
                                "items",
                                "items",
                            ]}
                            toxicity={[
                                "Low",
                                "Medium",
                                "Medium",
                                "Medium",
                                "Medium",
                                "Low",
                                "Low",
                                "High",
                                "Medium",
                                "Medium"
                            ]}
                            ref={this.category[2]}
                        />
                    </div>
                </div>
                <div className="Buttons">
                    <div>
                        <div>
                            <button 
                                className="ResultButton"
                                onClick={this.showResult}
                            >
                                Show My Results!
                            </button>
                        </div>
                        <div>
                            <button
                                className="ResetButton"
                                onClick={this.reset}
                            >
                                Reset All
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    
}

export default Calculator