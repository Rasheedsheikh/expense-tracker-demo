import React from "react";
import {
  Form,
  Input,
  Button,
  Checkbox,
  Row,
  Col,
  Typography,
  Avatar,
} from "antd";
import {
  UserOutlined,
  LockOutlined,
  MailOutlined,
} from "@ant-design/icons";
import { message } from "antd";
import axios from "axios";
import { BASE_URL } from "../constant/constant";
import { toast } from 'react-toastify';

const { Title, Text, Link } = Typography;

const Register = () => {
  const [form] = Form.useForm();
// api call made to register the user from local host by rasheed

const onFinish = async (values) => {
    try {
      const response = await axios.post(`${BASE_URL}auth/register`, {
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        password: values.password,
      });
      alert("Registration successful!");
      form.resetFields(); // Optionally reset the form after success
    }  catch (error) {
        if (error.response && error.response.data) {
          const { statusCode, message: errorMessage } = error.response.data;
      
          if (statusCode === 409) {
            alert(errorMessage || "Email already registered");
          } else {
            alert(errorMessage || "Registration failed. Please try again.");
          }
        } else {
          message.error("An unexpected error occurred. Please try again.");
        }}
      
  };
  
  
  

  return (
    <Row justify="center" style={{ padding: "50px 0" }}>
      <Col xs={22} sm={16} md={12} lg={8}>
        <div style={{ textAlign: "center", marginBottom: 24 }}>
          <Avatar
            size={64}
            style={{ backgroundColor: "#1890ff", marginBottom: 16 }}
            icon={<LockOutlined />}
          />
          <Title level={2}>Sign Up</Title>
        </div>
        <Form
          form={form}
          name="register"
          onFinish={onFinish}
          scrollToFirstError
          layout="vertical"
        >
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="firstName"
                label="First Name"
                rules={[
                  {
                    required: true,
                    message: "Please input your first name!",
                  },
                ]}
              >
                <Input prefix={<UserOutlined />} placeholder="First Name" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="lastName"
                label="Last Name"
                rules={[
                  {
                    required: true,
                    message: "Please input your last name!",
                  },
                ]}
              >
                <Input prefix={<UserOutlined />} placeholder="Last Name" />
              </Form.Item>
            </Col>
          </Row>

          <Form.Item
            name="email"
            label="Email Address"
            rules={[
              {
                type: "email",
                message: "The input is not valid E-mail!",
              },
              {
                required: true,
                message: "Please input your E-mail!",
              },
            ]}
          >
            <Input prefix={<MailOutlined />} placeholder="Email Address" />
          </Form.Item>

          <Form.Item
            name="password"
            label="Password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
            hasFeedback
          >
            <Input.Password prefix={<LockOutlined />} placeholder="Password" />
          </Form.Item>

          <Form.Item
            name="confirm"
            label="Confirm Password"
            dependencies={["password"]}
            hasFeedback
            rules={[
              {
                required: true,
                message: "Please confirm your password!",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error("The two passwords do not match!")
                  );
                },
              }),
            ]}
          >
            <Input.Password
              prefix={<LockOutlined />}
              placeholder="Confirm Password"
            />
          </Form.Item>

    

          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Sign Up
            </Button>
          </Form.Item>

          <Form.Item style={{ textAlign: "center" }}>
            <Text>
              Already have an account? <Link href="/">Sign in</Link>
            </Text>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};

export default Register;
