import styled from "styled-components";

export const FileInputContainer = styled.div`
  padding-left: 5%;
  padding-right: 5%;
  display: flex;
  flex-direction: column;
`;

export const DropZone = styled.div`
  border: 5px grey;
  border-style: dashed;
  border-color: rgb(242, 76, 76);
  color: rgb(41, 52, 98);

  padding-left: 1.5rem;
  padding-right: 1.5rem;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
`;

export const SubmitButton = styled.button`
  height: 50px;
  border-radius: 15px;
  background-color: rgb(242, 76, 76);
  margin-bottom: 10px;
  color: rgb(41, 52, 98);
  margin: 0 25%;
`;

export const Files = styled.div`
  margin-left: 10px;
`;
