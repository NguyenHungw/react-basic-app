import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Col, Flex, Form, Input, Row } from "antd"
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    const navigate = useNavigate();

    return (
        <Form
            //   name="login"
            //   initialValues={{
            //     remember: true,
            //   }}
            //   style={{
            //     maxWidth: 360,
            //   }}
            //onFinish={onFinish}
            style={{
                marginTop: 50,
                border:"1px solid black",
                padding:"50px",

            }}
        >
            <Row justify={"center"}>


                <Col sm={24} md={8} >

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
                </Col>
            </Row>
            <Row justify={"center"}>
                <Col sm={24} md={8} >
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
                </Col>
            </Row>
            <Row justify={"center"}>
                <Col sm={24} md={8} >
                    <Form.Item>
                        <Flex justify="space-between" align="center">
                            <Form.Item name="remember" valuePropName="checked" noStyle>
                                <Checkbox>Remember me</Checkbox>
                            </Form.Item>

                            <a onClick={() => { navigate("/") }}>Go To Home Page</a>
                        </Flex>
                    </Form.Item>
                </Col>
            </Row>
            <Row justify={"center"}>
                <Col sm={24} md={8} >
                    <Form.Item>
                        <Button block type="primary" htmlType="submit">
                            Log in
                        </Button>
                        or <a onClick={() => { navigate("/register") }}>Register now!</a>
                    </Form.Item>
                </Col>
            </Row>
        </Form>
    );
}
export default LoginPage
