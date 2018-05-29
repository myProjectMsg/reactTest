import React,{Component} from 'react';
import Msg from './Msg.jsx';
import ClickBtn from './ClickBtn.jsx';
import ListItem from './ListItem.jsx';
import Nav from './Nav.jsx';
const UserMsg = {
    name:'libing',
    age:30,
    work:'web',
    meka:'茶'
}

let idNum=0;

export default class Home extends Component{
    constructor() {
        super();
        this.state={
            count:0,
            msg:'',
            items:[]
        }
    }
    addCount() {
        this.state.count++;
        this.setState({count:this.state.count})
    }
    setPingLun() {
        if(this.state.msg==''){
            return false;
        }else{
            idNum++
            this.state.items.push({
                id:idNum,
                test:this.state.msg
            });
            this.setState({
                msg:'',
                items:this.state.items
            })
        }
    }
    inputChange(e) {
        this.setState({
            msg:e.target.value
        })
    }
    setList() {
       return this.state.items.map((item,i) => <ListItem key={i} {...item}/>)
    }
    render() {
        let items = this.setList();
        return (
            <div>
                <Msg {...UserMsg}/>
                <ClickBtn add={this.addCount.bind(this)} count={this.state.count}/>
                <div className="bottom20">
                    <ul>{items}</ul>
                    <input type="test" value={this.state.msg} onChange={this.inputChange.bind(this)}/>
                    <a href="javascript:;" onClick={this.setPingLun.bind(this)}>添加</a>
                </div>
            </div>
        )
    }
}