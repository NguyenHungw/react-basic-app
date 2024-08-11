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

  const { loadUser, dataUsers, current, total, pageSize, setPageSize, setCurrent } = props


  const onChange = (pagination, filters, sorter, extra) => {
    //setCurrent ,setPageSize
    //nếu thay đổi trang Current 
    if (pagination && pagination.current) {
      if (+pagination.current !== +current) { //current la gia tri page hien tai react dang luu
        setCurrent(+pagination.current) //"5" =>5
      }
    }
    if (pagination && pagination.pageSize) {
      if (+pagination.pageSize !== +current) { //current la gia tri page hien tai react dang luu
        setPageSize(+pagination.pageSize) //"5" =>5
      }
    }

  };


  const columns = [
    {
      title: "STT",
      render: (_, record, index) => {
        return (
          <div>
            {/* từ trang thứ 2 cộng thêm vào tổng số phần tử tại trang thứ nhất  */}
            {/* trang 1 + trang 2 - 1 * page siz = 5 */}
            {/* (0+1) + (2-1) * 5 */}
            
            {(index + 1) + (current - 1) * pageSize}
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
    if (res.data) {
      notification.success({
        message: "Delete User",
        description: "Xóa user thành công"
      })
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