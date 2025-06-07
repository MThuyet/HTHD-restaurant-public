import { Modal, QRCode, Space } from 'antd';
import logo from '~/assets/logo.webp';

const QrCodeModal = ({ isOpenQrCodeModal, setIsOpenQrCodeModal, valueQr }) => {
    return (
        <Modal open={isOpenQrCodeModal} onCancel={() => setIsOpenQrCodeModal(false)} footer={null}>
            <div className="flex items-center gap-2 border-b-2 pb-3 border-gray-300">
                <img src={logo} alt="logo" className="w-12 h-12 rounded-lg" />
                <span className="text-sm font-bold">HTHD Restaurant</span>
            </div>
            <Space className="!mt-5 flex flex-col items-center" direction="vertical" align="center">
                <span className="text-2xl font-bold">{valueQr.title || 'QR Code'}</span>
                <QRCode value={valueQr.value || '-'} size={250} />
            </Space>
        </Modal>
    );
};

export default QrCodeModal;
