import React, { Component, createRef } from "react"

class Category extends Component {
    constructor(props) {
        super(props);
        this.subcategory = []
        for (var i = 0; i < this.props.subnames.length; i++) {
            this.subcategory.push(createRef());
        }
    }

    calculate = () => {
        var sumWeight = 0;
        var sumToxic = 0;
        for (var i = 0; i < this.props.subnames.length; i++) {
            var states = this.subcategory[i].current.calculate();
            sumWeight += states.sumWeight;
            sumToxic += states.sumToxic;
        }
        return {sumWeight, sumToxic};
    }

    reset = () => {        
        for (var i = 0; i < this.props.subnames.length; i++) {
            this.subcategory[i].current.reset();
        }
    }

    render()
    {
        var content = [];
        for (var i = 0; i < this.props.subnames.length; i++) {
            content.push(
                (
                    <SubCategory
                        key={i}
                        subname={this.props.subnames[i]}
                        subweight={this.props.weight[i]}
                        subtoxicity={this.props.toxicity[i]}
                        ref={this.subcategory[i]}
                    />
                )
            )
        }

        return (
            <div className="Category">
                <div>{this.props.name}</div>
                <div className="Content">{content}</div>
            </div>
        )
    }
}

class SubCategory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            freq: "year",
            input: 0,
            sumWeight: 0,
            sumToxic: 0
        }
    }

    handleDropDownChange = (event) => {
        var sumWeight, sumToxic;
        var freq = event.target.value;
        var prev = this.state.freq;
        var input = this.state.input;

        const time_table = {"year" : 1, "month" : 12, "week" : 52, "day" : 365}

        if (input) {
            sumWeight = input * this.props.subweight * (time_table[freq] - time_table[prev])
            sumToxic = input * this.props.subtoxicity * (time_table[freq] - time_table[prev])
        } else {
            sumWeight = 0;
            sumToxic = 0;
        }

        this.setState({ 
            freq: event.target.value, 
            input: this.state.input,
            sumWeight: sumWeight,
            sumToxic: sumToxic
        }); 
    }

    handleInputChange = (event) => {
        var sumWeight, sumToxic;
        var freq = this.state.freq;
        var prev = this.state.input;
        var input = event.target.value;

        const time_table = {"year" : 1, "month" : 12, "week" : 52, "day" : 365}

        if (input) {
            sumWeight = (input - prev) * this.props.subweight * time_table[freq];
            sumToxic = (input - prev) * this.props.subtoxicity * time_table[freq];
        } else {
            sumWeight = (0 - prev) * this.props.subweight * time_table[freq];
            sumToxic = (0 - prev) * this.props.subtoxicity * time_table[freq];
        }

        this.setState({ 
            freq: this.state.freq,
            input: input,
            sumWeight: sumWeight,
            sumToxic: sumToxic
        });         
    }

    reset = () => { 
        this.setState({ 
            freq: "year",
            input: 0,
            sumWeight: 0,
            sumToxic: 0
        });
    }

    calculate = () => {
        return this.state;
    }

    render()
    {        
        return (
            <div>
                <li className="SubCategory">
                    {this.props.subname}
                </li>
                <input 
                    type="text" 
                    onChange={(event) => this.handleInputChange(event)}
                    value={this.state.input}
                />
                <select 
                    name="frequency" 
                    onChange={(event) => this.handleDropDownChange(event)} 
                    placeholder="Select"
                    value={this.state.freq}
                >
                    <option value="year">per year</option>
                    <option value="month">per month</option>
                    <option value="week">per week</option>
                    <option value="day">per day</option>
                </select> 
            </div>
        )
    }
}

export default Category