const Tododata = (props) => {

    //props la 1 obj
    //cach1
    const {name,age,data} = props;
    //cach 2
    // const name = props.name;
    // const age = props.age;
    // const data = props.data;

    
    console.log(props.todoList)
    //console.log("check props",props)
    return (
        <div className='todo-data'>
        <div>My name is {name}</div>
        <div>Learning React</div>
        <div>Watching Youtube</div>
        <div>
          {JSON.stringify(props.todoList)}
        </div>
      </div>
    )
}
export default Tododata