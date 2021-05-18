import React, { Component } from 'react'
import Header from '../../layouts/Header';

export default class createPost extends Component {
    render() {
        return (
            <div>
                <Header />
                <section class="content">
                <div class="row">
                    <div class="col-md-3">
                    <a href="compose.html" class="btn btn-primary btn-block mb-3">Compose</a>
            
                    <div class="card">
                        <div class="card-header">
                        <h3 class="card-title">Folders</h3>
            
                        <div class="card-tools">
                            <button type="button" class="btn btn-tool" data-card-widget="collapse"><i class="fas fa-minus"></i>
                            </button>
                        </div>
                        </div>
                        <div class="card-body p-0">
                        <ul class="nav nav-pills flex-column">
                            <li class="nav-item active">
                            <a href="#" class="nav-link">
                                <i class="fas fa-inbox"></i> Inbox
                                <span class="badge bg-primary float-right">12</span>
                            </a>
                            </li>
                            <li class="nav-item">
                            <a href="#" class="nav-link">
                                <i class="far fa-envelope"></i> Sent
                            </a>
                            </li>
                            <li class="nav-item">
                                <a href="/createpost" class="nav-link">
                                    Create post
                                </a>
                            </li>
                        </ul>
                        </div>
                    </div>
                    
                    </div>
                    <div class="col-md-9">
                        <div class="card card-primary card-outline">
                            <div class="card-header">
                                <h3 class="card-title">Create Post</h3>
                            </div>
                            
                            <div class="container my-5">
                                <div class="row justify-content-center">
                                    <div class="col-md-6 col-lg-12 col-xs-6">
                                    <div class="card  text-center card-form">
                                        <div class="header pt-3 grey lighten-2">
                                            <h3 class="text">Create Post</h3>
                                        </div>
                                        <div class="card-body">
                                        
                                        <form>
                                            <div class="md-form text-left">
                                                <label > Name of Product</label>
                                                <input type="text" class="form-control"/>
                                            </div>
                                            <div class="md-form text-left">
                                                <label >Price</label>
                                                <input type="text"  class="form-control"/>
                                            </div>
                                            <div class="md-form text-left  mb-4">
                                                <label >Select Image</label>
                                                <input type="file"  class="form-control"/>
                                            </div>
                                            <div class="text-center mb-4">
                                                        <button type="button" class="btn btn-primary btn-pill">Create Post <i class="fa fa-sign-in ml-1"></i></button>
                                            </div>
                                            
                                        </form>
                                        </div>
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
