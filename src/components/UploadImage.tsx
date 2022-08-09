import React from "react";
import styled from "styled-components";
import { Typography, Button, Input } from "antd";
import { upload } from "../api/uploadImage";
import { AddIcon } from "../assets/image/Frame-1";

const { TextArea } = Input;

type Props = {
    previewImage: string;
};
const UploadImage = (props: Props) => {
    const [base64Image, setBase64Image] = React.useState("");
    const [uploadedImage, setUploadedImage] = React.useState(props.previewImage ? props.previewImage : "");

    console.log(props.previewImage);
    const handleChangeImage = (event: any) => {
        const file = event.target.files[0];
        // previewFile(file)
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setUploadedImage(reader.result as string);
        };
    };

    const uploadImage = async (base64Image: string) => {
        try {
            const res = await upload(base64Image);
            const data = res.data;
            console.log(data);
            setUploadedImage(data.url);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <Container>
            <UploadWrapper
                className="tw-bg-gray-50 tw-rounded-xl tw-py-32 tw-px-10 uploadImage"
                style={{ border: "none" }}
            >
                <UploadIcon>
                    <div className="add-button tw-flex tw-flex-col tw-items-center tw-gap-6 tw-cursor-pointer">
                        <AddIcon />
                        <span className="tw-text-3xl tw-text-gray-500 tw-font-medium">Thêm ảnh</span>
                    </div>

                    <input
                        type="file"
                        accept="image/png, image/jpg, image/jpeg, image/gif"
                        name="img"
                        onChange={handleChangeImage}
                        hidden
                    />
                </UploadIcon>

                {uploadedImage && <ImagePreview style={{}} src={uploadedImage} alt="Image" />}
            </UploadWrapper>
            <TextArea
                showCount
                maxLength={100}
                className="tw-mt-5 tw-placeholder-gray-500 tw-font-semibold tw-rounded-xl"
                rows={4}
                placeholder="Mô tả ngắn:"
            />
        </Container>
    );
};

const Container = styled.div``;

const Label = styled.div`
    font-weight: bold;
    font-size: 13px;
    text-align: left;
`;

const UploadWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 200px;
    border: 1px dashed gray;
`;

const UploadIcon = styled.label`
    input {
        display: none;
    }
`;

const ImagePreview = styled.img`
    width: 100%;
`;

export default UploadImage;
