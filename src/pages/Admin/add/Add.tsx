import { Input, Select, Space } from "antd";
import { Typography } from "antd";
import { useState } from "react";
import UploadImage from "../../../components/UploadImage";

const { Title, Text } = Typography;
const { Option } = Select;
const { TextArea } = Input;

type Props = {
    categories: any[];
};
const AddProducts = (props: Props) => {
    const [name, setName] = useState("");
    const handleChangeCurrency = (value: any) => {
        const text = value.toLocaleString();
        setName(text);
    };

    function numberWithCommas(x: number) {
        var parts = x.toString().split(".");
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return parts.join(".");
    }
    return (
        <div>
            <h1 className="tw-text-2xl tw-text-gray-500 tw-font-bold ">Thêm sản phẩm mới</h1>

            <form className="add-form tw-mt-5 tw-grid tw-grid-cols-3 tw-gap-11 tw-px-10 tw-bg-gray-50 tw-py-10">
                <div className="upload-form">
                    <UploadImage />
                </div>
                <div className="product-form tw-col-span-2">
                    <div className=" tw-text-sky-900 tw-text-xl tw-font-normal tw-pb-6 tw-border-b-2">
                        Thông tin sản phẩm
                    </div>
                    <Space direction="vertical" size={20} style={{ display: "flex" }}>
                        <div className="name">
                            <label htmlFor="" className="tw-my-2">
                                Tên sản phẩm
                            </label>
                            <Input
                                value={name}
                                onChange={(text) => handleChangeCurrency(text.target.value)}
                                size="large"
                                placeholder=""
                            />
                        </div>

                        <div className="price tw-grid tw-grid-cols-2 tw-gap-8">
                            <div className="old-price">
                                <span className="tw-text-gray-500">Giá gốc</span>
                                <Input size="large" placeholder="" />
                            </div>

                            <div className="sale-price">
                                <span className="tw-text-gray-500">Giá khuyến mãi</span>
                                <Input size="large" placeholder="" />
                            </div>
                        </div>

                        <div className="category">
                            <span className="tw-text-gray-500">Danh mục sản phẩm</span>
                            <br />
                            <Select defaultValue="..." size="large" style={{ width: 395 }} allowClear>
                                {props.categories.map((item) => (
                                    <Option value={item.id}>{item.name}</Option>
                                ))}
                            </Select>
                        </div>

                        <div className="describe">
                            <span className="tw-text-gray-500">Đặc điểm nổi bật</span>
                            <TextArea showCount rows={6} maxLength={1000}></TextArea>
                        </div>

                        <div className="detail">
                            <span className="tw-text-gray-500">Mô tả chi tiết</span>
                            <TextArea showCount rows={6} maxLength={1000}></TextArea>
                        </div>
                    </Space>
                </div>
            </form>
        </div>
    );
};

export default AddProducts;
