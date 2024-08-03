import { useState } from "react";
import { Button, Input, notification, Modal } from "antd"

const UpdateUserModal = (props) => {
    const [fullName, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    // const [isModalOpen, setIsModalOpen] = useState(true);
//const [isUpdateModalOpen,setUpdateIsModalOpen] = useState(false)
  const {isUpdateModalOpen, setIsUpdateModalOpen} = props

const resetAndCloseModal = () =>{
    setUpdateIsModalOpen(false);
    setName("");
    setEmail("");
    setPassword("");
    setPhone("");
}

const HandleSubmitBtn = async () => {

    // hứng response trả về từ api 
    const res = await createUserAPI(fullName, email, password, phone)
    //nếu res.data có tồn tại thì chạy tiếp res.data.data
    if (res.data) {
        //console.log("check res data>>",res.data)
        notification.success({
            message: "Update user",
            description: "Cập nhật user thành công"
        })
        resetAndCloseModal()
        await loadUser()

    } else {

        notification.error({
            message: "Error Create User",
            description: JSON.stringify(res.message)
        })
    }


    //console.log("check res",res.data)  
}

    return (
        <Modal
            title="Update"
            open={isUpdateModalOpen}
            onOk={() => HandleSubmitBtn()}
            onCancel={() => setIsUpdateModalOpen(false)}
            maskClosable={false}
            okText={"Upload"}
        >
            <div>
                <span>FullName</span>
                <Input
                    value={fullName}
                    onChange={(event) => { setName(event.target.value) }}
                />

            </div>
            <div>
                <span>Email</span>
                <Input
                    value={email}
                    onChange={(event) => { setEmail(event.target.value) }}
                />
            </div>
            <div>
                <span>Password</span>
                <Input.Password
                    value={password}
                    onChange={(event) => { setPassword(event.target.value) }}
                />
            </div>
            <div>
                <span>PhoneNumber</span>
                <Input
                    value={phone}
                    onChange={(event) => { setPhone(event.target.value) }}
                />
            </div>
        </Modal>
    )
}
export default UpdateUserModal