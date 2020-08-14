import React, { Component } from "react"

class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sumWeight: 0,
            sumToxic: 0
        }
    }

    callback = (states) => {
        var newWeight = this.state.sumWeight + states.SumWeight
        var newToxic = this.state.sumToxic + states.sumToxic
        this.setState({ sumWeight: newWeight, sumToxic:newToxic })
        this.props.callback(this.state);
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
                        callback={this.callback}
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
        }
    }

    handleDropDownChange = (event) => {
        this.setState({ freq: event.target.value });
    }

    handleInputChange = (event) => {
        if (event.target.value) {
            this.setState({ input: event.target.value });
        } else {
            console.log("The input should not leave blank!");
            this.setState({ input: 0 });
        }
    }

    sum = () => {
        var sumWeight, sumToxic;
        if (this.state.freq === "year") {
            sumWeight = this.state.input * this.props.subweight
            sumToxic = this.state.input * this.props.subtoxicity
        }
        if (this.state.freq === "month") {
            sumWeight = this.state.input * this.props.subweight * 12
            sumToxic = this.state.input * this.props.subtoxicity * 12
        }
        if (this.state.freq === "week") {
            sumWeight = this.state.input * this.props.subweight * 52
            sumToxic = this.state.input * this.props.subtoxicity * 52
        }
        if (this.state.freq === "day") {
            sumWeight = this.state.input * this.props.subweight * 365
            sumToxic = this.state.input * this.props.subtoxicity * 365
        }

        console.log({sumWeight,sumToxic})

        this.props.callback({sumWeight : sumWeight, sumToxic : sumToxic})
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
                    onChange={this.handleInputChange}
                    defaultValue="0"
                    ref={(value) => this.state.input = value}
                />
                <select 
                    name="frequency" 
                    onChange={this.handleDropDownChange} 
                    placeholder="Select frequency"
                    defaultValue={this.state.freq}
                    ref={(value) => this.state.freq = value}
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