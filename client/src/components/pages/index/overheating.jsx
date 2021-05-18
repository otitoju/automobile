import React, { Component } from 'react'

export default class overheating extends Component {
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
    async componentDidMount() {
        // SULE COPY THIS
        const token = await window.localStorage.getItem('token')
        const name = await window.localStorage.getItem('name')
        const email = await window.localStorage.getItem('email')
        const id = await window.localStorage.getItem('id')
        this.setState({name: name, email: email, id: id })
        if(!token) {
            this.setState({ redirect: true })
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
        <p class="h4 mb-4"><strong>Below are the possible solutions for overheating: </strong></p>
        </div>
        <hr class="hr-class"/>
            <div class="card-body">
                <label>Check the coolant level and radiator cap</label><br/> <br/>
                

                <label>Make sure there is no air in the system</label><br/> <br/>
                
                
                <label>Verify that the radiator fans are spinning</label><br/> <br/>
                
                
                <label>Test the fan motor</label><br/> <br/>
                

                <label>Check the serpentine belt</label><br/> <br/>
                
                <label>Check for leaks</label><br/> <br/>
                
                <label>Check the thermostat</label><br/> <br/>

            
            </div>
        </div>
        </div>
        </div>
    </div>
            </div>
        )
    }
}
