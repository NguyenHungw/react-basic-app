import { Button, Input, notification } from "antd"
import { useState } from "react"
import axios from "axios";
import { createUserAPI } from "../../services/api.service";
const UserForm = () => {
    const [fullName,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [phone,setPhone] = useState("");


    const HandleClickBtn = async () => {
        // hứng response trả về từ api 
        const res = await createUserAPI(fullName,email,password,phone)
        //nếu res.data có tồn tại thì chạy tiếp res.data.data
        if(res.data){
            //console.log("check res data>>",res.data)
            notification.success({
                message:"Create user",
                description:"Tạo user thành công"
            })
        }else{
            
            notification.error({
                message:"Error Create User",
                description: JSON.stringify(res.message)
            })
        }
       

        //console.log("check res",res.data)  
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