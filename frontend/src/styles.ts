import styled from "styled-components";
import tw from "twin.macro";

export const AppContainer = styled.div`
  ${tw`w-full h-screen flex flex-col items-center justify-center`}
`;

export const ResultContainer = styled.div`
  ${tw`text-4xl md:text-6xl`}
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  color: rgb(41, 52, 98);
  min-height: 80px;
`;
