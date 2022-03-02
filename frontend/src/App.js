import logo from "./logo.svg";
import styled from 'styled-components';
import "./App.css";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";

const AppWrapper = styled.div`
  background-color: white;
  display: grid;
  height: 100vh;
  width: 100vw;
  grid-template-columns: 1fr;
  grid-template-rows: 8vh auto;
  grid-template-areas:
    "Header"
    "Display";
`;

function App() {
  return (
    <AppWrapper>
      <Header />
      <Outlet/>
    </AppWrapper>
  );
}

export default App;
