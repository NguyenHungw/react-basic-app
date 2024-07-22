import { useState } from "react"

const TodoNew = (props) =>{
  //console.log("check props",props)
  const {addnewtodo} = props;
  //addnewtodo("eric");


  // const valueInput = "er";
  const [valueInput,setValueInput] = useState("er")
  //console.log("check props",addnewtodo)


  const handleClick = () => {
    //alert("CLick me")

    addnewtodo(valueInput)
    setValueInput("")
    //AddnewTodo(valueInput)
    //console.log("check value input",valueInput)
  }
  const handleOnchange = (name) =>{
      // console.log("onchange>>",event.target.value)
      //console.log("onchange>>",name)
      setValueInput(name)

  }
  
    return (
        <div className='todo-new' >
        <input type="text" onChange={ (event) => {handleOnchange(event.target.value)}}
        value={valueInput} />
        <button style={{cursor: "pointer"}} onClick={handleClick} >Add</button>
        <div>
          My text input is =  {valueInput}
        </div>
      </div>
    )
}
export default TodoNew