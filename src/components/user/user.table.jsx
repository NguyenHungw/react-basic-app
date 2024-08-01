import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Space, Table, Tag } from 'antd';



const UserTable = (props) => {
  const { dataUsers } = props

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
          <div style={{display:"flex",gap:"20px"}}>
            <EditOutlined style={{cursor:"pointer", color:"orange"}}/>
            <DeleteOutlined style={{cursor:"pointer", color:"red"}}/> 
          </div>
        </>

      ),
    }


    // {
    //   title: 'isActive',
    //   dataIndex: 'isActive',
    // },
    // {
    //   title: 'phone',
    //   dataIndex: 'phone',
    // },
    // {
    //   title: 'role',
    //   dataIndex: 'role',
    // },
    // {
    //   title: 'updatedAt',
    //   dataIndex: 'updatedAt',
    // },
    // {
    //   title: 'Address',
    //   dataIndex: 'address',
    // }

  ]
  // const data = [
  //   {
  //     key: '1',
  //     name: 'John Brown',
  //     age: 32,
  //     address: 'New York No. 1 Lake Park',
  //     tags: ['nice', 'developer'],
  //   },
  //   {
  //     key: '2',
  //     name: 'Jim Green',
  //     age: 42,
  //     address: 'London No. 1 Lake Park',
  //     tags: ['loser'],
  //   },
  //   {
  //     key: '3',
  //     name: 'Joe Black',
  //     age: 32,
  //     address: 'Sydney No. 1 Lake Park',
  //     tags: ['cool', 'teacher'],
  //   },
  // ];


  //console.log('run render 000')
  return (

    <Table columns={columns} dataSource={dataUsers} rowKey={"_id"} />

  )
}

export default UserTable