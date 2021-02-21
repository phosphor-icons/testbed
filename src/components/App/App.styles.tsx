import styled from 'styled-components';

export const AppContainer = styled.div`
  min-height: 100vh;
  margin: 0 auto;
  max-width: 992px;
  padding: 64px 144px;
  padding-bottom: 16px;
  background-color: white;
  font-family: 'Manrope', sans-serif;
  font-size: 16px;

  & h1 {
    font-weight: normal;
    font-size: 24px;
  }

  & input, button, textarea, select {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 16px;
    outline: none;
  }
`;

export const AppHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
`;

export const DemoArea = styled.div`
  display: grid;
  grid-template-columns: 1fr 400px;
  align-items: flex-start;
  padding-bottom: 64px;
`;