import { Button, Form, Input, message, Select, Space } from "antd";
import { Typography } from "antd";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { read } from "../../../api/products";
import { upload } from "../../../api/uploadImage";
import UploadImage from "../../../components/UploadImage";
import { ProductType } from "../../../type/product";

const { Title, Text } = Typography;
const { Option } = Select;
const { TextArea } = Input;

type Props = {
    categories: any[];
    onEdit: (product: ProductType, id: number) => void;
};

const EditProducts = (props: Props) => {
    const [product, setProduct] = useState<ProductType>();
    const { id } = useParams();
    const navigate = useNavigate();
    const [previewImage, setPreviewImage] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [form] = Form.useForm();

    const handleChangeImage = (event: any) => {
        const file = event.target.files[0];
        console.log(file);

        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setPreviewImage(reader.result as string);
        };
    };

    const uploadImage = async (base64Image: string) => {
        try {
            const res = await upload(base64Image);
            const data = res.data;
            setImageUrl(data.url);
        } catch (err) {}
    };

    useEffect(() => {
        const getProduct = async () => {
            const { data } = await read(id);
            setProduct(data);
            form.setFieldsValue(data);
        };
        getProduct();
    }, []);
    return (
        <div>
            <h1 className="tw-text-2xl tw-text-gray-500 tw-font-bold ">Thêm sản phẩm mới</h1>

            <Form
                className="add-form tw-mt-5 tw-grid tw-grid-cols-3 tw-gap-11 tw-px-10 tw-bg-gray-50 tw-py-10"
                form={form}
                onFinish={(values) => {
                    props.onEdit(values, id);
                    uploadImage(previewImage);
                    navigate("/admin");
                    message.success("Sửa thành công");
                }}
                name="addForm"
                onFinishFailed={(e) => console.log("failed")}
                layout="vertical"
                initialValues={product}
            >
                <Form.Item className="upload-form" name="img">
                    <UploadImage previewImage={product?.img} />
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
                        <Select defaultValue="Điện thoại" size="large" style={{ width: 395 }} allowClear>
                            {props.categories.map((item) => (
                                <Option value={item.id}>{item.name}</Option>
                            ))}
                        </Select>
                    </Form.Item>

                    <Form.Item
                        className="describe"
                        label="Đặc điểm nổi bật"
                        name="describe"
                        rules={[{ required: true, message: "Please input name!" }]}
                    >
                        <TextArea showCount rows={6} maxLength={1000}></TextArea>
                    </Form.Item>

                    <Form.Item
                        className="detail"
                        label="Mô tả chi tiết"
                        name="detail"
                        rules={[{ required: true, message: "Please input name!" }]}
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

export default EditProducts;
