import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Space, Table, Tag } from 'antd';
import UpdateUserModal from './update.user.modal'
import { useState } from 'react';



const UserTable = (props) => {
  const { dataUsers } = props
   const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);

  const columns = [
    {
      title: '_id',
      dataIndex: '_id',
      render: (_, record) => {
        return (
          <>
            <a href='#'>{record._id}</a>
          </>
        )

      }




    },
    {
      title: 'fullName',
      dataIndex: 'fullName',

    },
    {
      title: 'Email',
      dataIndex: 'email',

    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <>
          <div style={{ display: "flex", gap: "20px" }}>
            <EditOutlined onClick={()=>setIsUpdateModalOpen(true)} style={{ cursor: "pointer", color: "orange" }} />
            <DeleteOutlined style={{ cursor: "pointer", color: "red" }} />
          </div>
        </>

      ),
    }

  ]

  return (
    <>
    
    <Table
      columns={columns}
      dataSource={dataUsers}
      rowKey={"_id"}
    />
    <UpdateUserModal
    isUpdateModalOpen = {isUpdateModalOpen}
    setIsUpdateModalOpen = {setIsUpdateModalOpen}
    />
    

    </>

  )
}

export default UserTable