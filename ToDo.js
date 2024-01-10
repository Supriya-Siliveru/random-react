import React from "react";
import {
    useState
} from "react";

function ToDo() {
    const [todos, setToDos] = useState([{ id: 1, item: "learn react" },{id:2, item: "learn js"}]);
    const[users, setUsers] = useState([{name: "test1", email:"test1@gmail.com"},{name:"test2",email:"test2@gmail.com"},{name:"test3",email:"test3@gmail.com"}]);
    const [item,setItem] = useState("")
    const []
    const addTodo=()=>(setToDos([...todos,{item: item}]))
    const todoItemChange=(e)=>(setItem(e.target.value))
    return (
        <div>
            <h1>Hello Todo app</h1>
            <ul>{todos.map((el) => {
                return (
                    <div>
                        <li>{el.item}</li>
                    </div>
                )
            })}
            </ul>

            <ul>
                {users.map((user)=>{
                    return(
                        <div>
                            <li>{user.email},{user.name}</li>
                        </div>
                    )
                })}
            </ul>
            <input type="text" value={item} name="todo" placeholder="Enter todo item" onChange={(e)=>todoItemChange(e)}></input>
            <button onClick={()=>addTodo()}>Add Todo</button>
        </div>

    )
}
export default ToDo