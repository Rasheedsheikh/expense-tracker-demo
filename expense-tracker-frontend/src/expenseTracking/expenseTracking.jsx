import React, { useState, useEffect } from 'react';
import {
  Layout,
  Typography,
  Button,
  Table,
  Modal,
  Form,
  InputNumber,
  Input,
  Select,
  Popconfirm,
  message,
  Row,
  Col,
  Card,
} from 'antd';
import {
  PlusOutlined,
  DeleteOutlined,
  ArrowUpOutlined,
  ArrowDownOutlined,
} from '@ant-design/icons';
import axios from 'axios';
import { BASE_URL } from '../constant/constant';

import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

const { Header, Content } = Layout;
const { Title, Text } = Typography;
const { Option } = Select;

const ExpensesTable = () => {
  const [form] = Form.useForm();
  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    fetchExpenses();
  }, []);

  const fetchExpenses = async () => {
    try {
      const res = await axios.get(`${BASE_URL}expense-tracking`);
      setExpenses(res.data);
    } catch (err) {
      message.error('Failed to load expenses');
    }
  };

  const handleAdd = async (values) => {
    try {
      setLoading(true);
      await axios.post(`${BASE_URL}expense-tracking`, values);
      message.success('Expense added!');
      form.resetFields();
      setModalVisible(false);
      fetchExpenses();
    } catch {
      message.error('Failed to add expense');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${BASE_URL}expense-tracking/${id}`);
      message.success('Expense deleted!');
      fetchExpenses();
    } catch {
      message.error('Failed to delete expense');
    }
  };

  const getTotal = (type) =>
    expenses
      .filter((e) => e.category === type)
      .reduce((sum, e) => sum + Number(e.amount), 0);

  const columns = [
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
      render: (amt, record) => (
        <Text type={record.category === 'Income' ? 'success' : 'danger'}>
          ₹{amt}
        </Text>
      ),
    },
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Action',
      render: (_, record) => (
        <Popconfirm
          title="Delete this expense?"
          onConfirm={() => handleDelete(record.id)}
        >
          <Button icon={<DeleteOutlined />} danger />
        </Popconfirm>
      ),
    },
  ];


  const exportToPDF = () => {
    const doc = new jsPDF('p', 'mm', 'a4'); 
  
    doc.setFontSize(18);
    doc.text('Expense Report', 14, 22);
  

    doc.setFontSize(12);
    doc.text(`Total Income: ${getTotal('Income')}`, 14, 32);
    doc.text(`Total Expense: ${getTotal('Expense')}`, 14, 40);
  
    const tableColumn = ['Amount', 'Category', 'Description'];
    const tableRows = expenses.map((item) => [
      `${item.amount}`,
      item.category,
      item.description || '-',
    ]);
  
    autoTable(doc, {
      startY: 50,
      head: [tableColumn],
      body: tableRows,
      styles: { fontSize: 10 },
      margin: { top: 10 },
    });
  
    doc.save('expense-report.pdf');
  };

  return (
    <Layout style={{ minHeight: '100vh', background: '#f0f2f5' }}>
      <Header style={{ background: '#fff' }}>
        <Row justify="space-between" align="middle">
          <Title level={3}>Expense Management</Title>
          <Button
            type="primary"
            icon={<PlusOutlined />}
            onClick={() => setModalVisible(true)}
          >
            Add Expense
          </Button>
        </Row>
      </Header>

      <Content style={{ padding: '30px 40px' }}>
        <Row gutter={16} style={{ marginBottom: 24 }}>
          <Col span={12}>
            <Card bordered={false}>
              <Title level={5}>
                <ArrowUpOutlined style={{ color: '#52c41a' }} /> Total Income
              </Title>
              <Text strong style={{ fontSize: 18, color: '#52c41a' }}>
                ₹{getTotal('Income')}
              </Text>
            </Card>
          </Col>
          <Col span={12}>
            <Card bordered={false}>
              <Title level={5}>
                <ArrowDownOutlined style={{ color: '#f5222d' }} /> Total Expense
              </Title>
              <Text strong style={{ fontSize: 18, color: '#f5222d' }}>
                ₹{getTotal('Expense')}
              </Text>
            </Card>
          </Col>
        </Row>
<Row style={{ marginLeft: 8, display:"flex", justifyContent:"flex-end" }}>
        <Button onClick={exportToPDF} type="primary" >
  Export to PDF
</Button>
</Row>


        <Table
          dataSource={expenses}
          columns={columns}
          rowKey="id"
          bordered
          pagination={{ pageSize: 5 }}
        />
      </Content>

      <Modal
        title="Add New Expense"
        open={modalVisible}
        onCancel={() => setModalVisible(false)}
        onOk={() => form.submit()}
        okText="Add"
        confirmLoading={loading}
      >
        <Form
          layout="vertical"
          form={form}
          onFinish={handleAdd}
          initialValues={{ category: 'Expense' }}
        >
          <Form.Item
            name="amount"
            label="Amount"
            rules={[{ required: true, message: 'Please enter amount' }]}
          >
            <InputNumber prefix="₹" style={{ width: '100%' }} />
          </Form.Item>

          <Form.Item
            name="category"
            label="Category"
            rules={[{ required: true, message: 'Please select category' }]}
          >
            <Select>
              <Option value="Income">Income</Option>
              <Option value="Expense">Expense</Option>
            </Select>
          </Form.Item>

          <Form.Item name="description" label="Description">
            <Input.TextArea placeholder="Optional description" rows={3} />
          </Form.Item>
        </Form>
      </Modal>
    </Layout>
  );
};

export default ExpensesTable;
