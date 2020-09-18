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
        for (var i = 0; i < this.props.subnames.length; i++) {
            var states = this.subcategory[i].current.calculate();
            sumWeight += states.sumWeight;
        }
        return sumWeight;
    }

    reset = () => {        
        for (var i = 0; i < this.props.subnames.length; i++) {
            this.subcategory[i].current.reset();
        }
    }

    display = () => {
        for (var i = 0; i < this.props.subnames.length; i++) {
            this.subcategory[i].current.display();
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
                        subunit={this.props.unit[i]}
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
            toxic: "NoneToxic"
        }
    }

    handleDropDownChange = (event) => {
        var sumWeight;
        var freq = event.target.value;
        var input = this.state.input;

        const time_table = {"year" : 1, "month" : 12, "week" : 52, "day" : 365}

        if (input) {
            sumWeight = input * this.props.subweight * time_table[freq]
        } else {
            sumWeight = 0;
        }

        this.setState({ 
            freq: event.target.value, 
            input: this.state.input,
            sumWeight: sumWeight,
        }); 
    }

    handleInputChange = (event) => {
        var sumWeight;
        var freq = this.state.freq;
        var input = event.target.value;

        const time_table = {"year" : 1, "month" : 12, "week" : 52, "day" : 365}

        if (input) {
            sumWeight = input * this.props.subweight * time_table[freq]; 
        }
        this.setState({ 
            freq: this.state.freq,
            input: input,
            sumWeight: sumWeight,
        }); 
    }

    reset = () => { 
        this.setState({ 
            freq: "year",
            input: 0,
            sumWeight: 0,
        });
    }

    calculate = () => {
        return this.state;
    }

    display = () => {
        if (this.props.subtoxicity === "Low") {
            this.setState({toxic: "LowToxic"})
        } else if (this.props.subtoxicity === "Medium") {
            this.setState({toxic: "MediumToxic"})
        } else if (this.props.subtoxicity === "High") {
            this.setState({toxic: "HighToxic"})
        }
    }

    render()
    {   
        return (
            <div className={this.state.toxic}>
                <div className="SubCategory">
                    {this.props.subname}
                </div>
                <div className="SubContent">
                    <input 
                        type="text" 
                        onChange={(event) => this.handleInputChange(event)}
                        value={this.state.input}
                    />
                    <div>  {this.props.subunit}  </div>
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
            </div>
        )
    }
}

export default Category