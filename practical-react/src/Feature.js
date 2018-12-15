import React, { Component } from 'react';
import TodoStore from "./store/TodoStore";
import * as TodoAction from "./action/TodoAction";

export default class Feature extends Component {
    constructor(){
        super();
        this.state={
            todos: TodoStore.getAllTodo(),
        };
    }

    componentWillMount(){
        TodoStore.on("change", ()=>{
            this.setState({
                todos:TodoStore.getAllTodo(),
            });
        });
    }

    createTodo(){
        TodoAction.creatTodo(Date.now());
    }

    reloadTodo(){
        TodoAction.reloadTodo();
    }

    render(){
        const {todos} = this.state;

        const TodoList = todos.map((todo)=>{
            return <li key={todo.id}>{todo.text}</li>;
        });
        return(<div>
                    <button onClick={this.createTodo.bind(this)}>New</button>
                    <button onClick={this.reloadTodo.bind(this)}>Reload</button>
                   <ul>
                       {TodoList}
                   </ul>
               </div>);
    }
}