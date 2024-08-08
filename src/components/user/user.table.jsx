import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Button, notification, Popconfirm, Space, Table, Tag } from "antd";
import UpdateUserModal from "./update.user.modal";
import { useState } from "react";
import ViewUserDetail from "./view.user.detail";
import { createUserAPI, deleteUserAPI } from "../../services/api.service";

const UserTable = (props) => {

  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [dataUpdate, setDataUpdate] = useState(null);
  const [openDetailUser, setOpenDetailUser] = useState(false);
  const [dataDetailUser, setDataDetailUser] = useState(null);

  const { loadUser, dataUsers, current, total, pageSize } = props


  const onChange = (pagination, filters, sorter, extra) => {
    console.log("check onchange",{pagination, filters, sorter, extra})
   };


  const columns = [
    {
      title: "STT",
      render: (_, record, index) => {
        return (
          <div>
            {index + 1}
          </div>


        );
      }
    },
    {
      title: "_id",
      dataIndex: "_id",
      render: (_, record) => {
        return (
          <>
            <a href="#"
              onClick={() => {
                setOpenDetailUser(true)
                //console.log("check record>>", record)
                setDataDetailUser(record)
                //alert("Test")
              }}
            >{record._id}</a>
          </>
        );
      },
    },
    {
      title: "fullName",
      dataIndex: "fullName",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <>
          <div style={{ display: "flex", gap: "20px" }}>
            <EditOutlined
              onClick={() => {
                setDataUpdate(record)
                setIsUpdateModalOpen(true)
              }}
              style={{ cursor: "pointer", color: "orange" }}
            />
            <Popconfirm
              placement="left"
              title="Delete the task"
              description="Are you sure to delete this task?"
              onConfirm={() => { HandleDelete(record._id) }}
              //onCancel={cancel}
              okText="Yes"
              cancelText="No"
            >

              <DeleteOutlined style={{ cursor: "pointer", color: "red" }} />
            </Popconfirm>
          </div>
        </>
      ),
    },
  ];
  const HandleDelete = async (id) => {

    const res = await deleteUserAPI(id)
    console.log("check res>>>>", res)
    if (res.data) {
      console.log("xoa thanh cong")
      notification.success({
        message: "Delete User",
        description: "Xóa user thành công"
      })
      console.log("check restData", res.data)
      //resetAndCloseModal();
      await loadUser();


    } else {
      notification.error({
        message: "Error Delete User",
        description: JSON.stringify(res.message)
      })
    }


    //console.log("check res",res.data)  
  }
  return (
    <>
      <Table
        columns={columns}
        dataSource={dataUsers}
        rowKey={"_id"}
        pagination={
          {
            current: current,
            pageSize: pageSize,
            showSizeChanger: true,
            total: total,
            showTotal: (total, range) => { return (<div> {range[0]}-{range[1]} trên {total} rows</div>) }
            
          }
          
        }
        onChange={onChange}

      />
      <UpdateUserModal
        isUpdateModalOpen={isUpdateModalOpen}
        setIsUpdateModalOpen={setIsUpdateModalOpen}
        dataUpdate={dataUpdate}
        setDataUpdate={setDataUpdate}
        loadUser={loadUser}
      />
      <ViewUserDetail
        openDetailUser={openDetailUser}
        setOpenDetailUser={setOpenDetailUser}
        dataDetailUser={dataDetailUser}
        setDataDetailUser={setDataDetailUser}
        loadUser={loadUser}
      />

    </>
  );
};

export default UserTable;
