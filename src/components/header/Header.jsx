import React from "react";
import styled from "styled-components";

const StHeader = styled.div`
    width:1200px;
    height: 50px;
    border: #eee 1px solid;
    align-items: center;
    display: flex;
`;

const Header = () => {
    return(
        <div className="header">
        <StHeader>안녕 이건 리덕스 툴킷 투두리스트 No.1 </StHeader>
        </div>
    )
}

export default Header;

