import React, { Component } from 'react'

export default class product extends Component {
    render() {
        return (
            <div>
                
                <section class="content-header">
                    <div class="container-fluid">
                    <div class="row mb-2">
                        <div class="col-sm-6">
                        <h1>FarmerConsumer</h1>
                        </div>
                        <div class="col-sm-6">
                        <ol class="breadcrumb float-sm-right">
                            <li class="breadcrumb-item"><a href="#">Home</a></li>
                            <li class="breadcrumb-item active">E-commerce</li>
                        </ol>
                        </div>
                    </div>
                    </div>
                </section>
  
    
                <section class="content">
            
                    
                    <div class="card card-solid">
                    <div class="card-body">
                        <div class="row">
                        <div class="col-12 col-sm-6">
                            <h3 class="d-inline-block d-sm-none">LOWA Men’s Renegade GTX Mid Hiking Boots Review</h3>
                            <div class="col-12">
                            <img src="images/pepper.jpg" class="product-image" alt="Product Image"/>
                            </div>
                        
                        </div>
                        <div class="col-12 col-sm-6">
                            <h3 class="my-3">LOWA Men’s Renegade GTX Mid Hiking Boots Review</h3>
                            <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terr.</p>
            
                            <hr/>
                            <h4>Available Colors</h4>
                            <div class="btn-group btn-group-toggle" data-toggle="buttons">
                            <label class="btn btn-default text-center active">
                                <input type="radio" name="color_option" id="color_option1" autocomplete="off" checked=""/>
                                Green
                                <br/>
                                <i class="fas fa-circle fa-2x text-green"></i>
                            </label>
                            <label class="btn btn-default text-center">
                                <input type="radio" name="color_option" id="color_option2" autocomplete="off"/>
                                Blue
                                <br/>
                                <i class="fas fa-circle fa-2x text-blue"></i>
                            </label>
                            <label class="btn btn-default text-center">
                                <input type="radio" name="color_option" id="color_option3" autocomplete="off"/>
                                Purple
                                <br/>
                                <i class="fas fa-circle fa-2x text-purple"></i>
                            </label>
                            <label class="btn btn-default text-center">
                                <input type="radio" name="color_option" id="color_option4" autocomplete="off"/>
                                Red
                                <br/>
                                <i class="fas fa-circle fa-2x text-red"></i>
                            </label>
                            <label class="btn btn-default text-center">
                                <input type="radio" name="color_option" id="color_option5" autocomplete="off"/>
                                Orange
                                <br/>
                                <i class="fas fa-circle fa-2x text-orange"></i>
                            </label>
                            </div>
            
                            <h4 class="mt-3">Size <small>Please select one</small></h4>
                            <div class="btn-group btn-group-toggle" data-toggle="buttons">
                            <label class="btn btn-default text-center">
                                <input type="radio" name="color_option" id="color_option1" autocomplete="off"/>
                                <span class="text-xl">S</span>
                                <br/>
                                Small
                            </label>
                            <label class="btn btn-default text-center">
                                <input type="radio" name="color_option" id="color_option1" autocomplete="off"/>
                                <span class="text-xl">M</span>
                                <br/>
                                Medium
                            </label>
                            <label class="btn btn-default text-center">
                                <input type="radio" name="color_option" id="color_option1" autocomplete="off"/>
                                <span class="text-xl">L</span>
                                <br/>
                                Large
                            </label>
                            <label class="btn btn-default text-center">
                                <input type="radio" name="color_option" id="color_option1" autocomplete="off"/>
                                <span class="text-xl">XL</span>
                                <br/>
                                Xtra-Large
                            </label>
                            </div>
            
                            <div class="bg-gray py-2 px-3 mt-4">
                            <h2 class="mb-0">
                                $80.00
                            </h2>
                            <h4 class="mt-0">
                                <small>Ex Tax: $80.00 </small>
                            </h4>
                            </div>
            
                            <div class="mt-4">
                            <div class="btn btn-primary btn-lg btn-flat">
                                <i class="fas fa-cart-plus fa-lg mr-2"></i> 
                                Add to Cart
                            </div>
            
                            <div class="btn btn-default btn-lg btn-flat">
                                <i class="fas fa-heart fa-lg mr-2"></i> 
                                Add to Wishlist
                            </div>
                            </div>
            
                            <div class="mt-4 product-share">
                                <div class="card card-warning">
                                    <div class="card-header">
                                    <h3 class="card-title">General Elements</h3>
                                    </div>
                                    
                                    <div class="card-body">
                                    <form role="form">
                                        <div class="row">
                                        <div class="col-sm-6">
                                            
                                            <div class="form-group">
                                            <label>Firstname</label>
                                            <input type="text" class="form-control" />
                                            </div>
                                        </div>
                                        <div class="col-sm-6">
                                            <div class="form-group">
                                            <label>Lastname</label>
                                            <input type="text" class="form-control" />
                                            </div>
                                        </div>
                                        </div>
                                        <div class="row">
                                        <div class="col-sm-6">
                                            
                                            <div class="form-group">
                                            <label>Email</label>
                                                <input type="text" class="form-control" />
                                            </div>
                                        </div>
                                        <div class="col-sm-6">
                                            <div class="form-group">
                                                <label>Phone (Optional)</label>
                                                <input type="text" class="form-control" />
                                            </div>
                                        </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-sm-12">
                                            
                                            <div class="form-group">
                                                <label>Message</label>
                                                <textarea class="form-control" rows="3" placeholder="Enter ..."></textarea>
                                            </div>
                                        </div>
                                        </div>
                                        <div class="btn btn-primary btn-lg btn-flat"> 
                                            Send
                                        </div>
                                    </form>
                                    </div>
                                
                                </div>
                            </div>
            
                        </div>
                        </div>
                    
                    </div>
                    
                    </div>
            
                </section>
            </div>
        )
    }
}
