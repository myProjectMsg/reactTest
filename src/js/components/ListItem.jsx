import React,{Component} from 'react';

export default class ListItem extends Component{
    constructor(props) {
        super(props)
    }
    render() {
        let { id, test } = this.props;
        return (
            <li><span>{id}</span>-----<span>{test}</span></li>
        )
    }
}