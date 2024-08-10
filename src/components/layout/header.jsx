import { Link, NavLink } from 'react-router-dom'
//import './header.css'
import { Menu } from 'antd'
import { AppstoreOutlined, LoginOutlined, LogoutOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { useContext, useState } from 'react';
import { AuthContext } from '../context/auth.context';


const Header = () => {
    const [current, setCurrent] = useState('');
    const {user} =useContext(AuthContext)
    console.log("check data>>",user)
    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key); 
        //neu bien current = voi gia tri bien key thi hien thi gia tri gach chan css o duoi
    };
    
const items = [
    {
        label: <Link to="/">Home</Link>,
        key: 'home', // key ung voi class active de co class gach guoi
        icon: <MailOutlined />,
    },
    {
        label: <Link to="/users" >Users</Link>,
        key: 'users',
        icon: <AppstoreOutlined />,
        // disabled: true,
    },
    {
        label: <Link to = "/book">Products</Link>,
        key: 'products',
        icon: <AppstoreOutlined />,
        // disabled: true,
    },
    {
        label: 'Setting',
        key: 'SubMenu',
        icon: <SettingOutlined />,
        children: [
          {
            type: 'group',
            label: 'Item 1',
            children: [
              { label: <Link to = "/login">Login</Link>, key: 'login' ,icon:<LoginOutlined /> },
              { label: <Link to = "/">Logout</Link>, key: 'logout', icon:<LogoutOutlined /> },
            ],
          },
        ],
      },

];
    //anchor
  

    return (
        <Menu
            onClick={onClick}
            selectedKeys={[current]}
            mode="horizontal"
            items={items}
        />
    )
}

export default Header