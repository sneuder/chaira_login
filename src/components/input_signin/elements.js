import styled from '@emotion/styled'
import colors from '../../constants/styles/colors';
import { FaUserAlt, FaLock } from 'react-icons/fa';

export const ContainerInputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ContainerInput = styled.div`
  width: 100%;
  height: 45px;
  padding: 0 12px;
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