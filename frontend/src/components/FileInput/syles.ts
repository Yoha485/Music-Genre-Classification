import styled from "styled-components";
import tw from "twin.macro";

export const FileInputContainer = styled.div`
  ${tw`px-[5%]`}
  display: flex;
  flex-direction: column;
`;

export const DropZone = styled.div`
  border: 5px grey;
  border-style: dashed;
  border-color: rgb(242, 76, 76);
  color: rgb(41, 52, 98);
  ${tw`px-6 my-6 h-32 flex flex-col items-center justify-center rounded-2xl`}
`;

export const SubmitButton = styled.button`
  height: 50px;
  border-radius: 15px;
  background-color: rgb(242, 76, 76);  
  margin-bottom: 10px;
  color: rgb(41, 52, 98);
  margin: 0 25%; 
`

export const Files = styled.div`
  margin-left: 10px;
`;
