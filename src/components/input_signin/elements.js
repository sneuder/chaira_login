import styled from "@emotion/styled";
import colors from "../../constants/styles/colors";
import { styleInputs } from "../../constants/styles/design";
import { FaUserAlt, FaLock } from "react-icons/fa";

export const ContainerInputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const ContainerInput = styled.div`
  width: 100%;
  height: ${styleInputs.height}px;
  padding: 0 ${styleInputs.padding}px;
  border: solid 1px ${colors.quaternary};
  border-radius: 3px;
  display: flex;
  align-items: center;
  gap: 12px;

  &:focus {
    border-color: ${colors.secondary};
  }
`;

export const Input = styled.input`
  width: 100%;
`;

export const UserIcon = styled(FaUserAlt)`
  color: ${colors.quaternary};
  font-size: 18px;
`;

export const PadlockIcon = styled(FaLock)`
  color: ${colors.quaternary};
  font-size: 18px;
`;
