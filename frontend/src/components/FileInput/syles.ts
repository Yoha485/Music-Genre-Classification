import styled from "styled-components";
import tw from "twin.macro";

export const FileInputContainer = styled.div`
  ${tw`w-full h-screen flex flex-col items-center justify-center`}
`;

export const DropZone = styled.div`
  border: 5px grey;
  border-style: dashed;
  ${tw`px-6 my-6 h-32 flex flex-col items-center justify-center rounded-2xl`}
`;

export const Files = styled.div``;
