import styled from "styled-components";

export default function AddNewCard({ createQuestion }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    createQuestion({ test: 5 });
  };
  return (
    <StyledForm onSubmit={handleSubmit}>
      <label htmlFor="questionText">Question</label>
      <textarea
        name="Question"
        id="questionText"
        cols="30"
        rows="10"
      ></textarea>
      <label htmlFor="answerText">Answer</label>
      <textarea name="Answer" id="answerText" cols="30" rows="10"></textarea>
      <label htmlFor="html">HTML</label>
      <input type="checkbox" name="Html" id="html" />
      <label htmlFor="css">CSS</label>
      <input type="checkbox" name="Css" id="css" />
      <label htmlFor="react">REACT</label>
      <input type="checkbox" name="React" id="react" />
      {/* <button></button> für neue Tags ? */}
      <button type="submit">Create</button>
    </StyledForm>
  );
}

const StyledForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 14px;
`;
