import { useEffect, useState } from "react";
import { Button, Input, notification, Modal } from "antd";
import { createUserAPI, updateUserAPI } from "../../services/api.service";

const UpdateUserModal = (props) => {
  const [fullName, setName] = useState("");
  const [id, setID] = useState("");
//   const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  // const [isModalOpen, setIsModalOpen] = useState(true);
  //const [isUpdateModalOpen,setUpdateIsModalOpen] = useState(false)
  const { isUpdateModalOpen, setIsUpdateModalOpen, setDataUpdate, dataUpdate,loadUser } =
    props;

    //next dataupdate != prev dataupdate 
    useEffect(()=>{
       // console.log("check props>>",dataUpdate)
        if(dataUpdate){
            setID(dataUpdate._id);
            setName(dataUpdate.fullName);
            
            setPhone(dataUpdate.phone);
        }
        //neu bien dataUpdate thay doi gia tri thi useEff tu dong chayj lai, neu ko co thi chi chay 1 lan
    },[dataUpdate])

  //console.log(dataUpdate);
  const resetAndCloseModal = () => {
    setIsUpdateModalOpen(false);
    setName("");
    setID("");
   // setEmail("");
    // setPassword("");
    setPhone("");
    setDataUpdate(null)
  };

  const HandleSubmitBtn = async () => {
    // hứng response trả về từ api
 
    const res = await updateUserAPI(id,fullName, phone);
    //nếu res.data có tồn tại thì chạy tiếp res.data.data
    if (res.data) {
      //console.log("check res data>>",res.data)
      notification.success({
        message: "Update user",
        description: "Cập nhật user thành công",
      });
      resetAndCloseModal();
      await loadUser();
    } else {
      notification.error({
        message: "Error Create User",
        description: JSON.stringify(res.message),
      });
    }

    //console.log("check res",res.data)
  };

  return (
    <Modal
      title="Update"
      open={isUpdateModalOpen}
      onOk={() => HandleSubmitBtn()}
      onCancel={() => resetAndCloseModal(false)}
      maskClosable={false}
      okText={"Upload"}
    >
    <div>
        <span>id</span>
        <Input
          value={id}
          disabled
        />
      </div>
      <div>
        <span>FullName</span>
        <Input
          value={fullName}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
      </div>
      
      <div>
        <span>PhoneNumber</span>
        <Input
          value={phone}
          onChange={(event) => {
            setPhone(event.target.value);
          }}
        />
      </div>
    </Modal>
  );
};
export default UpdateUserModal;
