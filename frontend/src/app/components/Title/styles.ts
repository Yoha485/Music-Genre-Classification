import styled from "styled-components/macro";

export const TitleContainer = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: center;
  top: 16%;

  text-align: center;
  font-size: 60px;

  @media screen and (max-width: 525px) {
    top: 10.5%;
  }
`;
