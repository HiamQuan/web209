import React from "react";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";
import pay1 from "../../../assets/image/pay1.svg";
import pay2 from "../../../assets/image/pay2.svg";
import pay3 from "../../../assets/image/pay3.svg";
import pay4 from "../../../assets/image/pay1.svg";
import pay5 from "../../../assets/image/pay5.svg";
import dienthoaivui from "../../../assets/dienthoaifooter.svg";
type Props = {};

const Footer = (props: Props) => {
    return (
        <div className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.box}>
                    <div className={styles.pattern_box}>
                        <div className={styles.title}>
                            <h3>Tìm cửa hàng</h3>
                        </div>
                        <div className={styles.content}>
                            <Link to="#">Tìm cửa hàng gần nhất</Link>
                            <Link to="#">Mua hàng từ xa</Link>
                            <span className={styles.red}>Gặp trực tiếp cửa hàng gần nhất (Zalo hoặc gọi điện)</span>
                        </div>
                    </div>
                    <div className={styles.pattern_box}>
                        <div className={styles.title}>
                            <h3>Phương thức thanh toán</h3>
                        </div>
                        <div className={styles.pay}>
                            <img src={pay1} alt="" className={styles.icon}></img>
                            <img src={pay2} alt="" className={styles.icon}></img>
                            <img src={pay3} alt="" className={styles.icon}></img>
                            <img src={pay4} alt="" className={styles.icon}></img>
                            <img src={pay5} alt="" className={styles.icon}></img>
                        </div>
                    </div>
                </div>
                <div className={styles.box}>
                    <div className={styles.pattern_box}>
                        <div className={styles.content}>
                            <Link to="#">Gọi mua hàng: 1800.2044 (8h00 - 22h00)</Link>
                            <Link to="#">Gọi khiếu nại: 1800.2064 (8h00 - 21h00)</Link>
                            <Link to="#">Gọi bảo hành: 1800.2064 (8h00 - 21h00)</Link>
                        </div>
                    </div>
                    <div className={styles.pattern_box}>
                        <div className={styles.title}>
                            <h3>Đối tác dịch vụ bảo hành</h3>
                        </div>
                        <div className={styles.content}>
                            <Link to="#">Điện Thoại - Máy tính</Link>
                        </div>
                    </div>
                    <div className={styles.pattern_box}>
                        <div className={styles.title}>
                            <h3>Trung tâm bảo hành uỷ quyền Apple</h3>
                        </div>
                        <div className={styles.content}>
                            <img src={dienthoaivui} className={styles.subImg} alt="" />
                        </div>
                    </div>
                </div>
                <div className={styles.box}>
                    <div className={`${styles.pattern_box} ${styles.padding}`}>
                        <div className={styles.content}>
                            <Link to="#">Mua hàng và thanh toán Online</Link>
                            <Link to="#">Mua hàng trả góp Online</Link>
                            <Link to="#">Tra thông tin đơn hàng</Link>
                            <Link to="#">Tra điểm Smember</Link>
                            <Link to="#">Tra thông tin bảo hành</Link>
                            <Link to="#">Tra cứu hoá đơn VAT điện tử</Link>
                            <Link to="#">Trung tâm bảo hành chính hãng</Link>
                            <Link to="#">Quy định về việc sao lưu dữ liệu</Link>
                            <Link to="#">Dịch vụ bảo hành điện thoại</Link>
                        </div>
                    </div>
                </div>
                <div className={styles.box}>
                    <div className={`${styles.pattern_box} ${styles.padding}`}>
                        <div className={styles.content}>
                            <Link to="#">Quy chế hoạt động</Link>
                            <Link to="#">Chính sách Bảo hành</Link>
                            <Link to="#">Liên hệ hợp tác kinh doanh</Link>
                            <Link to="#">Khách hàng doanh nghiệp (B2B)</Link>
                            <Link to="#">Ưu đãi thanh toán</Link>
                            <Link to="#">Tuyển dụng</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.sub_footer}>
                <div className={`${styles.container} ${styles.bottom_footer}`}>
                    <div className={styles.box_sub}>
                        <div className={styles.content}>
                            <span>Điện thoại iPhone 13 Điện thoại iPhone 12 Điện thoại iPhone 11</span>
                            <span>Điện thoại iPhone 13 Pro Max Điện thoại iPhone 11 Pro Max</span>
                            <span>iPhone cũ giá rẻ iPhone 13 cũ iPhone 12 cũ iPhone 11 cũ</span>
                        </div>
                    </div>
                    <div className={styles.box_sub}>
                        <div className={styles.content}>
                            <span>Điện thoại iPhone Điện thoại Samsung Điện thoại Samsung A </span>
                            <span>Điện thoại OPPO Điện thoại Xiaomi Điện thoại Vivo Điện thoại Nokia </span>
                            <span>Samsung Fold 3 Samsung S22 Samsung A73 Samsung A53 </span>
                        </div>
                    </div>
                    <div className={styles.box_sub}>
                        <div className={styles.content}>
                            <span>Laptop Laptop HP Laptop Dell Laptop Acer </span>
                            <span>Microsoft Surface Laptop Lenovo Laptop Asus </span>
                            <span>Máy tính để bàn Màn hình máy tính Camera Camera hành trình</span>
                        </div>
                    </div>
                    <div className={styles.content}>
                        <span className={styles.text_footer}>
                            Công ty TNHH Thương mại và dịch vụ kỹ thuật DIỆU PHÚC - GPĐKKD: 0316172372 do sở KH & ĐT TP.
                            HCM cấp ngày 02/03/2020. Địa chỉ: 350-352 Võ Văn Kiệt, Phường Cô Giang, Quận 1, Thành phố Hồ
                            Chí Minh, Việt Nam. Điện thoại: 028.7108.9666.
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Footer;
