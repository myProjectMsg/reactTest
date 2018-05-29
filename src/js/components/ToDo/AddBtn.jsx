import React,{Component} from 'react';

export default class AddBtn extends Component{
    constructor(props) {
        super(props)
    }
    render() {
        return(
            <div>
                <a href="javascript:;" onClick={this.props.goEdio}>添加新闻</a>
            </div>
        )
    }
}