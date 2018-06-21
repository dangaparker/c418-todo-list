import React, {Component} from 'react';
import List from './list';
import AddItem from './add_item';
import listData from '../data/list';

class App extends Component{
    constructor(props){
        super(props)
        
        this.state = {
            list: []
        };

    }

    getListData(){
        this.setState({
            list: listData
        });
    }

    componentDidMount(){
        this.getListData();
    }

    addItem(item){
        this.setState({
            list: [item, ...this.state.list]
        });
    }

    render(){
        console.log('app state: ', this.state);
        return (
            <div className = 'container'>
                <h1 className='center'>To Do List</h1>
                <AddItem add={this.addItem.bind(this)}/>
                <List data={this.state.list}/>
            </div>
        );
    }
}

export default App;
