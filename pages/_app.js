import styled from "styled-components";
import Navbar from "../components/Navbar";
import GlobalStyle from "../styles";
import useLocalStorageState from "use-local-storage-state";
import Questions from "../db.json";

export default function App({ Component, pageProps }) {
  const [questions, setQuestions] = useLocalStorageState("questions", {
    defaultValue: [...Questions],
  });

  function createQuestion(question) {
    setQuestions([...questions, question]);
  }

  return (
    <>
      <GlobalStyle />
      <StyledHeadline>Quiz App</StyledHeadline>
      <Component
        {...pageProps}
        questions={questions}
        createQuestion={createQuestion}
      />
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
