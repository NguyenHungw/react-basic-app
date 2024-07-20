import './style.css'
const Mycomponent = () => {

    // const test = "string"
    // const test = 12
    const test = [1,2,3]
    // const test = Boolean
    // const test = undefined
    // const test = null

    // const test = {
    //     name:"hung",
    //     age:21
    // }

    return (
        <>
         <div style={{color:"red"}} > {JSON.stringify(test)} component</div>
         <div>{console.log("Eric")}</div>
         <div className="child" style={{borderRadius:"10px"}}>Test</div>
        </>
     
    );
  }
  export default Mycomponent
