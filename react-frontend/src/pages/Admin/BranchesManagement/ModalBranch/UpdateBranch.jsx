import { Button, Col, Form, Input, App, Row, Switch, TimePicker, Modal } from 'antd';
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import { updateBranchAPI } from '~/apis';
import isEqual from 'lodash/isEqual';

const UpdateBranch = ({ isOpen, setIsOpen, refetch, data, setDataModalUpdateBranch }) => {
    const [form] = Form.useForm();
    const { message, notification } = App.useApp();
    const [isLoading, setIsLoading] = useState(false);

    // gán dữ liệu có sẵn vào cho form
    useEffect(() => {
        if (data) {
            form.setFieldsValue({
                bra_name: data.bra_name,
                phone_number1: data.phone_number1,
                phone_number2: data.phone_number2,
                email: data.email,
                address: data.address,
                open_time: dayjs(data.open_time, 'HH:mm'),
                close_time: dayjs(data.close_time, 'HH:mm'),
                tax_code: data.tax_code,
                frame_code: data.frame_code,
                active: data.active,
            });
        }
    }, [data, form]);

    // xử lý khi nhấn hủy bỏ
    const handleCancel = () => {
        setDataModalUpdateBranch(null);
        form.resetFields();
        setIsOpen(false);
    };

    // khi ấn cập nhật
    const onFinish = async (values) => {
        // format dữ liệu mới
        const newData = {
            ...values,
            open_time: dayjs(values.open_time).format('HH:mm'),
            close_time: dayjs(values.close_time).format('HH:mm'),
        };

        // format dữ liệu cũ để so sánh
        const oldData = {
            bra_name: data?.bra_name,
            phone_number1: data?.phone_number1,
            phone_number2: data?.phone_number2,
            email: data?.email,
            address: data?.address,
            open_time: dayjs(data?.open_time, 'HH:mm').format('HH:mm'),
            close_time: dayjs(data?.close_time, 'HH:mm').format('HH:mm'),
            tax_code: data?.tax_code,
            frame_code: data?.frame_code,
            active: data?.active,
        };

        // so sánh dữ liệu mới và cũ
        if (isEqual(newData, oldData)) {
            message.info('Không có thay đổi nào để cập nhật!');
            return;
        }

        // nếu dữ liệu mới và cũ khác nhau thì thực hiện cập nhật
        try {
            setIsLoading(true);
            const response = await updateBranchAPI(data?.bra_code, newData);
            setDataModalUpdateBranch(response.data);
            message.success('Cập nhật chi nhánh thành công!');
            refetch();
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
            maskClosable={false}
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
                <div className="flex justify-end gap-2">
                    <Button onClick={handleCancel}>Hủy bỏ</Button>
                    <Button className="interceptor-loading" loading={isLoading} type="primary" htmlType="submit">
                        Cập nhật
                    </Button>
                </div>
            </Form>
        </Modal>
    );
};

export default UpdateBranch;
