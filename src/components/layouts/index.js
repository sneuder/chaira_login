import styled from "@emotion/styled";
import breakPoints from "../../constants/styles/breakPoints";

export const Wrapper = styled.div`
  width: 450px;

  @media screen and (max-width: ${breakPoints.phone}px){
    width: 100%;
  }
`;

export const ElementsLogin = styled.div`
  padding: 70px 30px 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
