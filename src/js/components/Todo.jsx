import React,{Component} from 'react';
import Nav from './Nav.jsx';
import AddBtn from './ToDo/AddBtn.jsx';
import List from './ToDo/List.jsx';
import ShowTest from './ToDo/ShowTest.jsx';
import EdioTest from './ToDo/EdioTest.jsx';

export default class Todo extends Component{
    constructor(props) {
        super(props);
        this.state = {
            items:[],
            type:true
        }
    }
    goEdioNum() {
        this.setState({
            type:false
        })
    }
    render() {
        return (
            <div className="closeDiv">
                <div className="left leftArea">
                    <div className="bottom20">
                        <AddBtn goEdio={this.goEdioNum.bind(this)}/>
                    </div>
                    <div className="bottom20">
                        <List/>
                    </div>
                </div>
                <div className="showArea">
                    {this.state.type?<ShowTest/>:<EdioTest/>}
                </div>
            </div>
        )
    }
}