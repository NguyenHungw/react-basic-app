import { Link, NavLink } from 'react-router-dom'
//import './header.css'
import { Menu } from 'antd'
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { useState } from 'react';


const Header = () => {
    const [current, setCurrent] = useState('');
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
    }
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