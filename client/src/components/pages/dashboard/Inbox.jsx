import React, { Component } from 'react'

export default class Inbox extends Component {
    render() {
        return (
            <div>
                <section class="content-header">
                    <div class="container-fluid">
                        <div class="row mb-2">
                        <div class="col-sm-6">
                            <h1>Inbox</h1>
                        </div>
                        <div class="col-sm-6">
                            <ol class="breadcrumb float-sm-right">
                            <li class="breadcrumb-item"><a href="#">Home</a></li>
                            <li class="breadcrumb-item active">Inbox</li>
                            </ol>
                        </div>
                        </div>
                    </div>
                </section>
            
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
                        <h3 class="card-title">Inbox</h3>
            
                        <div class="card-tools">
                            <div class="input-group input-group-sm">
                            <input type="text" class="form-control" placeholder="Search Mail"/>
                            <div class="input-group-append">
                                <div class="btn btn-primary">
                                <i class="fas fa-search"></i>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>

                        <div class="card-body p-0">
                        <div class="mailbox-controls">
                            <button type="button" class="btn btn-default btn-sm checkbox-toggle"><i class="far fa-square"></i>
                            </button>
                            <div class="btn-group">
                            <button type="button" class="btn btn-default btn-sm"><i class="far fa-trash-alt"></i></button>
                            <button type="button" class="btn btn-default btn-sm"><i class="fas fa-reply"></i></button>
                            <button type="button" class="btn btn-default btn-sm"><i class="fas fa-share"></i></button>
                            </div>

                            <button type="button" class="btn btn-default btn-sm"><i class="fas fa-sync-alt"></i></button>
                            <div class="float-right">
                            1-50/200
                            <div class="btn-group">
                                <button type="button" class="btn btn-default btn-sm"><i class="fas fa-chevron-left"></i></button>
                                <button type="button" class="btn btn-default btn-sm"><i class="fas fa-chevron-right"></i></button>
                            </div>
                            </div>
                        </div>
                        <div class="table-responsive mailbox-messages">
                            <table class="table table-hover table-striped">
                            <tbody>
                            <tr>
                                <td>
                                <div class="icheck-primary">
                                    <input type="checkbox" value="" id="check1"/>
                                    <label for="check1"></label>
                                </div>
                                </td>
                                <td class="mailbox-star"><a href="#"><i class="fas fa-star text-warning"></i></a></td>
                                <td class="mailbox-name"><a href="read-mail.html">Alexander Pierce</a></td>
                                <td class="mailbox-subject"><b>AdminLTE 3.0 Issue</b> - Trying to find a solution to this problem...
                                </td>
                                <td class="mailbox-attachment"></td>
                                <td class="mailbox-date">5 mins ago</td>
                            </tr>
                            <tr>
                                <td>
                                <div class="icheck-primary">
                                    <input type="checkbox" value="" id="check2"/>
                                    <label for="check2"></label>
                                </div>
                                </td>
                                <td class="mailbox-star"><a href="#"><i class="fas fa-star-o text-warning"></i></a></td>
                                <td class="mailbox-name"><a href="read-mail.html">Alexander Pierce</a></td>
                                <td class="mailbox-subject"><b>AdminLTE 3.0 Issue</b> - Trying to find a solution to this problem...
                                </td>
                                <td class="mailbox-attachment"><i class="fas fa-paperclip"></i></td>
                                <td class="mailbox-date">28 mins ago</td>
                            </tr>
                            <tr>
                                <td>
                                <div class="icheck-primary">
                                    <input type="checkbox" value="" id="check3"/>
                                    <label for="check3"></label>
                                </div>
                                </td>
                                <td class="mailbox-star"><a href="#"><i class="fas fa-star-o text-warning"></i></a></td>
                                <td class="mailbox-name"><a href="read-mail.html">Alexander Pierce</a></td>
                                <td class="mailbox-subject"><b>AdminLTE 3.0 Issue</b> - Trying to find a solution to this problem...
                                </td>
                                <td class="mailbox-attachment"><i class="fas fa-paperclip"></i></td>
                                <td class="mailbox-date">11 hours ago</td>
                            </tr>
                            
                            </tbody>
                            </table>
                        </div>
                        </div>
                        <div class="card-footer p-0">
                        <div class="mailbox-controls">
                            <div class="float-right">
                            1-50/200
                            <div class="btn-group">
                                <button type="button" class="btn btn-default btn-sm"><i class="fas fa-chevron-left"></i></button>
                                <button type="button" class="btn btn-default btn-sm"><i class="fas fa-chevron-right"></i></button>
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
