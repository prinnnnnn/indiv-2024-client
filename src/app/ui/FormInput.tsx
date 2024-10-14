import styled from 'styled-components';

const FormInput = styled.input`
  block;
  py-2.5;
  px-0;
  width: 100%;
  text-sm;
  text-gray-900;
  background: transparent;
  border: 0;
  border-bottom: 2px solid #ccc;
  appearance: none;

  &:focus {
    outline: none;
    border-bottom-color: #0070f3; /* Change this to your theme color */
  }

  /* Autofill styles */
  &:-webkit-autofill {
    background-color: transparent !important;
    color: inherit !important;
    border-bottom: 2px solid #ccc !important; /* Keep the border style consistent */
  }

  &:-webkit-autofill:focus {
    background-color: transparent !important;
  }

  &:-webkit-autofill::first-line {
    font-size: inherit !important;
    color: inherit !important;
  }
`;

export default FormInput;
