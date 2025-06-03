/* eslint-disable no-unused-vars */
import { PlusOutlined, EditOutlined, QuestionCircleOutlined, DeleteOutlined } from '@ant-design/icons';
import { ProTable } from '@ant-design/pro-components';
import { Button, Popconfirm } from 'antd';
import { useRef } from 'react';

const columns = [
    {
        title: 'ID',
        dataIndex: 'id',
        search: false,
    },
    {
        title: 'Danh mục',
        dataIndex: 'category',
        fieldProps: {
            placeholder: 'Chọn danh mục',
        },
        valueEnum: {
            chay: { text: 'Món chay' },
            nuoc: { text: 'Nước uống' },
            man: { text: 'Món ăn mặn' },
            ngot: { text: 'Món ăn ngọt' },
            trangmieng: { text: 'Tráng miệng' },
        },
    },
    {
        title: 'Tên món',
        dataIndex: 'name',
        width: 350,
        fieldProps: {
            placeholder: 'Nhập tên món cần tìm...',
        },
    },
    {
        title: 'Giá tiền (VND)',
        dataIndex: 'price',
        width: 150,
        hideInSearch: true,
        render(dom, entity, index, action, schema) {
            return `${new Intl.NumberFormat('vi-VN', {
                style: 'currency',
                currency: 'VND',
            }).format(entity?.price)}`;
        },
    },
    {
        title: 'Trạng thái',
        dataIndex: 'status',
        width: 150,
        fieldProps: {
            placeholder: 'Chọn trạng thái',
            optionRender: (item) => <span style={{ color: item.value == 1 ? 'green' : 'red' }}>{item.label}</span>,
            style: ({ value }) => ({
                color: value == 1 ? 'green' : 'red',
            }),
        },
        valueEnum: {
            1: { text: 'Còn hàng', status: 'Success' },
            0: { text: 'Hết hàng', status: 'Error' },
        },
    },
    {
        title: 'Tổng lượt đặt',
        dataIndex: 'orders',
        width: 120,
        hideInSearch: true,
    },
    {
        title: 'Hành động',
        width: 120,
        hideInSearch: true,
        render: (dom, entity, index, action, schema) => {
            return (
                <div>
                    <Button
                        style={{
                            marginRight: '10px',
                            borderColor: 'rgb(231, 112, 13',
                        }}
                    >
                        <EditOutlined style={{ color: 'rgb(231, 112, 13' }} />
                    </Button>

                    <Popconfirm
                        placement="leftTop"
                        title="Delete book"
                        description="Bạn có chắc muốn xóa món này?"
                        okText="Xóa"
                        cancelText="Quay lại"
                        icon={<QuestionCircleOutlined style={{ color: 'red' }} />}
                    >
                        <Button style={{ borderColor: '#f5222d' }}>
                            <DeleteOutlined style={{ color: '#f5222d' }} />
                        </Button>
                    </Popconfirm>
                </div>
            );
        },
    },
];

const fakeData = [
    {
        id: 1,
        category: 'chay',
        name: 'Đậu hũ chiên',
        price: 25000,
        status: 1,
        orders: 15,
    },
    {
        id: 2,
        category: 'nuoc',
        name: 'Trà đào cam sả',
        price: 35000,
        status: 1,
        orders: 40,
    },
    {
        id: 3,
        category: 'man',
        name: 'Cơm gà xối mỡ',
        price: 45000,
        status: 0,
        orders: 20,
    },
    {
        id: 4,
        category: 'ngot',
        name: 'Cơm gà xối mỡ',
        price: 45000,
        status: 0,
        orders: 20,
    },
    {
        id: 5,
        category: 'trangmieng',
        name: 'Cơm gà xối mỡ',
        price: 45000,
        status: 0,
        orders: 20,
    },
];

const MenuManagement = () => {
    const actionRef = useRef();

    return (
        <ProTable
            columns={columns}
            actionRef={actionRef}
            cardBordered
            dataSource={fakeData}
            request={async (params, sort, filter) => {}}
            editable={{
                type: 'multiple',
            }}
            rowKey="id"
            search={{
                resetText: 'Hoàn tác',
                labelWidth: 'auto',
            }}
            options={{
                density: false,
            }}
            form={{
                syncToUrl: (values, type) => {
                    if (type === 'get') {
                        return {
                            ...values,
                            created_at: [values.startTime, values.endTime],
                        };
                    }
                    return values;
                },
            }}
            pagination={{
                pageSize: 5,
                onChange: (page) => console.log(page),
            }}
            dateFormatter="string"
            headerTitle="Danh sách món ăn"
            toolBarRender={() => [
                <Button key="button" icon={<PlusOutlined />} type="primary">
                    Thêm món mới
                </Button>,
            ]}
        />
    );
};

export default MenuManagement;
