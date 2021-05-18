import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import Index from "./components/pages/index/index";
import Technical from "./components/pages/index/technical";
import FailedStart from "./components/pages/index/failedstart";
import Overheating from "./components/pages/index/overheating";
import Faulty from "./components/pages/index/faulty";
import Product from "./components/pages/Products/product";
import Products from './components/pages/Products/products';
import ReadMail from './components/pages/dashboard/read';
import MailInbox from './components/pages/dashboard/Inbox';
import Login from "./components/pages/dashboard/signin";
import CreatePost from "./components/pages/dashboard/createPost";

export default class router extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path="/" exact={true} component={Index} />
                    <Route path="/overheating" exact={true} component={Overheating} />
                    <Route path="/failedstart" exact={true} component={FailedStart} />
                    <Route path="/faulty" exact={true} component={Faulty} />
                    <Route path="/technical" exact={true} component={Technical} />
                    <Route path="/createpost" exact={true} component={CreatePost} />
                    <Route path="/product" exact={true} component={Product} />
                    <Route path="/products" exact={true} component={Products} />
                    <Route path="/mail" exact={true} component={ReadMail} />
                    <Route path="/mails" exact={true} component={MailInbox} />
                    <Route path="/login" exact={true} component={Login} />
                </Switch>
            </div>
        )
    }
}
