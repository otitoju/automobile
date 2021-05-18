import React, { Component } from 'react'

export default class faulty extends Component {
    constructor() {
        super()
        this.state = {
            faulty: ""
        }
    }
    async componentDidMount() {
        await window.localStorage.clear()
    }
    async _Submit(e) {
        
        if(this.state.faulty === "overheating") {
            this.props.history.push("/overheating")
        }
        else if(this.state.faulty === "failedstart"){
            this.props.history.push("/failedstart")
        }
        else if(this.state.faulty === "battery") {
            this.props.history.push("/technical")
        }
        else {
            alert("Not specified")
        }
            
    
    }
    handleFaulty(e) { this.setState({faulty: e.target.value})}

    render() {
        return (
            <div>
                <div class="container my-5">
        
        <div class="row justify-content-center">
        <div class="col-lg-10 col-md-10">
        <div class="card">
        <div class="row justify-content-center">
        <p class="h4 mb-4"><strong>Below are the available car faulty we have: </strong></p>
        </div>
        <hr class="hr-class"/>
            <div class="card-body">
                <label>Select from the available car problems</label>
                <select class="form-control" id="sel1" value={this.state.faulty} onChange={this.handleFaulty.bind(this)}>
                    <option>--Select your option--</option>
                    <option value="overheating">Overheating</option>
                    <option value="failedstart">Failed start</option>
                    <option value="battery">Battery terminal faulty</option>
                </select>

                

            <hr/>
            <div class="text-center">
            <button id="myBtn" class="btn btn-danger btn-block my-4" onClick={this._Submit.bind(this)} >Proceed</button>
            </div>
            </div>
        </div>
        </div>
        </div>
    </div>
            </div>
        )
    }
}
