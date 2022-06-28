import styled from "styled-components/macro";

export const FileInputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DropZone = styled.div`
  border: 5px grey;
  border-style: dashed;
  border-color: rgb(242, 76, 76);
  color: rgb(41, 52, 98);

  padding: 1.5rem 2rem;
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
  font-family: "Patua One", cursive;
  background-color: rgb(242, 76, 76);
  margin-bottom: 10px;
  color: rgb(41, 52, 98);
  margin: 0 25%;
`;

export const Files = styled.div`
  margin-left: 10px;
`;
