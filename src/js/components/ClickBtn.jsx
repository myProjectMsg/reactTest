import React,{Component} from 'react';

export default class ClickBtn extends Component{
    constructor(props) {
        super(props)
    }

    render() {
        let count = this.props.count;
        return (
            <div className="bottom20">
                <p>我或的点赞数--{count}</p>
                <p><a href="javascript:;" onClick={this.props.add}>点个赞</a></p>
            </div>
        )
    }
}