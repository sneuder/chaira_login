import styled from '@emotion/styled'
import colors from '../../constants/styles/colors';

import { BsCheckLg } from 'react-icons/bs'

export const ContainerCheckBox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
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
  color: ${colors.tertiary}
`;

export const Icon = styled(BsCheckLg)`

`;