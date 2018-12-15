import Dispatcher from "../Dispatcher";
import axios from "axios";
export function creatTodo(text){
    Dispatcher.dispatch({
        type: "CREATE_TODO",
        text,
    });
}

export function deleteTodo(id){
    Dispatcher.dispatch({
        type: "DELETE_TODO",
        id,
    });
}

export function reloadTodo(){
    axios("http://localhost:49914/api/city/getcity").then((data)=>{
      console.log("got the data", data);  
    })
}