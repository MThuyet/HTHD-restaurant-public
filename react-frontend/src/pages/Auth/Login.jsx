import React from 'react';
import { UserOutlined } from '@ant-design/icons';

const Login = () => {
    return (
        <div className="LoginPage w-205 h-158 float-right">
            <div className="LoginLogo flex flex-row items-center">
                <img
                    className="LoginLogo-img LoginLogo__img--margin w-10"
                    src="../src/assets/auth/imgs/logo/logo.webp"
                    alt=""
                />
                <span className="LoginLogo_name LoginLogo__name--margin text-sm font-extrabold">HTHD-Restaurant</span>
            </div>
            <div className="LoginForm">
                <h1 className="LoginForm__title font-bold text-5xl">Đăng nhập</h1>
                <h3 className="LoginForm__message font-bold text-4xl">Chào mừng bạn quay trở lại</h3>
                <div className="LoginForm__info">
                    <div className="LoginForm__username flex flex-col ">
                        <label className="LoginForm__username__label text-sm/5 font-bold">
                            <UserOutlined className="LoginForm__username__label__icon" />
                            Tài khoản
                        </label>
                        <div className="LoginForm__username__input__box w-116 h-10 border-1 border-solid border-black rounded-md">
                            <input
                                className="LoginForm__username__input w-60 "
                                type="text"
                                placeholder="Nhập tên tài khoản"
                            />
                        </div>
                    </div>
                    <div className="LoginForm__password flex flex-col">
                        <label className="LoginForm__password__label flex flex-row  text-sm/5 font-bold">
                            <img
                                className="LoginForm__password__label__icon w-4 h-5"
                                src="../src/assets/auth/imgs/logo/lockIcon.png"
                                alt=""
                            />
                            Mật khẩu
                        </label>
                        <div className="LoginForm__password__input__box w-116 h-10 border-1 border-solid border-black rounded-md">
                            <input
                                className="LoginForm__password__input w-60 "
                                type="password"
                                placeholder="Nhập mật khẩu"
                            />
                        </div>
                    </div>
                </div>
                <div className="LoginForm__btn flex flex-row">
                    <div className="LoginForm__btn__login">
                        <button className="LoginForm__btn__login--color w-40 h-10 hover:text-white font-bold border-1 rounded-md">
                            Đăng nhập
                        </button>
                    </div>
                    <div className="LoginForm__btn__forgot">
                        <button className="LoginForm__btn__forgot--color w-40 h-10  border-1 font-bold rounded-md">
                            Quên mật khẩu?
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
