const Tododata = (props) => {
  const {todoList,DeleteTodo} = props;
    
  
    // console.log(props.todoList)
    console.log("check props",todoList)

    const handleDelete = (id) =>{
     // const removeByid = todoList.filter((item) => id ===todoList.id)
     DeleteTodo(id)
            
      }
         
    
    return (
        <div className='todo-data'>
          {todoList.map( (item,index) => {
            console.log("check map >>", item,index)
            return(
            <div key={index}>
              {/* key = {index} cach 1 */}
              <div className={`todo-item `} key={item.index}  >
              {/* <div className={"todo-item"}  > */}
              {item.name} 
              <button style={{cursor:"pointer"}} onClick={()=> handleDelete(item.id)} >x</button>
             
                 </div>
               </div>
            )
          } )}
      </div>
    )
}
export default Tododata