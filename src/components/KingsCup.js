import React from "react";
import styled from 'styled-components';

const KingsCupComponent = styled.div`
    border-radius: 20px;
    width: 300px;
    height: 600px;
    background-color: red;
`;

const KingsCup = () => {
    return (
        <KingsCupComponent/>
    );
}

export default KingsCup;