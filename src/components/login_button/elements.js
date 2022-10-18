import styled from "@emotion/styled";
import { styleInputs } from "../../constants/styles/design";
import colors from "../../constants/styles/colors";

export const ContainerButton = styled.div`
  width: 100%;
`;

export const Button = styled.button`
  width: 100%;
  height: ${styleInputs.height}px;
  padding: ${styleInputs.padding}px;
  border-radius: 3px;
  font-weight: 600;
  color: ${colors.primary};
  background-color: ${colors.secondary};
  cursor: pointer;

  transition: all 0.3s ease;

  &:hover {
    background-color: ${colors.hover.secondary};
  }
`;
