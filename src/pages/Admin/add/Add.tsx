import { Button, Form, Input, message, Select, Space } from "antd";
import { Typography } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { upload } from "../../../api/uploadImage";
import UploadImage from "../../../components/UploadImage";
import { ProductType } from "../../../type/product";

const { Title, Text } = Typography;
const { Option } = Select;
const { TextArea } = Input;

type Props = {
    categories: any[];
    onAdd: (product: ProductType) => void;
};
const AddProducts = (props: Props) => {
    const [previewImage, setPreviewImage] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    const navigate = useNavigate();

    const handleChangeImage = (event: any) => {
        const file = event.target.files[0];
        console.log(file);

        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setPreviewImage(reader.result);
        };
    };
    return (
        <div>
            <h1 className="tw-text-2xl tw-text-gray-500 tw-font-bold ">Thêm sản phẩm mới</h1>

            <Form
                className="add-form tw-mt-5 tw-grid tw-grid-cols-3 tw-gap-11 tw-px-10 tw-bg-gray-50 tw-py-10"
                onFinish={(values) => {
                    props.onAdd(values);
                    upload(previewImage);
                    navigate("/admin");
                    message.success("Thêm thành công");
                }}
                name="addForm"
                onFinishFailed={(e) => console.log("failed")}
                layout="vertical"
            >
                <Form.Item className="upload-form" label="" name="img">
                    <UploadImage previewImage="" />
                </Form.Item>
                <div className="product-form tw-col-span-2">
                    <div className=" tw-text-sky-900 tw-text-xl tw-font-normal tw-pb-6 tw-border-b-2">
                        Thông tin sản phẩm
                    </div>
                    <Form.Item
                        className="name"
                        label="Tên sản phẩm"
                        name="name"
                        rules={[{ required: true, message: "Please input name!" }]}
                    >
                        <Input size="large" placeholder="" />
                    </Form.Item>

                    <div className="price tw-grid tw-grid-cols-2 tw-gap-8">
                        <Form.Item
                            className="old-price"
                            label="Giá gốc"
                            name="price"
                            rules={[{ required: true, message: "Please input old price!" }]}
                        >
                            <Input size="large" placeholder="" />
                        </Form.Item>

                        <Form.Item
                            className="sale-price"
                            label="Giá khuyến mại"
                            name="salePrice"
                            rules={[{ required: true, message: "Please input Sale Price !" }]}
                        >
                            <Input size="large" placeholder="" />
                        </Form.Item>
                    </div>

                    <Form.Item
                        className="category"
                        label="Danh mục sản phẩm"
                        name="category"
                        rules={[{ required: true, message: "Please choose one of these!" }]}
                    >
                        <Select size="large" style={{ width: 395 }} allowClear>
                            {props.categories.map((item) => (
                                <Option value={item.id}>{item.name}</Option>
                            ))}
                        </Select>
                    </Form.Item>

                    <Form.Item
                        className="describe"
                        label="Đặc điểm nổi bật"
                        name="describe"
                        rules={[{ required: true, message: "Please input describe!" }]}
                    >
                        <TextArea showCount rows={6} maxLength={1000}></TextArea>
                    </Form.Item>

                    <Form.Item
                        className="detail"
                        label="Mô tả chi tiết"
                        name="detail"
                        rules={[{ required: true, message: "Please input detail!" }]}
                    >
                        <TextArea showCount rows={6} maxLength={1000}></TextArea>
                    </Form.Item>
                    <Form.Item wrapperCol={{ offset: 9, span: 16 }}>
                        <Button className="tw-bg-blue-500 tw-rounded-md tw-px-4" type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </div>
            </Form>
        </div>
    );
};

export default AddProducts;
