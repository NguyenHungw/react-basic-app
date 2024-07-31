import { Space, Table, Tag } from 'antd';
import { fetchAllUserAPI } from '../../services/api.service';
import { useEffect, useState } from 'react';


  
const UserTable = () => {
  const[dataUsers,setDataUsers] = useState([
    {_id:'1',fullName:'hung',email:'nguyentienhung@'}
  ]);
  useEffect(()=>{
    console.log('run userEffect 111')
    loadUser()
  },[]);
    const columns = [
        {
          title: '_id',
          dataIndex: '_id',

     
        },
        {
          title: 'fullName',
          dataIndex: 'fullName',

        },
        {
          title:'Email',
          dataIndex: 'email',

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
      const loadUser = async() => {
        //console.log("load user START>>")
        const res = await fetchAllUserAPI()
        //console.log("ENDD>>",res.data)
        setDataUsers(res.data)
      }
      
      console.log('run render 000')
      return (
        
        <Table columns={columns} dataSource={dataUsers} rowKey={"_id"} />

      )
}

export default UserTable