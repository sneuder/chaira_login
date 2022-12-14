import styled from "@emotion/styled";
import breakPoints from "../../constants/styles/breakPoints";
import colors from '../../constants/styles/colors';

export const ContainerLogo = styled.figure`
  width: 130px;
  height: 130px;
  padding: 20px;
  border-radius: 50%;
  background-color: ${colors.primary};
  overflow: hidden;
  position: absolute;
  top: -65px;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: ${breakPoints.phone}px){
    width: 110px;
    height: 110px;
    top: -55px;
  }
`;

export const LogoImage = styled.img`
  width: 100%;
`;
