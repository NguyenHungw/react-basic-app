
import './components/todo/todo.css'
import Tododata from './components/todo/tododata'
import TodoNew from './components/todo/todonew'
import reactLogo from './assets/react.svg' 
const App = () => {

  const hoidanit = "Eric"
  const age = 25;
  const data = {
    address: "Hanoi",
    country: "Vn"


   
  }
  const AddnewTodo = (name) =>{
    alert(`call me ${name} `)
  }

//{key:value}
  return (

    <div className="todo-container">
    <div className="todo-title">Todo List</div>
    <TodoNew
    //addnewtodo = {AddnewTodo}

    />
    <Tododata
      name={hoidanit}
      age={age}
      data ={data}
    />
    <div className='todo-image'>
    <img src={reactLogo}/>
    </div>
   
    </div>
    
   
  )
}

export default App
