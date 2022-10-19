import styled from "@emotion/styled";
import breakPoints from "../../constants/styles/breakPoints";

export const Wrapper = styled.div`
  width: 450px;

  @media screen and (max-width: ${breakPoints.phone}px){
    width: 100%;
    padding: 0 10px;
  }
`;

export const ElementsForm = styled.form`
  padding: 70px 30px 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media screen and (max-width: ${breakPoints.phone}px){
    padding-top: 55px;
  }
`;
