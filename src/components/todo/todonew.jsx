const TodoNew = (props) =>{
  console.log("check props",props)
  const {addnewtodo} = props;
  addnewtodo("eric");
    return (
        <div className='todo-new' >
        <input type="text"/>
        <button>Add</button>
      </div>
    )
}
export default TodoNew