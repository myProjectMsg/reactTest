import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './Home.jsx';
import Todo from './Todo.jsx';
import Nav from './Nav.jsx';

export default class RouterMap extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Nav/>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/todo" component={Todo}/>
                    </Switch>
                </div>

            </BrowserRouter>
        )
    }
}