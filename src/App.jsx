
import './components/todo/todo.css'
import Tododata from './components/todo/tododata'
import TodoNew from './components/todo/todonew'
import reactLogo from './assets/react.svg' 
import { useState } from 'react'
const App = () => {

  
  const [TodoList,setTodoList] = useState([
    // {id:1 , name :"Learning React"},
    // { id:2 , name :"Watching Youtube"}
  ])

  // const hoidanit = "Eric"
  // const age = 25;
  // const data = {
  //   address: "Hanoi",
  //   country: "Vn"


   
  // }
  const AddnewTodo = (name) =>{
    //alert(`call me ${name} `)
    //setTodoList(name);
    const newTodo = {
      id:randomIntFromInterval(1,10000),
      name:name
    }
    setTodoList([...TodoList, newTodo])
  
  }

  const randomIntFromInterval = (min, max) => { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
   }
   
 

 
//{key:value}
  return (

    <div className="todo-container">
    <div className="todo-title">Todo List</div>
    <TodoNew
    addnewtodo = {AddnewTodo}

    />
    {/* {TodoList.length >0 && 
      <Tododata
      todoList = {TodoList}
    />
    }
    {TodoList.length ===0 &&
      <div className='todo-image'>
    <img src={reactLogo}/>
    </div>
    }
    */}

    {TodoList.length >0 ? 
      <Tododata
      todoList = {TodoList}
    />
    :
  
      <div className='todo-image'>
    <img src={reactLogo}/>
    </div>
    
    }
   
   
    </div>
    
   
  )
}

export default App
