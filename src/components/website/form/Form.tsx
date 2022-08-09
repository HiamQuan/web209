import { Input, InputNumber, Button, Form, message } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import fb from "../../../assets/image/fb.png";
import gg from "../../../assets/image/gg.png";
import logo from "../../../assets/image/logo.png";
import formSlice, { signIn, signUp } from "./FormSlice";

const FormSign = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const sign = (user: any) => {
        if (location.pathname === "/signup")
            return dispatch(signUp(user))
                .unwrap()
                .then((value: any) => {
                    message.success("Đăng ký thành công");
                    navigate("/signin");
                })
                .catch((error: any) => console.log(error));
        if (location.pathname === "/signin")
            return dispatch(signIn(user)).then(() => {
                message.success("Đăng nhập thành công");
                navigate("/");
            });
    };
    return (
        <div>
            <div>
                <Container className="signin">
                    <Login>
                        <Wraper>
                            <LoginForm>
                                <Form
                                    name="basic"
                                    labelCol={{ span: 4 }}
                                    wrapperCol={{ span: 20 }}
                                    initialValues={{ remember: true }}
                                    onFinish={sign}
                                    autoComplete="off"
                                >
                                    <Form.Item
                                        label="Email"
                                        name="email"
                                        rules={[
                                            { required: true, message: "Please input your E-mail!" },
                                            { type: "email" || "text", message: "Email is not a valid E-mail!" },
                                        ]}
                                    >
                                        <Input style={{ width: 410, height: 48 }} minLength={10} />
                                    </Form.Item>
                                    <Form.Item
                                        label="Mật khẩu"
                                        name="password"
                                        rules={[{ required: true, message: "Please input your password!" }]}
                                        labelCol={{ span: 4 }}
                                    >
                                        <Input.Password style={{ width: 410, height: 48 }} />
                                    </Form.Item>

                                    <Form.Item wrapperCol={{ span: 16 }} style={{ marginTop: 45 }}>
                                        <Button
                                            type="primary"
                                            htmlType="submit"
                                            danger
                                            style={{ width: 510, height: 48, borderRadius: 5 }}
                                        >
                                            Đăng ký
                                        </Button>
                                    </Form.Item>
                                </Form>
                                <MainLogin>
                                    <p>Hoặc đăng nhập bằng</p>
                                    <ul style={{ padding: 0 }}>
                                        <LoginWith>
                                            <Link to="">
                                                <img src={fb} alt="" style={{ width: "70%" }} />
                                            </Link>
                                        </LoginWith>
                                        <LoginWith>
                                            <Link to="">
                                                <img src={gg} alt="" style={{ width: "70%" }} />
                                            </Link>
                                        </LoginWith>
                                    </ul>
                                </MainLogin>
                            </LoginForm>
                            <LoginLogo>
                                <img src={logo} alt="" width={150} />
                            </LoginLogo>
                        </Wraper>
                    </Login>
                </Container>
            </div>
        </div>
    );
};
const Container = styled.div`
    background: #e5e5e5;
    min-height: 100vh;
`;
const Login = styled.div`
    padding-top: 100px;
`;
const Wraper = styled.div`
    background: #f8f8f8;
    display: flex;
    align-items: center;
    max-width: 800px;
    margin: auto;
    border-radius: 10px;
`;
const LoginForm = styled.div`
    background: #fff;
    padding: 4em 3em;
    border-radius: 10px;
`;
const MainLogin = styled.div`
    margin-top: 40px;
    text-align: center;
`;
const LoginWith = styled.li`
    display: inline-block;
`;
const LoginLogo = styled.div`
    padding: 0 50px;
`;

export default FormSign;
