import styled from 'styled-components';

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <Container>
      <header>
        <h1>Stacey.digital</h1>
      </header>
    </Container>
  );
}

export default App;
