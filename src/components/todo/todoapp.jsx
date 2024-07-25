import Tododata from './tododata'
import TodoNew from './todonew'
import reactLogo from '../../assets/react.svg' 
import { useState } from 'react'

const TodoApp = () =>{
    const [TodoList,setTodoList] = useState([
     
    ])
  
  
    const AddnewTodo = (name) =>{
      //alert(`call me ${name} `)
      //setTodoList(name);
      const newTodo = {
        id:randomIntFromInterval(1,10000),
        name:name
      }
      setTodoList([...TodoList, newTodo])
    
    }
    const DeleteTodo = (id) =>{
  
      const removeByid = TodoList.filter((item) => item.id !==id)
      //console.log(id)
      setTodoList(removeByid)
    }
  
    const randomIntFromInterval = (min, max) => { // min and max included
      return Math.floor(Math.random() * (max - min + 1) + min);
     }
    return(
    <>
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoNew
      addnewtodo = {AddnewTodo}
  
      />
     
  
      {TodoList.length >0 ? 
        <Tododata
        todoList = {TodoList}
        DeleteTodo = {DeleteTodo}
          //  handleDelete = {handleDelete}
  
      />
      :
    
        <div className='todo-image'>
      <img src={reactLogo}/>
      </div>
      
      }
     
     
      </div>
    </>)
  }

  export default TodoApp