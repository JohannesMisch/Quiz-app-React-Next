import styled from "styled-components";
import Navbar from "../components/Navbar";
import GlobalStyle from "../styles";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <StyledHeadline>Quiz App</StyledHeadline>
      <Component {...pageProps} />
      <Navbar />
    </>
  );
}
const StyledHeadline = styled.h1`
  position: fixed;
  margin: 0;
  padding: 0;
  top: 0;
  text-align: center;
  width: 100%;
  background-color: red;
`;
