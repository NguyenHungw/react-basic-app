import { Button, Input } from "antd"
import { useState } from "react"

const UserForm = () => {
    const [fullName,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [phone,setPhone] = useState("");


    const HandleClickBtn = () => {
        console.log("check full form",{fullName,email,password,phone})  
      }
    
    return (

        <div className="user-form" style={{margin:"20px 0"}}  >
            <div style={{display:"flex",gap:"15px",flexDirection:"column"}}>
                <div>
                    <span>FullName</span>
                    <Input 
                        value={fullName}
                        onChange={(event)=>{setName(event.target.value)}}
                    />
                    
                </div>
                <div>
                    <span>Email</span>
                    <Input
                        value={email}
                        onChange={(event)=>{setEmail(event.target.value)}}
                    />
                </div>
                <div>
                    <span>Password</span>
                    <Input.Password
                        value={password}
                        onChange={(event)=> {setPassword(event.target.value)}}
                    />
                </div>
                <div>
                    <span>PhoneNumber</span>
                    <Input
                        value={phone}
                        onChange={(event)=>{setPhone(event.target.value)}}
                    />
                </div>
                <div>
                    <Button type="primary" onClick={HandleClickBtn} > Create User </Button>
                </div>
            </div>
        </div>
    )
}
export default UserForm