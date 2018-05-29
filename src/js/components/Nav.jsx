import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Nav extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="bottom20">
                <ul>
                    <li><Link to="/">首页</Link></li>
                    <li><Link to="/todo">任务列表</Link></li>
                </ul>
            </div>
        )
    }
}