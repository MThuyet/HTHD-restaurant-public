import { Drawer } from 'antd';
import SiderBar from './index';
import { IoIosClose } from 'react-icons/io';

const DrawerSiderbar = ({ open, onClose }) => {
    return (
        <Drawer
            title={<div className="text-white text-2xl font-bold">Menu</div>}
            className="!bg-[rgba(0,0,0,0.8)] !text-white"
            placement="right"
            onClose={onClose}
            open={open}
            width={300}
            closable={false}
        >
            <SiderBar />
        </Drawer>
    );
};

export default DrawerSiderbar;
