import styled from '@emotion/styled'
import colors from '../../constants/styles/colors';

export const ContainerButton = styled.div`
  width: 100%;
`;

export const Button = styled.button`
  width: 100%;
  height: 45px;
  border-radius: 3px;
  font-weight: 600;
  color: ${colors.primary};
  background-color: ${colors.secondary};
  cursor: pointer;
`;