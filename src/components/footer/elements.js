import styled from '@emotion/styled'
import colors from '../../constants/styles/colors';

export const ContainerFooter = styled.footer`
  width: 100%;
  padding: 10px 25px;
  border-radius: 0 0 5px 5px;
  background-color: ${colors.secondary};
`;

export const FooterText = styled.p`
  text-align: center;
  font-size: 10px;
  color: ${colors.primary};
`;