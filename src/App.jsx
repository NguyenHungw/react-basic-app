
import './components/todo/todo.css'
import Tododata from './components/todo/tododata'
import TodoNew from './components/todo/todonew'
import reactLogo from './assets/react.svg' 
const App = () => {

  return (
    <div className="todo-container">
    <div className="todo-title">Todo List</div>
    <TodoNew/>
    <Tododata/>
    <div className='todo-image'>
    <img src={reactLogo}/>
    </div>
   
    </div>
    
   
  )
}

export default App
