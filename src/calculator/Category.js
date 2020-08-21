import React, { Component, Children } from "react"

class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sumWeight: 0,
            sumToxic: 0
        }
    }

    callback = (states) => {
        var newWeight = this.state.sumWeight + states.sumWeight;
        var newToxic = this.state.sumToxic + states.sumToxic;
        this.setState({ 
            sumWeight: newWeight, 
            sumToxic: newToxic
        });
        this.props.callback({newWeight, newToxic});
    }

    reset = () => {
        this.setState({ 
            sumWeight: 0, 
            sumToxic: 0
        });


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
                        callback={(states) => this.callback(states)}
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
        }); 

        this.props.callback({sumWeight, sumToxic});
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
        }); 

        this.props.callback({sumWeight, sumToxic});
    }

    reset = () => { 
        this.setState({ 
            freq: "year",
            input: 0,
        });
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