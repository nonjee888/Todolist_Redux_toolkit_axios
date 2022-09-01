import React from "react";
import Header from "../header/Header";
import Form from "../form/Form";
import List from "../list/List";
import styled from "styled-components";

const StLayout = styled.div`
    max-width:1200px;
    min-width: 800px;
    height: 800px;
    margin: auto;
`;

const Layout = () => {
    return (
        <StLayout>
            <Header />
            <Form />
            <List />
        </StLayout>
    )
}

export default Layout;