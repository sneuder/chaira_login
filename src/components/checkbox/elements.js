import styled from "@emotion/styled";
import colors from "../../constants/styles/colors";

import { BsCheckLg } from "react-icons/bs";

export const ContainerCheckBox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const ContainerTick = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const CheckBox = styled.input`
  width: 20px;
  height: 20px;
  border: 1px solid ${colors.quaternary};
  border-radius: 3px;
  cursor: pointer;

  &:hover {
    border-color: ${colors.secondary};
  }

  &:checked {
    background-color: ${colors.secondary};
    border-color: ${colors.secondary};
  }
`;

export const Text = styled.label`
  font-size: 14px;
  color: ${colors.tertiary};
`;

export const Icon = styled(BsCheckLg)`
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  font-size: 12px;
  pointer-events: none;
  color: ${colors.primary};
`;
