import React from "react";
import KingsCup from './components/KingsCup';
import styled from 'styled-components';

const AppComponent = styled.div`
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: vertical;
`;

const App = () => {
  return (
    <AppComponent>
      <KingsCup/>
    </AppComponent>
  );
}

export default App;
