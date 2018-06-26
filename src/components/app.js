import React, {Component} from 'react';
import List from './list';
import AddItem from './add_item';
import axios from 'axios';


class App extends Component{
    constructor(props){
        super(props)
        
        this.state = {
            list: []
        };
        this.base_url = 'http://api.reactprototypes.com';
        this.api_key= '?key=c418ddemouser'
    }

    async addItem(item){
       try{
        const resp = await axios.post(`${this.base_url}/todos${this.api_key}`, item)
        this.getListData()   
    } 
        catch(err){
            console.log('erro:', err.message)
        }

        
        
    }

   async getListData(){
    //   axios.get(`${this.base_url}/todos${this.api_key}`).then(response => {
    //       console.log('get Todos response:', response.data.todos)
          
    //       this.setState({list: response.data.todos})
    //   }).catch(err => {
    //       console.log('Get todos error:', err.message)
    //   })
    // }
    
    try{
        const resp = await axios.get(`${this.base_url}/todos/${this.api_key}`)

    this.setState({list: resp.data.todos})
    }

    catch(err){
        console.log('Get data error:', err.message)
    }
}

    componentDidMount(){
        this.getListData();
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
