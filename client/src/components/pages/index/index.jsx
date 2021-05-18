import React, { Component } from 'react'

export default class index extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: '',
            name: ''
        }
    }

    _Submit(e){
        e.preventDefault()
        if(this.state.email == "" || this.state.password == "" || this.state.name == ""){
            alert("Please ensure to fill all fields")
        }
        else {
            window.localStorage.setItem("name", this.state.name)
            window.localStorage.setItem("email", this.state.email)
            window.localStorage.setItem("password", this.state.password)
            this.props.history.push("/login")
        }
    }

    setName(e) { this.setState({name: e.target.value})}
    setEmail(e) { this.setState({email: e.target.value})}
    setPassword(e) { this.setState({password: e.target.value})}

    render() {
        return (
                <div class="site-wrap">

                <div class="site-mobile-menu site-navbar-target">
                <div class="site-mobile-menu-header">
                    <div class="site-mobile-menu-close mt-3">
                    <span class="icon-close2 js-menu-toggle"></span>
                    </div>
                </div>
                <div class="site-mobile-menu-body"></div>
                </div>

                <header class="site-navbar py-4 js-sticky-header site-navbar-target" role="banner">
                
                <div class="container-fluid">
                    <div class="d-flex align-items-center">
                    <div class="site-logo mr-auto w-25"><a href="index.html">AutoMobile</a></div>

                    <div class="mx-auto text-center">
                        <nav class="site-navigation position-relative text-right" role="navigation">
                        <ul class="site-menu main-menu js-clone-nav mx-auto d-none d-lg-block  m-0 p-0">
                            <li><a href="#home-section" class="nav-link">Home</a></li>
                            <li><a href="#courses-section" class="nav-link">Customers</a></li>
                            <li><a href="#programs-section" class="nav-link">Programs</a></li>
                            <li><a href="#teachers-section" class="nav-link">Customers</a></li>
                        </ul>
                        </nav>
                    </div>

                    <div class="ml-auto w-25">
                        <nav class="site-navigation position-relative text-right" role="navigation">
                        <ul class="site-menu main-menu site-menu-dark js-clone-nav mr-auto d-none d-lg-block m-0 p-0">
                            <li class="cta"><a href="/login" class="nav-link"><span>Sign In</span></a></li>
                        </ul>
                        </nav>
                        <a href="#" class="d-inline-block d-lg-none site-menu-toggle js-menu-toggle text-black float-right"><span class="icon-menu h3"></span></a>
                    </div>
                    </div>
                </div>
                
                </header>

                <div class="intro-section" id="home-section">
                
                <div class="slide-1" style={{backgroundImage:`url('images/car10.jpg')`}}data-stellar-background-ratio="0.5">
                    <div class="container">
                    <div class="row align-items-center">
                        <div class="col-12">
                        <div class="row align-items-center">
                            <div class="col-lg-6 mb-4">
                            <h1  data-aos="fade-up" data-aos-delay="100">Repair From The Best</h1>
                            <p class="mb-4"  data-aos="fade-up" data-aos-delay="200">Our certified technicians have the knowledge and diagnostic tools to troubleshoot and solve all types of electrical malfunctions.</p>
                            <p data-aos="fade-up" data-aos-delay="300"><a href="/products" class="btn btn-primary py-3 px-5 btn-pill">Get Started</a></p>

                            </div>

                            <div class="col-lg-5 ml-auto" data-aos="fade-up" data-aos-delay="500">
                            <form action="" method="post" class="form-box">
                                <h3 class="h4 text-black mb-4">Sign Up</h3>
                                <div class="form-group">
                                <input type="text" class="form-control" placeholder="Fullname" value={this.state.name} onChange={this.setName.bind(this)}/>
                                </div>
                                <div class="form-group">
                                <input type="email" class="form-control" placeholder="Email Addresss" value={this.state.email} onChange={this.setEmail.bind(this)}/>
                                </div>
                                <div class="form-group">
                                <input type="password" class="form-control" placeholder="Password" value={this.state.password} onChange={this.setPassword.bind(this)}/>
                                </div>
                                <div class="form-group mb-4">
                                <input type="password" class="form-control" placeholder="Re-type Password"/>
                                </div>
                                <div class="form-group">
                                <input type="submit" class="btn btn-primary btn-pill" value="Sign up" onClick={this._Submit.bind(this)}/>
                                </div>
                            </form>

                            </div>
                        </div>
                        </div>
                        
                    </div>
                    </div>
                </div>
                </div>


                <div class="site-section courses-title" id="courses-section">
                <div class="container">
                    <div class="row mb-5 justify-content-center">
                    <div class="col-lg-7 text-center" data-aos="fade-up" data-aos-delay="">
                        <h2 class="section-title">Our Services</h2>
                    </div>
                    </div>
                </div>
                </div>
                <div class="site-section courses-entry-wrap"  data-aos="fade-up" data-aos-delay="100">
                <div class="container">
                    <div class="row">

                    <div class="owl-carousel col-12 nonloop-block-14">

                        <div class="course bg-white h-100 align-self-stretch">
                        <figure class="m-0">
                            <a href="course-single.html"><img src="images/car1.jpeg" alt="Image" class="img-fluid"/></a>
                        </figure>
                        <div class="course-inner-text py-4 px-4">
                            <span class="course-price">New</span>
                            <div class="meta"><span class="icon-clock-o"></span>AutoMobile</div>
                            <h3><a href="#">Vehicle Maintenance & Inspections</a></h3>
                            <p>Our technicians are trained to diagnose any issues and complete the necessary adjustments and repairs that will return your vehicle to its peak performance. </p>
                        </div>
                        <div class="d-flex border-top stats">
                            <div class="py-3 px-4"><span class="icon-users"></span> 200 customers</div>
                            <div class="py-3 px-4 w-25 ml-auto border-left"><span class="icon-chat"></span> 2</div>
                        </div>
                        </div>

                        <div class="course bg-white h-100 align-self-stretch">
                        <figure class="m-0">
                            <a href="course-single.html"><img src="images/car2.jpeg" alt="Image" class="img-fluid"/></a>
                        </figure>
                        <div class="course-inner-text py-4 px-4">
                            <span class="course-price">New</span>
                            <div class="meta"><span class="icon-clock-o"></span>AutoMobile</div>
                            <h3><a href="#">Engine and Transmission Repair</a></h3>
                            <p>Minit-Tune & Brake Auto centres have the equipment and technicians to accurately diagnose and repair all engine and transmission related problems</p>
                        </div>
                        <div class="d-flex border-top stats">
                            <div class="py-3 px-4"><span class="icon-users"></span> 200 customers</div>
                            <div class="py-3 px-4 w-25 ml-auto border-left"><span class="icon-chat"></span> 2</div>
                        </div>
                        </div>

                        <div class="course bg-white h-100 align-self-stretch">
                        <figure class="m-0">
                            <a href="course-single.html"><img src="images/car6.jpg" alt="Image" class="img-fluid"/></a>
                        </figure>
                        <div class="course-inner-text py-4 px-4">
                            <span class="course-price">New</span>
                            <div class="meta"><span class="icon-clock-o"></span>AutoMobile</div>
                            <h3><a href="#">Steering, Suspension & Wheel Alignment</a></h3>
                            <p>Our technicians are trained diagnose and repair steering, suspension and wheel alignment related issues.</p>
                        </div>
                        <div class="d-flex border-top stats">
                            <div class="py-3 px-4"><span class="icon-users"></span> 200 customers</div>
                            <div class="py-3 px-4 w-25 ml-auto border-left"><span class="icon-chat"></span> 2</div>
                        </div>
                        </div>



                        <div class="course bg-white h-100 align-self-stretch">
                        <figure class="m-0">
                            <a href="course-single.html"><img src="images/car7.jpg" alt="Image" class="img-fluid"/></a>
                        </figure>
                        <div class="course-inner-text py-4 px-4">
                            <span class="course-price">New</span>
                            <div class="meta"><span class="icon-clock-o"></span>4 Lessons / 12 week</div>
                            <h3><a href="#">Tires/Wheels Sales and Service</a></h3>
                            <p>Our AutoSystem locations carry a full range of all season, winter and summer tires. come see us and we will provide you with the best tire fit for your Vehicle. </p>
                        </div>
                        <div class="d-flex border-top stats">
                            <div class="py-3 px-4"><span class="icon-users"></span> 200 customers</div>
                            <div class="py-3 px-4 w-25 ml-auto border-left"><span class="icon-chat"></span> 2</div>
                        </div>
                        </div>

                        <div class="course bg-white h-100 align-self-stretch">
                        <figure class="m-0">
                            <a href="course-single.html"><img src="images/car4.jpg" alt="Image" class="img-fluid"/></a>
                        </figure>
                        <div class="course-inner-text py-4 px-4">
                            <span class="course-price">New</span>
                            <div class="meta"><span class="icon-clock-o"></span>AutoMobile</div>
                            <h3><a href="#">Exhaust System Repairs</a></h3>
                            <p>Bring your vehicle into our system and we will repair your exhaust system with quality original equioment manufacturer parts</p>
                        </div>
                        <div class="d-flex border-top stats">
                            <div class="py-3 px-4"><span class="icon-users"></span> 200 customers</div>
                            <div class="py-3 px-4 w-25 ml-auto border-left"><span class="icon-chat"></span> 2</div>
                        </div>
                        </div>

                        <div class="course bg-white h-100 align-self-stretch">
                        <figure class="m-0">
                            <a href="course-single.html"><img src="images/car6.jpg" alt="Image" class="img-fluid"/></a>
                        </figure>
                        <div class="course-inner-text py-4 px-4">
                            <span class="course-price">New</span>
                            <div class="meta"><span class="icon-clock-o"></span>AutoMobile</div>
                            <h3><a href="#">Cooling System Repairs</a></h3>
                            <p>Our technicians are trained to inspect engine antifreeze/coolant quality and to diagnose any leak and associated potential problems </p>
                        </div>
                        <div class="d-flex border-top stats">
                            <div class="py-3 px-4"><span class="icon-users"></span> 200 customers</div>
                            <div class="py-3 px-4 w-25 ml-auto border-left"><span class="icon-chat"></span> 2</div>
                        </div>
                        </div>

                    </div>

                    

                    </div>
                    <div class="row justify-content-center">
                    <div class="col-7 text-center">
                        <button class="customPrevBtn btn btn-primary m-1">Prev</button>
                        <button class="customNextBtn btn btn-primary m-1">Next</button>
                    </div>
                    </div>
                </div>
                </div>


                <div class="site-section" id="programs-section">
                <div class="container">
                    <div class="row mb-5 justify-content-center">
                    <div class="col-lg-7 text-center"  data-aos="fade-up" data-aos-delay="">
                        <h2 class="section-title">Our Programs</h2>
                        <p>Our certified technicians have the knowledge and diagnostic tools to troubleshoot and solve all types of electrical malfunctions</p>
                    </div>
                    </div>
                    <div class="row mb-5 align-items-center">
                    <div class="col-lg-7 mb-5" data-aos="fade-up" data-aos-delay="100">
                        <img src="images/undraw_youtube_tutorial.svg" alt="Image" class="img-fluid"/>
                    </div>
                    <div class="col-lg-4 ml-auto" data-aos="fade-up" data-aos-delay="200">
                        <h2 class="text-black mb-4">Heating and AC Repairs</h2>
                        <p class="mb-4">Bring your vehicle in and our heating and air conditioning technicians will correctly diagnose your problems and provide a cost effective solution.</p>

                        <div class="d-flex align-items-center custom-icon-wrap mb-3">
                        <span class="custom-icon-inner mr-3"><span class="icon icon-graduation-cap"></span></span>
                        <div><h3 class="m-0">200 customers</h3></div>
                        </div>

                        <div class="d-flex align-items-center custom-icon-wrap">
                        <span class="custom-icon-inner mr-3"><span class="icon icon-university"></span></span>
                        <div><h3 class="m-0">Worldwide</h3></div>
                        </div>

                    </div>
                    </div>

                    <div class="row mb-5 align-items-center">
                    <div class="col-lg-7 mb-5 order-1 order-lg-2" data-aos="fade-up" data-aos-delay="100">
                        <img src="images/undraw_teaching.svg" alt="Image" class="img-fluid"/>
                    </div>
                    <div class="col-lg-4 mr-auto order-2 order-lg-1" data-aos="fade-up" data-aos-delay="200">
                        <h2 class="text-black mb-4">Batteries and Charging Systems</h2>
                        <p class="mb-4">Bring your vehicle into our system where our technicians will recommend the right repair solution, and efficiently complete the repair</p>

                        <div class="d-flex align-items-center custom-icon-wrap mb-3">
                        <span class="custom-icon-inner mr-3"><span class="icon icon-graduation-cap"></span></span>
                        <div><h3 class="m-0">200 customers</h3></div>
                        </div>

                        <div class="d-flex align-items-center custom-icon-wrap">
                        <span class="custom-icon-inner mr-3"><span class="icon icon-university"></span></span>
                        <div><h3 class="m-0">Worldwide</h3></div>
                        </div>

                    </div>
                    </div>

                    <div class="row mb-5 align-items-center">
                    <div class="col-lg-7 mb-5" data-aos="fade-up" data-aos-delay="100">
                        <img src="images/undraw_teacher.svg" alt="Image" class="img-fluid"/>
                    </div>
                    <div class="col-lg-4 ml-auto" data-aos="fade-up" data-aos-delay="200">
                        <h2 class="text-black mb-4">Tires/Wheels Sales and Service</h2>
                        <p class="mb-4">Our certified technicians have the knowledge and diagnostic tools to troubleshoot and solve all types of electrical malfunctions</p>

                        <div class="d-flex align-items-center custom-icon-wrap mb-3">
                        <span class="custom-icon-inner mr-3"><span class="icon icon-graduation-cap"></span></span>
                        <div><h3 class="m-0">200 customers</h3></div>
                        </div>

                        <div class="d-flex align-items-center custom-icon-wrap">
                        <span class="custom-icon-inner mr-3"><span class="icon icon-university"></span></span>
                        <div><h3 class="m-0">Worldwide</h3></div>
                        </div>

                    </div>
                    </div>

                </div>
                </div>

                <div class="site-section" id="teachers-section">
                <div class="container">

                    <div class="row mb-5 justify-content-center">
                    <div class="col-lg-7 mb-5 text-center"  data-aos="fade-up" data-aos-delay="">
                        <h2 class="section-title">Our Customers</h2>
                        <p class="mb-5">Our experienced team would be happy to help. <br/>
                            contact us today for an appointment and let us get you back on the road. <br/>
                            Below are some of our customers <br/>
                        </p>
                    </div>
                    </div>

                    <div class="row">

                    <div class="col-md-6 col-lg-4 mb-4" data-aos="fade-up" data-aos-delay="100">
                        <div class="teacher text-center">
                        <img src="images/person_1.jpg" alt="Image" class="img-fluid w-50 rounded-circle mx-auto mb-4"/>
                        <div class="py-2">
                            <h3 class="text-black">Benjamin Stone</h3>
                            <p class="position">Contractor</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro eius suscipit delectus enim iusto tempora, adipisci at provident.</p>
                        </div>
                        </div>
                    </div>

                    <div class="col-md-6 col-lg-4 mb-4" data-aos="fade-up" data-aos-delay="200">
                        <div class="teacher text-center">
                        <img src="images/person_2.jpg" alt="Image" class="img-fluid w-50 rounded-circle mx-auto mb-4"/>
                        <div class="py-2">
                            <h3 class="text-black">Katleen Stone</h3>
                            <p class="position">Medical Doctor</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro eius suscipit delectus enim iusto tempora, adipisci at provident.</p>
                        </div>
                        </div>
                    </div>

                    <div class="col-md-6 col-lg-4 mb-4" data-aos="fade-up" data-aos-delay="300">
                        <div class="teacher text-center">
                        <img src="images/person_3.jpg" alt="Image" class="img-fluid w-50 rounded-circle mx-auto mb-4"/>
                        <div class="py-2">
                            <h3 class="text-black">Sadie White</h3>
                            <p class="position">Lawyer</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro eius suscipit delectus enim iusto tempora, adipisci at provident.</p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>



                <div class="site-section pb-0">


                
                <footer class="footer-section bg-white">
                <div class="container">
                    <div class="row">
                    <div class="col-md-4">
                        <h3>About Us</h3>
                        <p>Our experienced team would be happy to help. <br/>
                            contact us today for an appointment and let us get you back on the road. <br/>
                            Below are some of our customers <br/></p>
                    </div>

                    <div class="col-md-3 ml-auto">
                        <h3>Links</h3>
                        <ul class="list-unstyled footer-links">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Programs</a></li>
                        <li><a href="#">Customers</a></li>
                        </ul>
                    </div>

                    <div class="col-md-4">
                        <h3>Subscribe</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt incidunt iure iusto architecto? Numquam, natus?</p>
                        <form action="#" class="footer-subscribe">
                        <div class="d-flex mb-5">
                            <input type="text" class="form-control rounded-0" placeholder="Email"/>
                            <input type="submit" class="btn btn-primary rounded-0" value="Subscribe"/>
                        </div>
                        </form>
                    </div>

                    </div>

                    <div class="row pt-5 mt-5 text-center">
                    <div class="col-md-12">
                    <div class="border-top pt-5">
                        <p>
                    
                    Copyright &copy; All rights reserved | This template is made with <i class="icon-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank" >Colorlib</a>
                    
                </p>
                        </div>
                    </div>
                    
                    </div>
                </div>
                </footer>



                </div>
            </div>
        )
    }
}
