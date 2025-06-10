import { App, Button } from 'antd';
import { testAPI } from '~/apis';

const Home = () => {
    const { message } = App.useApp();

    // Handle API call on button click
    const handleClick = async () => {
        // Show loading message
        const hide = message.loading('Đang call API', 0);

        try {
            const res = await testAPI();
            hide(); // Hide loading message
            message.success('Call API thành công');
            console.log('res', res);
        } catch (error) {
            hide(); // Hide loading message
            message.error('Call API thất bại');
            console.log('error', error);
        }
    };

    return (
        <div>
            <Button className="interceptor-loading" onClick={handleClick}>
                Click
            </Button>
        </div>
    );
};

export default Home;
