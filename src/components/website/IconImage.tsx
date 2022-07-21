import React from "react";
import styled from "styled-components";

type Props = {
    src: string;
};

const IconImage = (props: Props) => {
    return (
        <>
            <Icon src={props.src} alt="" className="img-fluid" />
        </>
    );
};

const Icon = styled.img`
    max-width: 1.8em;
    height: auto;
    margin-right: 0.8em;
`;
export default IconImage;
