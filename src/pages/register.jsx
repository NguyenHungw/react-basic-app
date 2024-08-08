import { Form, Button, Input, notification } from "antd"
import { registerUserAPI } from "../services/api.service";
import { json, useNavigate } from "react-router-dom";

const RegisterPage = () => {
    const [form] = Form.useForm();
    const navigate = useNavigate();

    const onFinish = async (values) => {
        console.log(">>CheckValúes", values)

        const res = await registerUserAPI(
            values.fullName,
            values.email,
            values.password,
            values.phone)
        if (res.data) {
            notification.success({
                message: "register user",
                description: "dang ky user thanh cong"
            })
            navigate("/login")

        } else {
            notification.error({
                message: "rgister useer fail",
                description: JSON.stringify(res.message)
            })
        }
        //call api
    }
    return (
        <Form
            form={form}
            layout="vertical"

            onFinish={onFinish}
            // onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <div style={{

                margin: "50px",

            }}>
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="FullName"
                    name="fullName"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your FullName!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Email!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Password!',
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item
                    label="PhoneNumber"
                    name="phone"
                    rules={[
                        {
                            required: true,
                            pattern: new RegExp(/\d+/g),
                            message: "Wrong format!"
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                {/* <button type="submit" >Register</button> */}

                <Button onClick={() => { form.submit() }} type="primary">register</Button>

                {/* lay gia tri ma k can phai submit form */}
                {/* set */}
                {/* <Button onClick={()=>{
                    form.setFieldsValue({
                    email:"test"
                })}  }>Test</Button> */}
            </div>
        </Form>
    )
}
export default RegisterPage
