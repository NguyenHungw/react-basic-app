import { useState } from "react"

const TodoNew = (props) =>{
  //console.log("check props",props)
  //const {addnewtodo} = props;
  //addnewtodo("eric");

  // const valueInput = "er";
  const [valueInput,setValueInput] = useState("er")
  const handleClick = () => {
    //alert("CLick me")

    console.log("check value input",valueInput)
  }
  const handleOnchange = (name) =>{
   // console.log("onchange>>",event.target.value)
      //console.log("onchange>>",name)
      setValueInput(name)

  }
    return (
        <div className='todo-new' >
        <input type="text" onChange={ (event) => {handleOnchange(event.target.value)}} />
        <button style={{cursor: "pointer"}} onClick={handleClick} >Add</button>
        <div>
          My text input is =  {valueInput}
        </div>
      </div>
    )
}
export default TodoNew