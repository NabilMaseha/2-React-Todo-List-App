import React, { Component } from 'react';
import TodoItems from './components/TodoItems/TodoItems'
import AddItem from './components/AddItem/AddItem'




export default class app extends Component {
 
  state = {
    items:[
      {id:1, name:'Hamza' ,age:22},
      {id:2, name:'Mohamed' ,age:23},
      {id:3, name:'Abdo' ,age:24}
      
    ]
  }

  deletItem = (id)=> {
    let items = this.state.items;
    let i = items.findIndex(item => item.id ===id)
    items.splice(i,1)
    this.setState({items})

    // let items = this.state.items.filter(item =>{

    //   return item.id !==id

    // })
    // this.setState({items})

  }

  addItem =(item)=> {
    item.id = Math.random();
    let items = this.state.items;
    items.push(item);
    this.setState({items}) 

  }


  render() {

    return (
      <div >
      <div className="App container">
         <h1 className="text-center"> Todo List</h1>
         <TodoItems items={this.state.items} deletItem = {this.deletItem}/>
         <AddItem addItem= {this.addItem}/>
         </div>
         </div>
    );
  }
}
