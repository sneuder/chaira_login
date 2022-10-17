import styled from '@emotion/styled'
import colors from '../../constants/styles/colors';

export const ContainerInputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ContainerInput = styled.div`
  width: 100%;
  height: 45px;
  padding: 0 15px;
  border: solid 1px ${colors.quaternary}; 
  border-radius: 3px;
  display: flex;
`;

export const Input = styled.input`
  width: 100%;
`;