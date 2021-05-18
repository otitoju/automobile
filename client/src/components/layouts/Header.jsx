import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div>
                <section class="content-header">
                    <div class="container-fluid">
                    <div class="row mb-2">
                        <div class="col-sm-6">
                        <h1>AutoMobile System</h1>
                        </div>
                        <div class="col-sm-6">
                        <ol class="breadcrumb float-sm-right">
                            <li class="breadcrumb-item"><a href="#">Home</a></li>
                            <li class="breadcrumb-item active">Services</li>
                        </ol>
                        </div>
                    </div>
                    </div>
                </section>
            </div>
        )
    }
}
