import React,{Component} from 'react';

export default class Msg extends Component{
    constructor(props) {
        super(props)
    }
    render() {
        let { name, age, work, meka} = this.props;
        return(
            <div className="bottom20">
                <p>用户的名字--{name}</p>
                <p>用户的年龄--{age}</p>
                <p>用户的工作--{work}</p>
                <p>用户制作了---{meka}</p>
            </div>
        )
    }
}