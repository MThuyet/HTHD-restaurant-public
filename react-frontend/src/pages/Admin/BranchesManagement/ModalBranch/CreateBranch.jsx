import { Button, Col, Form, Input, App, Row, Switch, TimePicker, Modal } from 'antd';
import dayjs from 'dayjs';
import { createBranchAPI } from '~/apis';
import { useState } from 'react';

const CreateBranch = ({ isOpen, setIsOpen, refreshTable }) => {
    const [form] = Form.useForm();
    const { message, notification } = App.useApp();
    const [isLoading, setIsLoading] = useState(false);

    const handleCancel = () => {
        form.resetFields();
        setIsOpen(false);
    };

    const onFinish = async (values) => {
        // format time
        values.open_time = dayjs(values.open_time).format('HH:mm');
        values.close_time = dayjs(values.close_time).format('HH:mm');

        try {
            setIsLoading(true);
            await createBranchAPI(values);
            message.success('Tạo chi nhánh thành công!');
            refreshTable();
            form.resetFields();
            setIsOpen(false);
        } catch (error) {
            notification.error({
                message: error.response.data.message,
                duration: 3,
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Modal
            onCancel={handleCancel}
            centered
            footer={null}
            open={isOpen}
            width={{
                xs: '90%',
                sm: '80%',
                md: '60%',
                lg: '60%',
                xl: '60%',
            }}
        >
            <Form form={form} onFinish={onFinish} layout="vertical" className="mt-3 p-3">
                <Row gutter={32}>
                    <Col span={12}>
                        <Form.Item
                            name="bra_name"
                            label={<span className="!font-semibold">Tên chi nhánh</span>}
                            rules={[{ required: true, message: 'Vui lòng nhập tên chi nhánh!' }]}
                        >
                            <Input size="large" placeholder="Nhập tên chi nhánh" />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            name="address"
                            label={<span className="!font-semibold">Địa chỉ</span>}
                            rules={[{ required: true, message: 'Vui lòng nhập địa chỉ!' }]}
                        >
                            <Input size="large" placeholder="Nhập địa chỉ chi nhánh" />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            name="phone_number1"
                            label={<span className="!font-semibold">Số điện thoại chính</span>}
                            rules={[
                                { required: true, message: 'Vui lòng nhập số điện thoại chính!' },
                                { pattern: /^[0-9]+$/, message: 'Số điện thoại không hợp lệ!' },
                            ]}
                        >
                            <Input size="large" placeholder="Nhập số điện thoại chính" />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            name="phone_number2"
                            label={<span className="!font-semibold">Số điện thoại phụ</span>}
                            rules={[{ pattern: /^[0-9]+$/, message: 'Số điện thoại không hợp lệ!' }]}
                        >
                            <Input size="large" placeholder="Nhập số điện thoại phụ" />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            name="email"
                            label={<span className="!font-semibold">Email</span>}
                            rules={[{ required: true, type: 'email', message: 'Email không hợp lệ!' }]}
                        >
                            <Input size="large" placeholder="Nhập email" />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            name="tax_code"
                            label={<span className="!font-semibold">Mã số thuế</span>}
                            rules={[{ required: true, message: 'Vui lòng nhập mã số thuế' }]}
                        >
                            <Input size="large" placeholder="Nhập mã số thuế" />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            name="open_time"
                            label={<span className="!font-semibold">Giờ mở cửa</span>}
                            rules={[{ required: true, message: 'Vui lòng chọn giờ mở cửa!' }]}
                        >
                            <TimePicker size="large" format="HH:mm" style={{ width: '100%' }} />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            name="close_time"
                            label={<span className="!font-semibold">Giờ đóng cửa</span>}
                            rules={[{ required: true, message: 'Vui lòng chọn giờ đóng cửa!' }]}
                        >
                            <TimePicker size="large" format="HH:mm" style={{ width: '100%' }} />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            name="frame_code"
                            label={<span className="!font-semibold">Mã khung giờ</span>}
                            rules={[{ required: true, message: 'Vui lòng nhập mã khung giờ!' }]}
                        >
                            <Input size="large" placeholder="Nhập mã khung giờ" />
                        </Form.Item>
                    </Col>
                    <Col span={24}>
                        <Form.Item
                            name="active"
                            label={<span className="!font-semibold">Trạng thái hoạt động</span>}
                            valuePropName="checked"
                            initialValue={true}
                        >
                            <Switch />
                        </Form.Item>
                    </Col>
                </Row>
                <div className="flex justify-end">
                    <Button className="interceptor-loading" loading={isLoading} type="primary" htmlType="submit">
                        Tạo mới
                    </Button>
                </div>
            </Form>
        </Modal>
    );
};

export default CreateBranch;
