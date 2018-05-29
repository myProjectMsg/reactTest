 import React,{Component} from 'react';
import RouterMap from './RouterMap.jsx';
import Nav from './Nav.jsx';

export default class Layout extends Component{
    constructor(props) {
        super(props)
    }
    render() {
        return(
            <div>

                <RouterMap/>
            </div>
        )
    }
}