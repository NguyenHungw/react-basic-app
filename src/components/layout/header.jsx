import { json, Link, NavLink, useNavigate } from 'react-router-dom'
//import './header.css'
import { Menu, message, notification } from 'antd'
import { AppstoreOutlined, LoginOutlined, LogoutOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { useContext, useState } from 'react';
import { AuthContext } from '../context/auth.context';
import { logOuttAccountAPI } from '../../services/api.service';


const Header = () => {
    const [current, setCurrent] = useState('');
    const { user,setUser } = useContext(AuthContext)
    const navigate = useNavigate()
    const onClick = (e) => {
        setCurrent(e.key);
        //neu bien current = voi gia tri bien key thi hien thi gia tri gach chan css o duoi
    };

    const handleLogout = async() => {
        const res = await logOuttAccountAPI()
        if(res.data){
            // localStorage.clear()
            localStorage.removeItem("access_token")
            setUser({
                email: "",
                phone: "",
                fullName: "",
                role: "",
                avatar: "",
                id: ""

            }
            )
            navigate("/")
            

            message.success("Đăng xuất thành công")
        }else{

            notification.error({
                message:"loi",
                description: JSON.stringify(res.data)
            })
        }
    }
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
            label: <Link to="/book">Products</Link>,
            key: 'products',
            icon: <AppstoreOutlined />,
            // disabled: true,
        },
        ...(!user.id ? [{
            label: <Link to="/login">Đăng Nhập</Link>,
            key: 'login',
            icon: <LoginOutlined />,
        }] : []),
        ...(user.id ? [{
            
            label: `Welcome ${user.fullName}`,
            key: 'SubMenu',
            icon: <SettingOutlined />,
            children: [
                {
                    type: 'group',
                    label: 'item1',
                    children: [
                        { label: <span onClick={()=>{handleLogout()}}>Đăng Xuất</span>  , key: 'logout', icon: <LogoutOutlined /> },
                    ],
                },
            ],
        }] : []),



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