import { useState } from "react";
import { Button, Input, notification, Modal } from "antd"

const updateUserModal = () => {
    const [fullName, setName] = useStateate("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <Modal
            title="Create User"
            open={isModalOpen}
            onOk={() => HandleSubmitBtn()}
            onCancel={() => setIsModalOpen(false)}
            maskClosable={false}
            okText={"CREATE"}

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
export default updateUserModal