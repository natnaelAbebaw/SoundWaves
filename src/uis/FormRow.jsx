import styled from "@emotion/styled";

const StyledFormRow = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 10rem 2fr 1.2fr;
  gap: 2.4rem;

  padding: 1.2rem 0;

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
  }

  &:has(button) {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`;

const Label = styled.label`
  font-weight: 500;
`;

const Error = styled.div`
  font-size: 1.4rem;
  color: var(--color-red-500);
`;

function FormRow({ label, error, children }) {
  return (
    <StyledFormRow>
      <Label htmlFor={children?.props?.id}>{label}</Label>
      {children}
      {error && <Error>{error}</Error>}
    </StyledFormRow>
  );
}

export default FormRow;
