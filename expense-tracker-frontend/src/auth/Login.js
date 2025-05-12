import React from "react";
import { LockOutlined, MailOutlined } from "@ant-design/icons";
import {
  Avatar,
  Button,
  Checkbox,
  Form,
  Input,
  Typography,
  Row,
  Col,
} from "antd";
import { message } from "antd";
import axios from "axios";
import { BASE_URL } from "../constant/constant";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

const { Title, Text, Link } = Typography;

const Login = () => {
    const navigate= useNavigate()
    const onFinish = async (values) => {
        try {
          const response = await axios.post(`${BASE_URL}auth/login`, {
            email: values.email,
            password: values.password,
          });
          navigate("/expenseTracking")
          alert("Login successful!");
        } catch (error) {
          console.error("Login error:", error);
          alert("Login failed. Please check your credentials.");
        }
      };

  return (
    <Row style={{ minHeight: "100vh" }}>
      <Col
        span={12}
        style={{
          backgroundImage: "url(https://www.wellybox.com/wp-content/uploads/2021/01/6-business-expense-tracker-1536x1536.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <Col
        span={12}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "0 50px",
        }}
      >
        <div style={{ maxWidth: 400, width: "100%" }}>
          <div style={{ textAlign: "center", marginBottom: 24 }}>
            <Avatar
              style={{
                backgroundColor: "#1890ff",
                marginBottom: 16,
              }}
              icon={<LockOutlined />}
            />
            <Title level={2}>Sign In</Title>
          </div>
          <Form
            name="login"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            layout="vertical"
          >
            <Form.Item
              name="email"
              label="Email Address"
              rules={[
                { required: true, message: "Please input your email!" },
                { type: "email", message: "Please enter a valid email!" },
              ]}
            >
              <Input
                prefix={<MailOutlined />}
                placeholder="Email Address"
                autoComplete="email"
              />
            </Form.Item>

            <Form.Item
              name="password"
              label="Password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password
                prefix={<LockOutlined />}
                placeholder="Password"
                autoComplete="current-password"
              />
            </Form.Item>

            <Form.Item>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

       
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                style={{ width: "100%" }}
              >
                Sign In
              </Button>
            </Form.Item>

            <Form.Item style={{ textAlign: "center" }}>
              <Text>
                Don't have an account?{" "}
                <Link href="/register">Sign Up</Link>
              </Text>
            </Form.Item>
          </Form>
        </div>
      </Col>
    </Row>
  );
};

export default Login;
