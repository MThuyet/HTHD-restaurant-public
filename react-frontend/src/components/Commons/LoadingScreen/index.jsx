import React, { useEffect, useState } from 'react';
import { Spin } from 'antd';
import logo from '../../../assets/common/logo.webp';

const loadingTexts = [
    'Đang tải dữ liệu...',
    'Vui lòng đợi trong giây lát...',
    'Đang chuẩn bị món ăn ngon...',
    'Sắp hoàn tất...',
];

const LoadingScreen = () => {
    const [textIndex, setTextIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setTextIndex((prevIndex) => (prevIndex + 1) % loadingTexts.length);
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="fixed inset-0 bg-white/80 backdrop-blur-sm z-50 flex flex-col items-center justify-center">
            <div className="animate-bounce mb-4">
                <img src={logo} alt="Logo" className="w-24 h-24 object-contain rounded-lg" />
            </div>
            <div className="flex flex-col items-center">
                <Spin size="large" />
                <div className="mt-4 h-8">
                    <p className="text-lg font-medium text-gray-700 text-center min-h-[28px]">
                        {loadingTexts[textIndex]}
                    </p>
                </div>
                <div className="mt-2 w-64 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-primary-600 rounded-full animate-loading-progress"></div>
                </div>
            </div>
            <div className="absolute bottom-8 left-0 right-0 text-center">
                <p className="text-sm text-gray-500">© 2024 HTHD Restaurant</p>
            </div>
        </div>
    );
};

export default LoadingScreen;
