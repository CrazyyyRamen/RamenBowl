import { EventEmitter } from "events";

import Dispatcher from "../Dispatcher";

class TodoStore extends EventEmitter{
    constructor(){
        super();
        this.todos = [
            {
                id:123456,
                text:"textabc",
                complete:false
            },
            {
                id:321654,
                text:"lovechocolate",
                complete:true
            },
        ];
    }

    getAllTodo(){
        return this.todos;
    }

    createTodo(text){
        const id = Date.now();
        this.todos.push({
            id,
            text,
            complete:false
        })

        this.emit("change");
    }

    deleteTodo(id){
        
    }

    handleActions(action){
        switch(action.type){
            case "CREATE_TODO":{
                this.createTodo(action.text);
            }
        }
    }
}

const todoStore = new TodoStore();
Dispatcher.register(todoStore.handleActions.bind(todoStore));

export default todoStore;