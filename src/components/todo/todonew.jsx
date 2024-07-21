const TodoNew = () =>{
  //console.log("check props",props)
  //const {addnewtodo} = props;
  //addnewtodo("eric");

  const handleClick = () => {
    alert("CLick me")
  }
  const handleOnchange = (name) =>{
   // console.log("onchange>>",event.target.value)
      console.log("onchange>>",name)

  }
    return (
        <div className='todo-new' >
        <input type="text" onChange={ (event) => {handleOnchange(event.target.value)}} />
        <button style={{cursor: "pointer"}} onClick={handleClick} >Add</button>
      </div>
    )
}
export default TodoNew