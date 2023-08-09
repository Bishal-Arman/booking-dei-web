import { Button, Checkbox, Form, Input } from "antd";

const onFinish = () => {};
const onFinishFailed = () => {};

const Login = () => (
  <div className="flex items-center justify-center h-[500px]">
    <Form
      className="margin-auto w-[400px]"
      name="login"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Phone"
        name="phone"
        rules={[
          {
            required: true,
            message: "Enter phone number!",
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
            message: "Enter password!",
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <button
          type="submit"
          className="w-full mt-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2 px-4 rounded"
        >
          Submit
        </button>
      </Form.Item>
    </Form>
  </div>
);
export default Login;
