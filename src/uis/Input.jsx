import styled from "@emotion/styled";
import { css } from "@emotion/react";

const Input = styled.input`
  padding: 8px 2rem;
  width: 100%;
  background-color: var(--color-grey-800);
  border: none;
  border-radius: var(--border-radius-sm);

  &:disabled {
    opacity: 0.6;
    background-color: var(--color-grey-600);
  }

  &:focus {
    background-color: var(--color-grey-700);
  }
  ${(props) =>
    props.type === "file" &&
    css`
      font-size: 1.4rem;
      border-radius: var(--border-radius-sm);
      &::file-selector-button {
        font: inherit;
        font-weight: 500;
        padding: 0.8rem 1.2rem;
        margin-right: 1.2rem;
        border-radius: var(--border-radius-sm);
        border: none;
        color: var(--color-brand-50);
        background-color: var(--color-brand-600);
        cursor: pointer;
        transition: color 0.2s, background-color 0.2s;

        &:hover {
          background-color: var(--color-brand-700);
        }
      }
    `}
`;

export default Input;
