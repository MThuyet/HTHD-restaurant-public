import { Button } from 'antd';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { testAPI } from '~/apis';

const Home = () => {
    // data để lưu api
    const [data, setData] = useState(null);

    // định nghĩa hàm gọi api
    const getData = async () => {
        const res = await testAPI();
        if (res.status === 200) {
            setData(res.data);
        }
    };

    useEffect(() => {
        // gọi hàm ngay khi component mount
        getData();
    }, []);

    // cách call api khi dùng nút bấm hoặc link
    const handleClick = () => {
        // xử lý logic...
        console.log('Click');

        // call api (không cần catch lỗi vì đã handle chung trong axios interceptor)
        toast
            .promise(testAPI(), {
                pending: 'Đang gọi API...',
            })
            .then((res) => {
                // xử lý khi api gọi thành công
                console.log(res);
                toast.success('Thông báo thành công');
            });
    };
    return (
        <div>
            Click để call API
            <p>{data}</p>
            <Button onClick={handleClick}>Click</Button>
        </div>
    );
};

export default Home;
