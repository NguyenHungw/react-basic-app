const Tododata = (props) => {

    //props la 1 obj
    //cach1
    const {name,age,data} = props;
    //cach 2
    // const name = props.name;
    // const age = props.age;
    // const data = props.data;

    
    // console.log("check props",)
    return (
        <div className='todo-data'>
        <div>My name is {name}</div>
        <div>Learning React</div>
        <div>Watching Youtube</div>
      </div>
    )
}
export default Tododata