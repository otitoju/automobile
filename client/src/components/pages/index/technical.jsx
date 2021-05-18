import React, { Component } from 'react'

export default class technical extends Component {
    constructor() {
        super()
        this.state = {
            redirect: false,
            depressed: '',
            gender: '',
            education: '',
            age: '',
            income: '', 
            pay4sex: '', 
            relationship: '', 
            stigma: '',
            result:'',
            name: '',
            email: '',
            id: ''
        }
    }
    

    handleVerify(e) {
        //e.preventDefault()
        fetch('http://localhost:5000/prediction', {
            method: "POST",
            headers: {
                "Accept": 'application/json',
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({
                depressed: this.state.depressed, 
                gender: this.state.gender, 
                education: this.state.education, 
                age: this.state.age, 
                income: this.state.income, 
                pay4sex: this.state.pay4sex, 
                relationship: this.state.relationship, 
                stigma: this.state.stigma 
            })
        })
        .then( res => res.json())
        .then( res => {
            console.log(res)
            this.setState({result: res.message})
           // alert(res.message)
        })
        .catch(err => console.log(err.message))
    }

    handleDepressed(e) { this.setState({ depressed: e.target.value })}
    handleGender(e) { this.setState({ gender: e.target.value })}
    handleEducation(e) { this.setState({ education: e.target.value })}
    handleAge(e) { this.setState({ age: e.target.value })}
    handleIncome(e) { this.setState({ income: e.target.value })}
    handlePay4sex(e) { this.setState({ pay4sex: e.target.value })}
    handleRelationship(e) { this.setState({ relationship: e.target.value })}
    handleStigma(e) { this.setState({ stigma: e.target.value })}

    Modal() {
        var modal = document.getElementById("myModal");

        // Get the button that opens the modal
        var btn = document.getElementById("myBtn");
    
        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];
    
        // When the user clicks on the button, open the modal
        btn.onclick = function() {
          modal.style.display = "block";
        }
    
        // When the user clicks on <span> (x), close the modal
        span.onclick = function() {
          modal.style.display = "none";
        }
    
        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
          if (event.target == modal) {
            modal.style.display = "none";
          }
        }
        this.handleVerify()
    }
    render() {
        return (
            <div>
                <div class="container my-5">
        
                    <div class="row justify-content-center">
                    <div class="col-lg-10 col-md-10">
                    <div class="card">
                    <div class="row justify-content-center">
                    <p class="h4 mb-4"><strong>Below are the possible parts you should check for battery terminal fault: </strong></p>
                    </div>
                    <hr class="hr-class"/>
                        <div class="card-body">
                            <label>Battery discharged or faulty?</label><br/> <br/>
                            {/* <select class="form-control" id="sel1" value={this.state.depressed} onChange={this.handleDepressed.bind(this)}>
                                <option>--Select your option--</option>
                                <option >Yes</option>
                                <option >No</option>
                            </select> */}

                            <label>Broken, loose or disconnected?</label><br/> <br/>
                            {/* <select class="form-control" id="sel1" value={this.state.education} onChange={this.handleEducation.bind(this)}>
                                <option>--Select your option--</option>
                                <option >Ond</option>
                                <option >Bsc</option>
                                <option >Msc</option>
                                <option >PhD</option>
                                <option >None</option>
                            </select> */}
                            
                            <label>defective starter solenoid or switch?</label><br/> <br/>
                            {/* <select class="form-control" id="sel1" value={this.state.age} onChange={this.handleAge.bind(this)}>
                                <option>--Select your option--</option>
                                <option >Teen</option>
                                <option >Adult</option>
                                <option >Young</option>
                            </select> */}
                            
                            <label>Defective starter motor?</label><br/> <br/>
                            {/* <select class="form-control" id="sel1" value={this.state.income} onChange={this.handleIncome.bind(this)}>
                                <option>--Select your option--</option>
                                <option >Low</option>
                                <option >Medium</option>
                                <option >High</option>
                            </select> */}

                            <label>Gear teeth loose or broken?</label><br/> <br/>
                            {/* <select class="form-control" id="sel1" value={this.state.pay4sex} onChange={this.handlePay4sex.bind(this)}>
                                <option>--Select your option--</option>
                                <option >Yes</option>
                                <option >No</option>
                            </select> */}

                            <label>Engine earth strap broken or disconnected?</label><br/> <br/>
                            {/* <select class="form-control" id="sel1" value={this.state.relationship} onChange={this.handleRelationship.bind(this)}>
                                <option>--Select your option--</option>
                                <option >Yes</option>
                                <option >No</option>
                            </select> */}

                        <hr/>
                        <div class="text-center">
                        <button id="myBtn" class="btn btn-danger btn-block my-4" onClick={this.Modal.bind(this)}>Check for posssible solution</button>

                        <div id="myModal" class="modal">
                            <div class="modal-content">
                                <span class="close">&times;</span>
                        <h1>Possible solution is for Battery terminal connections loose is <br/>
                        Either you tighten your battery terminal connections or<br/>
                        Connect broken strap and start car.
                        </h1>
                         
                            </div>
                        </div>
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
