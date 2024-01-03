import styled from "@emotion/styled";

const StyledFormRow = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 10rem 2fr 1.2fr;
  gap: 2rem;

  padding: 1.2rem 0;

  &:first-of-type {
    padding-top: 0;
  }

  &:last-of-type {
    padding-bottom: 0;
  }

  &:has(button) {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
    margin-top: 1.2rem;
  }
`;

const Label = styled.label`
  font-weight: 500;
`;

const Error = styled.div`
  font-size: 1.4rem;
  color: var(--color-brand-600);
  background-color: #b91c1c52;
  padding: 5px;
  border-radius: var(--border-radius-md);
  text-align: center;
`;

function FormRow({ label, error, children }) {
  return (
    <StyledFormRow>
      <Label htmlFor={children?.props?.id}>{label}</Label>
      {children}
      {error && <Error>{error.message}</Error>}
    </StyledFormRow>
  );
}

export default FormRow;
