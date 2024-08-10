import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Col, Divider, Flex, Form, Input, notification, Row } from "antd"
import { json, useNavigate } from "react-router-dom";
import { loginUserAPI } from "../services/api.service";
import { useContext, useState } from "react";
import { AuthContext } from "../components/context/auth.context";

const LoginPage = () => {
    const navigate = useNavigate();
    const [loading,setLoading] = useState(false)
    const {setUser} =useContext(AuthContext)

    const onFinish = async(values) => {
        setLoading(true)
        const res = await loginUserAPI(values.username,values.password)
        if(res.data){
            notification.success({
                message:"Dn",
                description:"dang nhap thanh cong"
            
            })
            localStorage.setItem("access_token",res.data.access_token)
            setUser(res.data.user)
            navigate("/")

            console.log(res.data)
        }else{
            notification.error({
                message:"error login",
                description: JSON.stringify(res.data)
            })
        }
        setLoading(false)
        //console.log("check values login",values)
    }
    return (
        <Row justify={"center"}>
            <Col xs={24} md={16} lg={8}>
                <fieldset style={{
                    padding: "15px",
                    margin: "5px",
                    border: "1px solid #ccc",
                    borderRadius: "5px"

                }}>
                    <legend>Đăng nhập</legend>
                    <Form
                        //   name="login"
                        //   initialValues={{
                        //     remember: true,
                        //   }}
                        //   style={{
                        //     maxWidth: 360,
                        //   }}
                        onFinish={onFinish}
                        style={{
                            // marginTop: 50,
                            // border:"1px solid black",
                            // padding:"50px",

                        }}
                    >

                        <Form.Item
                            name="username"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Username!',
                                },
                            ]}
                        >


                            <Input prefix={<UserOutlined />} placeholder="Username" />
                        </Form.Item>


                        <Form.Item
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Password!',
                                },
                            ]}
                        >
                            <Input.Password prefix={<LockOutlined />} type="password" placeholder="Password" />
                        </Form.Item>


                        <Form.Item>
                            <Flex justify="space-between" align="center">
                                <Form.Item name="remember" valuePropName="checked" noStyle>
                                    <Checkbox>Remember me</Checkbox>
                                </Form.Item>

                                <a onClick={() => { navigate("/") }}>Go To Home Page</a>
                            </Flex>
                        </Form.Item>


                        <Divider></Divider>
                        <Form.Item>
                            <Button 
                            loading={loading}
                            block type="primary" htmlType="submit">
                                Log in
                            </Button>
                            or <a onClick={() => { navigate("/register") }}>Register now!</a>
                        </Form.Item>

                    </Form>
                </fieldset>
            </Col>
        </Row>
    );
}
export default LoginPage
