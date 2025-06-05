import React from 'react';
import { useNavigate } from 'react-router-dom';

const Error404 = () => {
    const navigate = useNavigate();

    return (
        <div>
            <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-amber-700 to-orange-400">
                404
            </h1>
            <h2 className="mt-10 text-2xl font-extrabold text-black">Không tìm thấy trang</h2>

            <button
                onClick={() => navigate('/')}
                className="mt-4 px-6 py-2 bg-amber-700 hover:bg-amber-800 text-white font-extrabold rounded shadow"
            >
                Trở lại trang chủ
            </button>
        </div>
    );
};

export default Error404;
