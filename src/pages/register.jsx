import { Form, Button, Input } from "antd"

const RegisterPage = () => {
    const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log(">>CheckValúes",values)
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
                // rules={[
                //     {
                //         required: true,
                //         message: 'Please input your username!',
                //     },
                // ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="FullName"
                    name="fullName"
                // rules={[
                //     {
                //         required: true,
                //         message: 'Please input your username!',
                //     },
                // ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Email"
                    name="email"
                // rules={[
                //     {
                //         required: true,
                //         message: 'Please input your username!',
                //     },
                // ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Password"
                    name="password"
                // rules={[
                //     {
                //         required: true,
                //         message: 'Please input your username!',
                //     },
                // ]}
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item
                    label="PhoneNumber"
                    name="phone"
                // rules={[
                //     {
                //         required: true,
                //         message: 'Please input your username!',
                //     },
                // ]}
                >
                    <Input />
                </Form.Item>

                {/* <button type="submit" >Register</button> */}

                <Button onClick={()=>{form.submit()}} type="primary">register</Button>
            </div>
        </Form>
    )
}
export default RegisterPage
