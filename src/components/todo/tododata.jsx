const Tododata = (props) => {
  const {todoList} = props;
    
    // console.log(props.todoList)
    console.log("check props",todoList)
    return (
        <div className='todo-data'  >
          {todoList.map( (item,index) => {
            console.log("check map >>", item,index)
            return(
            <div>
              {/* key = {index} cach 1 */}
              <div className={`todo-item `} key={item.id}  >
              {/* <div className={"todo-item"}  > */}
              {item.name} 
              <button>x</button>
             
                 </div>
               </div>
            )
          } )}
        {/* <div>My name is {name}</div> */}
     
        {/* <div>
          {JSON.stringify(props.todoList)}
        </div> */}
      </div>
    )
}
export default Tododata