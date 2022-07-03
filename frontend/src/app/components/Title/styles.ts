import styled from "styled-components/macro";

export const TitleContainer = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: center;
  top: 180px;

  text-align: center;
  font-size: 60px;

  @media screen and (max-width: 525px) {
    top: 70px;
  }
`;
